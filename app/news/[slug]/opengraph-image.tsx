import { ImageResponse } from "next/og";
import { getAllNews, getNews } from "@/lib/news";

export const alt = "365loan news article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllNews().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNews(slug);
  const title = item?.meta.title ?? "365loan News";
  const category = (item?.meta.category ?? "News").toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#041735",
          padding: "72px 80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10, background: "#2f8f5f" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 46, height: 46, borderRadius: 12, background: "#2f8f5f" }} />
          <span style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>365loan</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: 5, color: "#6bab86" }}>
            {category}
          </span>
          <span style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.08, maxWidth: 1000, letterSpacing: -1.5 }}>
            {title}
          </span>
        </div>

        <span style={{ fontSize: 24, color: "rgba(255,255,255,0.55)" }}>365loan.ca/news</span>
      </div>
    ),
    { ...size },
  );
}
