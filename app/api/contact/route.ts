import { SITE_NAME } from "@/lib/seo";

/* ── Per-site config ───────────────────────────────────────────────────────
   These are the only lines to change when copying this file to another site.
   FROM_ADDRESS must stay on a domain verified in Resend — 365loan.ca is the
   one verified sender for the whole network, so leave it until another
   domain is verified. TO_ADDRESS is forwarded by Cloudflare Email Routing
   and needs no verification.                                              */
const TO_ADDRESS = "support@365loan.ca";
const FROM_ADDRESS = `${SITE_NAME} Contact <noreply@365loan.ca>`;
/* ─────────────────────────────────────────────────────────────────────── */

export const dynamic = "force-dynamic";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const LIMITS = { name: 100, email: 200, message: 5000 };

// Best-effort throttle. Each serverless instance keeps its own map, so this
// slows obvious floods rather than guaranteeing a global limit.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 3;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  if (hits.size > 5000) hits.clear();

  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) return true;

  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function clientIp(request: Request) {
  // cf-connecting-ip is the real visitor IP when proxied through Cloudflare.
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown"
  );
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function buildEmail(name: string, email: string, message: string, topic: string) {
  const subject = `[${SITE_NAME}] ${topic} — ${name}`;

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;color:#111;line-height:1.6">
      <h2 style="margin:0 0 16px;font-size:17px">${escapeHtml(topic)}</h2>
      <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin:16px 0 4px"><strong>Message:</strong></p>
      <div style="white-space:pre-wrap;padding:12px 14px;background:#f6f6f6;border-radius:8px">${escapeHtml(message)}</div>
      <p style="margin:20px 0 0;font-size:13px;color:#666">
        Sent from the ${SITE_NAME} contact form. Reply directly to answer ${escapeHtml(name)}.
      </p>
    </div>`;

  const text = `New contact form message

Name: ${name}
Email: ${email}

Message:
${message}

— Sent from the ${SITE_NAME} contact form.`;

  return { subject, html, text };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return Response.json(
      { error: "The contact form is not configured. Please email us directly." },
      { status: 500 },
    );
  }

  if (rateLimited(clientIp(request))) {
    return Response.json(
      { error: "Too many messages. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, company, topic } = (body ?? {}) as Record<string, unknown>;

  // Honeypot: hidden from humans, commonly auto-filled by bots. Return a
  // success shape so the bot has no signal that it was rejected.
  if (typeof company === "string" && company.trim() !== "") {
    return Response.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !isEmail(email.trim())
  ) {
    return Response.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const cleanName = name.trim().slice(0, LIMITS.name);
  const cleanEmail = email.trim().slice(0, LIMITS.email);
  const cleanMessage = message.trim().slice(0, LIMITS.message);

  const cleanTopic =
    typeof topic === "string" && topic.trim() ? topic.trim().slice(0, 40) : "New message";

  const { subject, html, text } = buildEmail(cleanName, cleanEmail, cleanMessage, cleanTopic);

  let response: globalThis.Response;
  try {
    response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [TO_ADDRESS],
        reply_to: cleanEmail,
        subject,
        html,
        text,
      }),
    });
  } catch (err) {
    console.error("[contact] network error calling Resend", err);
    return Response.json(
      { error: "We couldn't send your message. Please email us directly." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    // Logged in full so a delivery failure is never silently swallowed.
    console.error("[contact] Resend rejected the send", {
      status: response.status,
      detail: await response.text().catch(() => "<unreadable>"),
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
    });
    return Response.json(
      { error: "We couldn't send your message. Please email us directly." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
