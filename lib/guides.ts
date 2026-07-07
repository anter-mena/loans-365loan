export type GuideCategory = "guide" | "how-to" | "regulation" | "seasonal";

export interface GuideSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  intro: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  relatedLinks: RelatedLink[];
}

export const GUIDE_CATEGORY_LABELS: Record<GuideCategory, string> = {
  guide: "Guides",
  "how-to": "How-To Guides",
  regulation: "Provincial Lending Regulations",
  seasonal: "Seasonal & Timely Guides",
};

export const GUIDES: Guide[] = [
  {
    slug: "how-to-choose-your-loan-term-length",
    title: "How to Choose Your Loan Term Length",
    description: "Learn how to select the optimal loan term for your situation. Balance monthly payments, total interest, and your goals.",
    category: "guide",
    intro: "Your loan term is one of the most consequential choices you'll make when borrowing — it shapes your monthly payment, your total interest cost, and how long you're committed to repayment. Here's a framework for choosing the right length for your specific situation.",
    sections: [
      { heading: "Start With Your Monthly Budget", body: "Before anything else, calculate what you can comfortably afford each month without straining your other expenses. This number, more than any other factor, should set the floor for how short a term you can realistically choose." },
      { heading: "Match the Term to the Purpose", body: "A one-time, smaller expense usually suits a short term. A larger expense or debt consolidation often justifies a longer term, since the amount alone would make a very short term's payment unmanageable.", bullets: ["Small, one-time costs → 3-6 months", "Mid-sized planned expenses → 12-18 months", "Larger amounts or consolidation → 24-60 months"] },
      { heading: "Calculate the Total Cost, Not Just the Payment", body: "Run the numbers for at least two term options using a loan calculator before deciding. The difference in total interest between a 12-month and 36-month term on the same amount is often larger than it first appears." },
      { heading: "Consider Your Financial Trajectory", body: "If you expect your income to increase soon, a shorter term you can grow into may make sense. If your finances are currently tight, prioritize the lower payment of a longer term, even at a higher total cost — a missed payment costs more than the extra interest." },
    ],
    faqs: [
      { q: "Is there a 'default' loan term I should choose?", a: "No single default fits everyone — 12 and 24 months are the most commonly chosen terms since they balance payment size against total cost reasonably well, but your specific budget should drive the decision." },
      { q: "Can I pay off a longer-term loan early to save on interest?", a: "Many lenders allow early repayment or extra payments toward principal, which can meaningfully reduce total interest on a longer-term loan — confirm this is allowed before accepting an offer." },
    ],
    relatedLinks: [
      { label: "Loans by repayment term", href: "/loans/by-term" },
      { label: "Loan calculator", href: "/resources/tools/loan-calculator" },
    ],
  },
  {
    slug: "no-credit-check-loans",
    title: "No Credit Check Loans",
    description: "Explore loan options that don't require a traditional credit check.",
    category: "guide",
    intro: "\"No credit check\" is one of the most searched — and most misunderstood — terms in personal lending. True no-credit-check loans are rare, carry real risks, and are often a red flag for predatory terms. Here's what the term actually means and what more legitimate alternatives look like.",
    sections: [
      { heading: "What 'No Credit Check' Usually Means", body: "Most legitimate lenders perform at least a soft credit check, which doesn't affect your score, even for borrowers with poor or limited credit. A lender advertising absolutely no credit check of any kind is unusual and worth extra scrutiny." },
      { heading: "Why It's a Risk Signal", body: "Skipping any credit or income verification removes a lender's normal risk assessment — which they often compensate for with extremely high fees or aggressive collection practices. A loan with no verification at all isn't evaluating your ability to repay, which rarely works in the borrower's favour." },
      { heading: "Better Alternatives for Bad or No Credit", body: "Lenders who specialize in bad credit still check your file, but weigh income and stability more heavily than the score itself — this is a meaningfully safer path than a lender skipping verification entirely.", bullets: ["Bad credit-focused lenders (soft check, income-weighted approval)", "Newcomer-friendly lenders for a thin credit file", "A secured loan or credit-builder product to establish history"] },
    ],
    faqs: [
      { q: "Are no credit check loans legal in Canada?", a: "Lenders can legally choose not to check credit, but this doesn't mean it's advisable for borrowers — a soft-check lender who evaluates income and stability is typically a safer, more transparent option." },
      { q: "Will checking my rate with a soft credit check hurt my score?", a: "No — a soft credit inquiry doesn't affect your credit score. Only a hard inquiry, which happens if you accept a specific lender's offer, can have a small, temporary impact." },
    ],
    relatedLinks: [
      { label: "Bad Credit Loans", href: "/loans/by-type/bad-credit-loans" },
      { label: "Loans for Newcomers", href: "/loans/by-type/newcomers" },
    ],
  },
  {
    slug: "best-personal-loans",
    title: "Best Personal Loans",
    description: "Compare the best personal loan options in Canada for 2026.",
    category: "guide",
    intro: "There's no single \"best\" personal loan — the right lender depends on your credit profile, the amount you need, and how quickly you need it. This guide ranks options by scenario, with the specific criteria that actually distinguish a good match from a mediocre one in each case, rather than a single overall winner.",
    sections: [
      { heading: "Best for Fast Funding", body: "Look for a fully digital application, a lender-stated decision time under an hour, and same-business-day e-transfer or direct deposit rather than a 24-hour promise with a fine-print delay.", bullets: ["Digital application with no in-person or mailed documents required", "A stated cutoff time for same-day funding, not just \"fast\" marketing language", "Bank-linking or instant statement verification instead of manual document upload"] },
      { heading: "Best for Bad Credit", body: "Prioritize lenders who explicitly state they evaluate Poor or Fair credit ranges, rather than a general-purpose lender that might decline outright.", bullets: ["Lender explicitly lists a minimum score well below 660, or states no minimum", "Approval criteria that weigh income and employment alongside score, not score alone", "No upfront fee required before funds are disbursed"] },
      { heading: "Best for the Lowest Rate", body: "For Good credit and above, the spread between lenders can be several percentage points on the same profile — compare the full APR across at least a few offers before accepting.", bullets: ["APR (not just the advertised interest rate) compared across every offer", "No prepayment penalty, in case a lower rate becomes available later", "Rate confirmed against your actual credit tier, not a \"starting from\" teaser rate"] },
      { heading: "Best for Debt Consolidation", body: "The best consolidation-focused lender either pays your existing creditors directly or offers a term long enough to meaningfully lower your combined monthly payment.", bullets: ["Direct-to-creditor disbursement option, if you want certainty the old debts are closed", "A term long enough to lower your combined payment without adding excessive total interest", "No cap on the number of debts it can consolidate in one loan"] },
    ],
    faqs: [
      { q: "Is the loan with the lowest advertised rate always the best choice?", a: "Not necessarily — compare the full APR (which includes fees) and confirm you actually qualify for the advertised rate, since the lowest rates are often reserved for excellent credit only." },
      { q: "How many lenders should I compare before choosing?", a: "Comparing at least 2-3 offers is generally enough to identify meaningful rate differences without spending excessive time — our network surfaces multiple matched offers from one application." },
    ],
    relatedLinks: [
      { label: "Same Day Loans", href: "/loans/by-type/same-day-loans" },
      { label: "Debt Consolidation Loans", href: "/loans/by-type/debt-consolidation-loans" },
      { label: "Loan calculator", href: "/resources/tools/loan-calculator" },
    ],
  },
  {
    slug: "best-loans-for-bad-credit",
    title: "Best Loans for Bad Credit",
    description: "Top-rated loan options for borrowers with bad credit in Canada.",
    category: "guide",
    intro: "This isn't a general explainer on bad-credit lending — for that, see our bad credit loans overview. This is a ranked checklist for evaluating specific offers once you're comparing them side by side, so you pick the actual best one rather than the first one that approves you.",
    sections: [
      { heading: "Rank by Total Repayable, Not Approval Speed", body: "Two lenders can both approve you instantly at very different total costs. Line up the total repayable amount — not the monthly payment or the APR alone — for every offer before choosing.", bullets: ["Total repayable amount for the same loan amount and term across offers", "Any origination or administration fee added on top of the stated APR", "Whether the rate is fixed for the full term or can change"] },
      { heading: "Check the Exact Score Range, Not Just 'Bad Credit Accepted'", body: "\"Bad credit welcome\" can mean anywhere from 300 to 659 — a lender built for 620+ may still decline a 350. Confirm the lender's stated range actually includes your specific score, using our credit score guides for your exact number." },
      { heading: "Prefer Lenders That Report to Both Bureaus", body: "A bad-credit loan is often as much about rebuilding credit as covering the immediate cost — confirm the lender reports payment history to both Equifax and TransUnion, not just one, so on-time payments count fully toward your score." },
      { heading: "Rule Out Anything With an Upfront Fee", body: "A legitimate bad-credit lender deducts fees from the loan proceeds, never asks for payment before releasing funds. Any offer requiring payment upfront to \"unlock\" the loan should be ruled out immediately, regardless of how competitive the advertised rate looks." },
    ],
    faqs: [
      { q: "What's considered 'bad credit' in Canada?", a: "Equifax classifies scores below 560 as Poor and 560-659 as Fair — both are commonly referred to as bad credit, though lenders and rates differ meaningfully within that range." },
      { q: "Can a bad credit loan help improve my score?", a: "Yes — many lenders report payment history to the credit bureaus, so consistent on-time payments on a bad credit loan can help rebuild your score over time." },
    ],
    relatedLinks: [
      { label: "Bad Credit Loans overview", href: "/loans/by-type/bad-credit-loans" },
      { label: "Loans by Credit Score", href: "/loans/by-credit-score" },
      { label: "Avoiding Loan Scams", href: "/resources/guides/avoiding-loan-scams" },
    ],
  },
  {
    slug: "how-to-get-a-personal-loan-with-bad-credit",
    title: "How to Get a Personal Loan with Bad Credit",
    description: "Step-by-step guide to getting approved for a loan with bad credit in Canada.",
    category: "guide",
    intro: "Getting approved with bad credit is entirely possible, but it helps to approach the process differently than a borrower with excellent credit would. Here's a step-by-step approach to maximize your approval odds and get a fair deal.",
    sections: [
      { heading: "Step 1: Check Your Credit Report First", body: "Know your exact score and check for errors before applying — a mistake on your report could be artificially lowering your score, and disputing it is free." },
      { heading: "Step 2: Gather Proof of Income and Stability", body: "Since your score is a limiting factor, be ready to clearly document income, whether through pay stubs, bank statements, or benefit statements — this often matters more than the score itself for subprime lenders." },
      { heading: "Step 3: Apply With Lenders Who Specialize in Your Range", body: "Target lenders explicitly built for Poor or Fair credit rather than mainstream lenders likely to decline you." },
      { heading: "Step 4: Borrow Only What You Need", body: "A smaller loan amount is both easier to get approved for and easier to repay — resist the temptation to borrow the maximum offered." },
      { heading: "Step 5: Compare Offers Before Accepting", body: "Checking your rate uses a soft credit inquiry, so compare a few options before committing to the first offer you receive." },
    ],
    faqs: [
      { q: "Can I get approved the same day with bad credit?", a: "Often yes — many bad-credit-focused lenders offer decisions within minutes and funding within 24 hours, since the process is designed around this exact credit profile." },
      { q: "Will multiple loan applications hurt my credit?", a: "Comparing rates through soft credit inquiries won't hurt your score — only accepting an offer and triggering a hard inquiry has any impact, and that only happens once per accepted loan." },
    ],
    relatedLinks: [
      { label: "Understanding Credit Reports", href: "/resources/guides/understanding-credit-reports" },
      { label: "Bad Credit Loans", href: "/loans/by-type/bad-credit-loans" },
    ],
  },
  {
    slug: "payday-loan-alternatives",
    title: "Payday Loan Alternatives",
    description: "Safer, more affordable alternatives to payday loans.",
    category: "guide",
    intro: "If you're considering a payday loan, it's worth knowing there are usually lower-cost alternatives available, even with less-than-perfect credit. Here's a rundown of the most practical options to consider first.",
    sections: [
      { heading: "Personal Installment Loans", body: "Structurally similar in speed and accessibility to a payday loan, but repaid over months rather than in one lump sum, at a regulated APR capped well below payday loan costs." },
      { heading: "Credit Union Small Loans", body: "Many credit unions offer small, short-term loans to members at lower rates than payday lenders, though approval can take longer and may require membership." },
      { heading: "Employer Paycheque Advances", body: "Some employers will advance a portion of your next paycheque interest-free — worth asking about before considering an outside lender." },
      { heading: "Community and Non-Profit Emergency Assistance", body: "Local non-profits and rent banks sometimes offer emergency, low- or no-interest assistance for specific costs like rent or utilities — worth checking before borrowing." },
    ],
    faqs: [
      { q: "Are payday loan alternatives harder to qualify for?", a: "Not necessarily — personal installment loans in our network often have similarly fast approval to payday loans, just at a meaningfully lower regulated cost." },
      { q: "What if I need money faster than a personal loan can provide?", a: "Most personal loan applicants receive a decision within minutes and funds within 24 hours, which is only slightly slower than a typical payday loan, for substantially less cost." },
    ],
    relatedLinks: [
      { label: "Payday Alternative Loans", href: "/loans/by-type/payday-alternative-loans" },
      { label: "Payday Loans vs Personal Loans", href: "/resources/comparisons/payday-loans-vs-personal-loans" },
    ],
  },
  {
    slug: "personal-loan-alternatives",
    title: "Personal Loan Alternatives",
    description: "Explore alternatives to personal loans — from credit cards to home equity and peer-to-peer lending in Canada.",
    category: "guide",
    intro: "A personal loan is a good fit for many situations, but it's not the only option — depending on your circumstances, a different borrowing or financing tool might cost less or fit better. Here's a broader look at what else is available.",
    sections: [
      { heading: "Credit Cards", body: "Better suited to smaller, ongoing, or flexible expenses, especially if you can pay the balance in full." },
      { heading: "Lines of Credit", body: "A good fit if your borrowing needs are ongoing or uncertain in amount, since you only pay interest on what you draw." },
      { heading: "Home Equity Options (HELOC)", body: "If you own your home, a HELOC often offers a meaningfully lower rate than an unsecured personal loan, at the cost of using your home as collateral." },
      { heading: "Peer-to-Peer Lending", body: "Some platforms connect individual investors directly with borrowers, sometimes offering competitive rates for well-qualified applicants, though the landscape in Canada is smaller than in the US." },
      { heading: "Borrowing From Family or Friends", body: "Often interest-free, but worth formalizing with a written agreement to protect the relationship if things don't go as planned." },
    ],
    faqs: [
      { q: "When does a personal loan make more sense than these alternatives?", a: "A personal loan is often the best fit when you know the exact amount you need, want a fixed rate and payoff date, and don't have qualifying collateral for a lower-cost secured option." },
      { q: "Is peer-to-peer lending widely available in Canada?", a: "It's a smaller market than in the US, with fewer established platforms — availability and terms vary, so research any specific platform carefully before committing." },
    ],
    relatedLinks: [
      { label: "Personal Loans vs Credit Cards", href: "/resources/comparisons/personal-loans-vs-credit-cards" },
      { label: "Personal Loans vs Lines of Credit", href: "/resources/comparisons/personal-loans-vs-lines-of-credit" },
    ],
  },
  {
    slug: "loan-approval-requirements",
    title: "Loan Approval Requirements",
    description: "What you need to qualify for a personal loan in Canada.",
    category: "guide",
    intro: "While specific requirements vary by lender, most personal loan approvals in Canada come down to a consistent set of core criteria. Understanding these upfront can help you gauge your odds before applying.",
    sections: [
      { heading: "Basic Eligibility", body: "Every lender in our network starts from the same baseline requirements.", bullets: ["18 years or older (19 in BC, NB, NL, NS, NT, NU, and YT)", "Canadian citizen or permanent resident", "Valid Social Insurance Number (SIN)", "Active bank account in your name", "A regular source of income"] },
      { heading: "Income and Employment", body: "Lenders want confidence you can repay — this usually means proof of regular income, whether from employment, self-employment, or benefits like a pension. Longer, more stable income history generally strengthens an application." },
      { heading: "Credit Profile", body: "Your credit score influences your rate and which lenders will consider you, but it's rarely the sole factor — income and existing debt load matter alongside it." },
      { heading: "Debt-to-Income Ratio", body: "Lenders also look at how much of your income is already committed to other debts — a lower ratio generally improves your approval odds and rate." },
    ],
    faqs: [
      { q: "What's the single most important factor in loan approval?", a: "There isn't one universal factor — income stability, credit profile, and existing debt load are all weighed together, and a strength in one area can offset a weakness in another." },
      { q: "Can I check if I qualify before formally applying?", a: "Many lenders offer prequalification using only self-reported information and a soft credit check, giving you a rough sense of your odds with no impact to your score." },
    ],
    relatedLinks: [
      { label: "Government of PEI — Age of Majority Act", href: "https://www.princeedwardisland.ca/en/information/justice-and-public-safety/are-you-old-enough" },
      { label: "Understanding Debt-to-Income Ratio", href: "/resources/guides/understanding-debt-to-income-ratio" },
    ],
  },
  {
    slug: "preparing-for-a-loan-application",
    title: "Preparing for a Loan Application",
    description: "What documents and information you need before applying for a personal loan.",
    category: "guide",
    intro: "Having the right information ready before you apply can make the difference between an instant decision and a delayed one. Here's what to gather before you start.",
    sections: [
      { heading: "Personal Identification", body: "", bullets: ["Government-issued photo ID", "Your Social Insurance Number (SIN)", "Proof of your current address"] },
      { heading: "Income Documentation", body: "", bullets: ["Recent pay stubs or an employment letter", "Bank statements showing regular deposits (self-employed or gig applicants especially)", "Pension or benefit statements, if applicable"] },
      { heading: "Banking Information", body: "Your bank account details, since funds are typically deposited via direct deposit or e-transfer and payments are withdrawn the same way." },
      { heading: "A Clear Sense of What You Need", body: "Know the specific amount and, ideally, the term you're hoping for — this helps you compare offers meaningfully rather than reacting to whatever is presented first." },
    ],
    faqs: [
      { q: "Do I need physical copies of my documents?", a: "Most lenders in our network accept digital uploads or verify information electronically, so physical copies usually aren't necessary — check your specific lender's requirements." },
      { q: "What if I don't have traditional pay stubs?", a: "Bank statements showing consistent income deposits are commonly accepted as an alternative, especially for self-employed, gig, or contract workers." },
    ],
    relatedLinks: [
      { label: "Loans for Self-Employed", href: "/loans/by-type/self-employed" },
      { label: "Loan Approval Requirements", href: "/resources/guides/loan-approval-requirements" },
    ],
  },
  {
    slug: "understanding-credit-reports",
    title: "Understanding Credit Reports",
    description: "Learn how to read and interpret your credit report to improve your borrowing power.",
    category: "guide",
    intro: "Your credit report is the detailed record lenders use to assess your borrowing history — understanding what's in it, and how to read it, puts you in a much stronger position when applying for a loan.",
    sections: [
      { heading: "What's Included", body: "", bullets: ["Personal identifying information", "Credit accounts and their payment history", "Credit inquiries (soft and hard)", "Public records like bankruptcies or collections"] },
      { heading: "Where to Get Your Report", body: "Canadians can request a free credit report from both Equifax Canada and TransUnion Canada — checking your own report is a soft inquiry and doesn't affect your score." },
      { heading: "What to Check For", body: "Look specifically for errors — incorrect account balances, accounts that aren't yours, or late payments that were actually made on time. Errors are more common than most people expect and can meaningfully drag down your score." },
      { heading: "How to Dispute an Error", body: "Both bureaus have a formal, free dispute process — gather any supporting documentation and submit a dispute directly, which typically resolves within 30 days." },
    ],
    faqs: [
      { q: "How often should I check my credit report?", a: "Checking at least once or twice a year is a reasonable habit, and definitely before a major application like a loan or mortgage, since it's free and doesn't affect your score." },
      { q: "Is my credit report the same as my credit score?", a: "No — your credit report is the detailed record of your credit history, while your credit score is a numerical summary calculated from that report. You typically need to check them separately." },
    ],
    relatedLinks: [
      { label: "Equifax Canada — Credit Score Education", href: "https://www.equifax.ca/personal/education/credit-score/articles/-/learn/what-is-a-good-credit-score/" },
      { label: "TransUnion Canada", href: "https://www.transunion.ca/" },
    ],
  },
  {
    slug: "refinancing-personal-loans",
    title: "Refinancing Personal Loans",
    description: "When and how to refinance your personal loan for better rates or terms.",
    category: "guide",
    intro: "Refinancing means replacing your current loan with a new one, ideally at a better rate or more manageable term. It's not always the right move, but in the right circumstances it can meaningfully reduce what you pay.",
    sections: [
      { heading: "When Refinancing Makes Sense", body: "", bullets: ["Your credit score has improved significantly since your original loan", "Interest rates in the market have dropped", "Your income has decreased and you need a lower monthly payment", "You want to consolidate this loan with other debts"] },
      { heading: "When It Might Not", body: "If your current loan is close to being paid off, or if the new loan carries an origination fee that outweighs the interest savings, refinancing may not be worth it — run the numbers before committing." },
      { heading: "How to Refinance", body: "Compare new offers the same way you did originally, then use the new loan to pay off the old one. Confirm there's no prepayment penalty on your existing loan before proceeding." },
    ],
    faqs: [
      { q: "Does refinancing hurt my credit score?", a: "Applying for a new loan involves a hard credit inquiry, which has a small, temporary impact — but the benefit of a lower rate or payment often outweighs this minor, short-term effect." },
      { q: "Can I refinance a loan with the same lender?", a: "Some lenders offer this option, sometimes called a loan modification, though shopping around with other lenders in our network can reveal a better overall rate." },
    ],
    relatedLinks: [
      { label: "Lower Your Loan Interest Rate", href: "/resources/guides/lower-your-loan-interest-rate" },
      { label: "Debt Consolidation Loans", href: "/loans/by-type/debt-consolidation-loans" },
    ],
  },
  {
    slug: "emergency-fund-basics",
    title: "Emergency Fund Basics",
    description: "How to build an emergency fund to reduce your reliance on loans.",
    category: "guide",
    intro: "An emergency fund is money set aside specifically for unplanned expenses, reducing how often you need to borrow. Building one takes time, but even a small fund can make a meaningful difference.",
    sections: [
      { heading: "How Much to Save", body: "A common guideline is 3-6 months of essential expenses, though even a smaller starter fund of $500-$1,000 can cover many common emergencies without borrowing." },
      { heading: "Where to Keep It", body: "A high-interest savings account, separate from your everyday chequing account, keeps the money accessible but reduces the temptation to spend it on non-emergencies." },
      { heading: "How to Build It Gradually", body: "Automating a small, consistent transfer each payday — even $25-$50 — builds a fund faster than most people expect, without feeling like a major budget sacrifice." },
      { heading: "What Counts as an Emergency", body: "A genuine, unplanned, necessary cost — not a planned purchase or a want. Being disciplined about what qualifies protects the fund for when you actually need it." },
    ],
    faqs: [
      { q: "Should I build an emergency fund before paying off debt?", a: "Many financial experts suggest a small starter fund ($500-$1,000) first, then focusing on higher-interest debt, then building the fund further — this balances protection against future emergencies with reducing costly interest." },
      { q: "Is it too late to start an emergency fund if I already have debt?", a: "No — even a small fund can prevent new debt from an unexpected cost while you continue paying down existing balances." },
    ],
    relatedLinks: [
      { label: "Emergency Expenses", href: "/loans/by-purpose/emergency-expenses" },
      { label: "Emergency Loans", href: "/loans/by-type/emergency-loans" },
    ],
  },
  {
    slug: "understanding-debt-to-income-ratio",
    title: "Understanding Debt-to-Income Ratio",
    description: "How your DTI ratio affects loan approval and what you can do to improve it.",
    category: "guide",
    intro: "Your debt-to-income ratio (DTI) compares your total monthly debt payments to your gross monthly income. It's one of the key numbers lenders use alongside your credit score to assess whether you can comfortably take on a new payment.",
    sections: [
      { heading: "How to Calculate It", body: "Add up all your monthly debt payments (loans, credit cards, car payments) and divide by your gross monthly income, then multiply by 100 for a percentage. There's no single fixed Canadian standard, but a DTI under roughly 36% is a commonly cited general guideline — individual lenders in our network set their own specific thresholds." },
      { heading: "Why It Matters for Approval", body: "A high DTI signals to lenders that a large share of your income is already committed, leaving less room for a new payment — this can affect both approval and the loan amount you're offered." },
      { heading: "How to Improve Your DTI", body: "", bullets: ["Pay down existing debt balances before applying", "Avoid taking on new debt shortly before a loan application", "Increase your income, even temporarily, if possible"] },
    ],
    faqs: [
      { q: "What DTI ratio do lenders look for?", a: "Standards vary by lender, but a DTI below roughly 36% is often viewed favourably as a general guideline, while a very high ratio (above 50%) may limit your approval odds or the loan amount you're offered." },
      { q: "Does my DTI affect my credit score directly?", a: "No — DTI isn't part of your credit score calculation, but lenders check it separately during the approval process as an additional measure of your ability to repay." },
    ],
    relatedLinks: [
      { label: "Credit Utilization Explained", href: "/resources/guides/credit-utilization-explained" },
      { label: "Loan Approval Requirements", href: "/resources/guides/loan-approval-requirements" },
    ],
  },
  {
    slug: "credit-utilization-explained",
    title: "Credit Utilization Explained",
    description: "How credit utilization impacts your score and loan approval chances.",
    category: "guide",
    intro: "Credit utilization — the percentage of your available revolving credit you're currently using — is one of the most influential factors in your credit score, second only to payment history.",
    sections: [
      { heading: "How It's Calculated", body: "Divide your total revolving credit balances by your total available credit limits, then multiply by 100. Using $3,000 of a $10,000 total limit across your cards gives a 30% utilization rate." },
      { heading: "Why It Matters", body: "High utilization signals to lenders that you may be relying heavily on available credit, which can lower your score even if you make every payment on time." },
      { heading: "What's a Good Target", body: "Keeping utilization below 30% is a commonly cited guideline, with under 10% viewed even more favourably for those aiming for excellent credit." },
      { heading: "How to Lower It Quickly", body: "", bullets: ["Pay down balances before your statement date, not just the due date", "Ask for a credit limit increase without adding new spending", "Spread balances across multiple cards rather than maxing one out"] },
    ],
    faqs: [
      { q: "Does closing a credit card improve my utilization?", a: "Usually not — closing a card reduces your total available credit, which can actually increase your utilization percentage on remaining balances, even if you don't add new debt." },
      { q: "How quickly does utilization affect my score?", a: "Utilization is typically recalculated each time your balance is reported (usually monthly), so paying down a balance can improve your score relatively quickly compared to other factors like credit history length." },
    ],
    relatedLinks: [
      { label: "Understanding Credit Reports", href: "/resources/guides/understanding-credit-reports" },
      { label: "Understanding Debt-to-Income Ratio", href: "/resources/guides/understanding-debt-to-income-ratio" },
    ],
  },
  {
    slug: "cosigner-responsibilities",
    title: "Cosigner Responsibilities",
    description: "What to know before cosigning a loan — risks, obligations, and alternatives.",
    category: "guide",
    intro: "Cosigning a loan means agreeing to be equally responsible for repayment if the primary borrower can't pay — it's a meaningful commitment that's often underestimated by both parties.",
    sections: [
      { heading: "What You're Actually Agreeing To", body: "As a cosigner, you're legally responsible for the full loan if the primary borrower misses payments, not just a portion. Missed payments also appear on your credit report, not just theirs." },
      { heading: "Before You Agree", body: "", bullets: ["Confirm you could afford the full payment yourself if needed", "Understand it may affect your own ability to borrow in the future", "Get everything in writing, including any informal repayment agreement with the borrower"] },
      { heading: "Alternatives to Cosigning", body: "If you're not comfortable with the full legal responsibility, consider gifting or lending the person money directly instead, or helping them find a lender that accepts alternative income documentation." },
      { heading: "How to Protect Yourself", body: "Ask to be notified directly by the lender if a payment is missed, so you can address it before it seriously damages either party's credit." },
    ],
    faqs: [
      { q: "Can I remove myself as a cosigner later?", a: "Some lenders offer a cosigner release after a certain number of on-time payments, but this isn't universal — confirm the specific policy before agreeing to cosign." },
      { q: "Does cosigning affect my own borrowing power?", a: "Yes — the loan appears on your credit report and counts toward your own debt-to-income ratio, which can affect your ability to qualify for your own credit in the meantime." },
    ],
    relatedLinks: [
      { label: "Single vs Joint Applications", href: "/resources/comparisons/single-vs-joint-applications" },
      { label: "Understanding Debt-to-Income Ratio", href: "/resources/guides/understanding-debt-to-income-ratio" },
    ],
  },
  {
    slug: "avoiding-loan-scams",
    title: "Avoiding Loan Scams",
    description: "How to spot predatory lenders and protect yourself from loan fraud and hidden fees in Canada.",
    category: "guide",
    intro: "Most lenders are legitimate, but predatory and outright fraudulent lenders do exist, and they often target borrowers who feel they have limited options. Knowing the warning signs protects you before you hand over any information or money.",
    sections: [
      { heading: "Red Flags to Watch For", body: "", bullets: ["Guaranteed approval before checking any information", "Requests for an upfront fee before funds are released", "Pressure to decide immediately, with no time to review terms", "No clear physical address or licensing information", "Contact only through unofficial channels like text or messaging apps"] },
      { heading: "Verify Before You Apply", body: "Check that a lender is licensed to operate in your province, and search their name alongside terms like \"complaint\" or \"scam\" before submitting any personal information." },
      { heading: "What Legitimate Lenders Always Do", body: "Disclose the full APR and fees before you accept an offer, perform some form of credit or income check, and never ask for payment before releasing loan funds." },
      { heading: "If You Think You've Been Targeted", body: "Stop all communication, don't provide further information or payment, and report the lender to the Canadian Anti-Fraud Centre and your provincial consumer protection office." },
    ],
    faqs: [
      { q: "Is it a scam if a lender asks for an upfront fee?", a: "It's a major red flag. Legitimate lenders deduct any fees from the loan proceeds rather than requiring payment before funds are disbursed — never pay upfront to 'unlock' a loan." },
      { q: "How can I confirm a lender is licensed?", a: "Most provinces maintain a public registry of licensed lenders through their consumer protection agency — check this before applying with an unfamiliar lender." },
    ],
    relatedLinks: [
      { label: "Canadian Anti-Fraud Centre", href: "https://www.antifraudcentre-centreantifraude.ca/" },
      { label: "Loans by Location", href: "/loans/by-location" },
    ],
  },
  {
    slug: "loans-for-unemployed",
    title: "Loans for Unemployed",
    description: "Personal loan options for borrowers without traditional employment in Canada.",
    category: "guide",
    intro: "Without traditional employment income, qualifying for a personal loan is more challenging but not impossible — lenders will look for alternative, verifiable income sources instead.",
    sections: [
      { heading: "Income Sources That May Qualify", body: "", bullets: ["Employment Insurance (EI) benefits", "CPP, OAS, or private pension income", "Spousal or child support payments", "Investment or rental income", "A co-applicant's income, if applying jointly"] },
      { heading: "What Lenders Look For Instead of a Job", body: "Consistency and verifiability matter most — a bank statement showing regular deposits, even from non-employment sources, can support an application." },
      { heading: "Consider a Smaller Amount", body: "Without steady employment income, a smaller loan amount is generally easier to qualify for and safer to take on given the added income uncertainty." },
      { heading: "Explore Alternatives First", body: "If your unemployment is temporary, check whether EI or a provincial assistance program can bridge the gap before taking on new debt." },
    ],
    faqs: [
      { q: "Can I get a loan while collecting EI?", a: "Yes — EI benefits are a recognized income source for many lenders, though your loan amount will likely reflect the benefit's typically lower and time-limited amount." },
      { q: "Is it a good idea to borrow while unemployed?", a: "It depends on the reason — borrowing to bridge a short, predictable gap can make sense, but taking on new debt with no income plan in place carries real risk and is worth thinking through carefully." },
    ],
    relatedLinks: [
      { label: "Government of Canada — EI Benefits", href: "https://www.canada.ca/en/services/benefits/ei.html" },
      { label: "Loans for Self-Employed", href: "/loans/by-type/self-employed" },
    ],
  },
  {
    slug: "loan-payment-calculator-guide",
    title: "Loan Payment Calculator Guide",
    description: "Learn how to calculate your monthly loan payments and plan your budget effectively.",
    category: "guide",
    intro: "Understanding how your monthly payment is actually calculated helps you evaluate loan offers critically rather than just accepting the number a lender shows you. Here's the math behind it, and how to use it to your advantage.",
    sections: [
      { heading: "The Amortization Formula", body: "A fixed monthly payment is calculated as: principal × monthly interest rate, divided by 1 minus (1 + monthly interest rate) raised to the power of negative the number of months. It looks complex, but it's the same formula behind every fixed-rate installment loan." },
      { heading: "Using Our Calculator", body: "Rather than doing this math by hand, our loan calculator lets you adjust amount, term, and credit range to see your estimated payment, total interest, and total repayable instantly." },
      { heading: "What the Numbers Tell You", body: "Pay attention to all three figures — monthly payment, total interest, and total repayable — not just the payment. Two offers with the same payment can have very different total costs depending on the term." },
      { heading: "Planning Your Budget Around It", body: "Once you have an estimated payment, test it against your actual budget for a full month before applying, to confirm it's genuinely sustainable alongside your other expenses." },
    ],
    faqs: [
      { q: "Why is my actual payment sometimes different from the calculator estimate?", a: "The calculator uses a representative APR for each credit range — your actual rate depends on the specific lender and your full financial profile, so the real offer may vary slightly from the estimate." },
      { q: "Does the calculator check my credit?", a: "No — it's a math tool only and performs no credit check at all, so using it has zero impact on your credit score." },
    ],
    relatedLinks: [
      { label: "Try the loan calculator", href: "/resources/tools/loan-calculator" },
      { label: "Loans by Repayment Term", href: "/loans/by-term" },
    ],
  },
  {
    slug: "average-personal-loan-rates",
    title: "Average Personal Loan Rates",
    description: "Current average personal loan interest rates in Canada and how to get the best rate.",
    category: "guide",
    intro: "Personal loan rates in Canada vary significantly based on your credit profile, lender, and loan term — understanding the typical range helps you evaluate whether an offer you receive is competitive.",
    sections: [
      { heading: "Typical Rate Range", body: "APRs across our lender network span from 5.99% to 34.99%, in compliance with Canada's federal criminal rate of interest cap. Where you land within that range depends heavily on your credit tier." },
      { heading: "Rates by Credit Tier", body: "", bullets: ["Excellent credit (760+): rates toward the lower end of the range", "Good to Very Good (660-759): moderate rates", "Fair credit (560-659): higher rates reflecting increased risk", "Poor credit (below 560): rates toward the higher end of the range"] },
      { heading: "Other Factors That Affect Your Rate", body: "Beyond credit score, your income stability, existing debt load, and the specific loan term and amount all factor into your final offer — two borrowers with the same score can receive different rates." },
      { heading: "How to Get the Best Rate Available to You", body: "Compare multiple offers using a soft credit check, keep your credit utilization low before applying, and consider a shorter term if your budget allows, since it often comes with a better rate." },
    ],
    faqs: [
      { q: "What is the maximum interest rate a lender can legally charge in Canada?", a: "Canada's federal criminal rate of interest caps consumer loans under $10,000 at 35% APR as of January 2025 — our network's rates stay within this limit at up to 34.99% APR." },
      { q: "Will my rate change after I accept an offer?", a: "No — most personal loans in our network use a fixed rate for the full term, so your rate stays the same throughout repayment once you accept an offer." },
    ],
    relatedLinks: [
      { label: "Canada Gazette — Criminal Interest Rate Regulations", href: "https://gazette.gc.ca/rp-pr/p1/2023/2023-12-23/html/reg3-eng.html" },
      { label: "Loan calculator", href: "/resources/tools/loan-calculator" },
    ],
  },
  {
    slug: "how-to-get-a-loan-fast",
    title: "How to Get a Loan Fast",
    description: "Step-by-step guide to getting a personal loan funded as quickly as possible in Canada, from application to same-day deposit.",
    category: "guide",
    intro: "When you need money urgently, every step of the process matters. Here's how to move as quickly as possible from application to funds in your account.",
    sections: [
      { heading: "Step 1: Have Your Information Ready", body: "Gather your ID, SIN, income proof, and banking details before you start — switching between tabs to find a document is one of the most common delays." },
      { heading: "Step 2: Apply Earlier in the Day", body: "Many lenders have a daily cutoff time for same-day processing — applying in the morning gives you the best chance of funding that same business day." },
      { heading: "Step 3: Use a Bank With Fast E-Transfer or Direct Deposit", body: "Some banks process incoming e-transfers and direct deposits faster than others — this is outside your lender's control but can affect how quickly you actually see the funds." },
      { heading: "Step 4: Respond Quickly to Any Follow-Up Requests", body: "If a lender needs additional verification, responding immediately keeps your application moving instead of sitting in a queue overnight." },
      { heading: "Step 5: Compare Speed, Not Just Rate", body: "If speed is your top priority, factor it directly into which offer you accept." },
    ],
    faqs: [
      { q: "How fast can I realistically get funded?", a: "Most applicants receive a decision within minutes, and funds are typically deposited within 24 hours — some lenders offer true same-day funding if you apply early enough." },
      { q: "Does applying quickly increase my approval odds?", a: "Not directly — approval depends on your income and credit profile, not application speed, though having complete information ready avoids delays that could push funding to the next business day." },
    ],
    relatedLinks: [
      { label: "Same Day Loans", href: "/loans/by-type/same-day-loans" },
      { label: "Preparing for a Loan Application", href: "/resources/guides/preparing-for-a-loan-application" },
    ],
  },
  {
    slug: "get-a-loan-with-no-credit-history",
    title: "Get a Loan with No Credit History",
    description: "Step-by-step guide for first-time borrowers, newcomers, and young adults in Canada.",
    category: "how-to",
    intro: "Having no credit history — as opposed to bad credit — is a different challenge: lenders simply have no record to evaluate. Here's how first-time borrowers, newcomers, and young adults can still get approved.",
    sections: [
      { heading: "Step 1: Look for Lenders Who Serve Thin-File Applicants", body: "Not every lender is equipped to evaluate an applicant with no credit history — seek out newcomer-friendly or first-time-borrower-focused lenders in our network specifically." },
      { heading: "Step 2: Lean on Income and Employment Documentation", body: "Without a credit history to reference, lenders will weigh your income stability more heavily — a steady job or consistent bank deposits can offset a completely blank credit file." },
      { heading: "Step 3: Consider a Smaller First Loan", body: "A smaller amount is both easier to get approved for and a lower-risk way to start building a repayment history." },
      { heading: "Step 4: Consider a Secured Credit-Builder Product First", body: "A secured credit card or credit-builder loan can establish a basic credit history before you apply for a larger personal loan, if you're not in a time-sensitive situation." },
    ],
    faqs: [
      { q: "Is having no credit history the same as having bad credit?", a: "No — bad credit means a negative history (missed payments, high utilization), while no credit history simply means there's nothing on file yet. Some lenders treat these very differently." },
      { q: "How long does it take to build a credit history from scratch?", a: "Meaningful credit history typically takes 6 months to a year of consistent, on-time payments to establish, though even a few months of activity can start to build a file." },
    ],
    relatedLinks: [
      { label: "Loans for Newcomers", href: "/loans/by-type/newcomers" },
      { label: "Understanding Credit Reports", href: "/resources/guides/understanding-credit-reports" },
    ],
  },
  {
    slug: "get-approved-after-bankruptcy",
    title: "Get Approved After Bankruptcy",
    description: "How to qualify for a personal loan after bankruptcy in Canada. Timelines and strategies.",
    category: "how-to",
    intro: "A past bankruptcy makes borrowing harder, but it doesn't close the door permanently — lenders increasingly look at how you've managed credit since the discharge, not just the bankruptcy itself.",
    sections: [
      { heading: "Understand the Timeline", body: "A discharged bankruptcy typically stays on your credit report for 6-7 years (first bankruptcy) in Canada, though its negative impact on approval odds generally lessens the further you are from the discharge date." },
      { heading: "Rebuild Credit Immediately After Discharge", body: "A secured credit card or credit-builder loan, used responsibly, is one of the fastest ways to demonstrate new, positive credit behaviour after a bankruptcy." },
      { heading: "Seek Lenders Who Explicitly Consider Post-Bankruptcy Applicants", body: "Some subprime lenders specifically evaluate applicants with a resolved bankruptcy, particularly if there's been consistent income and no new delinquencies since discharge." },
      { heading: "Be Prepared to Document Your Recovery", body: "Proof of stable income and a clean payment record since discharge strengthens your case significantly, even before the bankruptcy fully ages off your report." },
    ],
    faqs: [
      { q: "How soon after bankruptcy can I get a personal loan?", a: "Some lenders will consider an application shortly after discharge if you can show stable income and no new delinquencies, though rates are typically higher until you've rebuilt more history." },
      { q: "Does a bankruptcy ever fully disappear from my credit report?", a: "Yes — a first bankruptcy discharge typically comes off your report after 6-7 years in most provinces, though this can vary and a second bankruptcy stays on longer." },
    ],
    relatedLinks: [
      { label: "Office of the Superintendent of Bankruptcy Canada", href: "https://ised-isde.canada.ca/site/office-superintendent-bankruptcy/en" },
      { label: "Rebuild Credit After Collections", href: "/resources/guides/rebuild-credit-after-collections" },
    ],
  },
  {
    slug: "lower-your-loan-interest-rate",
    title: "Lower Your Loan Interest Rate",
    description: "Practical negotiation tactics, refinancing options, and credit improvement tips to reduce your rate.",
    category: "how-to",
    intro: "Whether you're about to apply or already repaying a loan, there are concrete steps that can lower the rate you pay. Here's what actually moves the needle.",
    sections: [
      { heading: "Before You Apply", body: "", bullets: ["Check and correct any errors on your credit report", "Pay down credit card balances to lower utilization", "Compare multiple lenders rather than accepting the first offer", "Consider a shorter term, which often comes with a lower rate"] },
      { heading: "If You Already Have a Loan", body: "Ask your current lender directly if a rate reduction is possible, especially if your credit has improved since you were approved — some lenders will negotiate to retain a reliable customer." },
      { heading: "Consider Refinancing", body: "If your credit has meaningfully improved or market rates have dropped, refinancing into a new loan at a better rate can be worth it." },
      { heading: "Add a Cosigner", body: "A cosigner with stronger credit can sometimes unlock a lower rate, though this comes with real shared responsibility for both parties." },
    ],
    faqs: [
      { q: "Can I negotiate my interest rate directly with a lender?", a: "It's worth asking, especially if your credit has improved or you have a strong repayment history — some lenders have room to adjust, though it's not guaranteed." },
      { q: "Does paying on time affect my future rate?", a: "Yes — a consistent on-time payment history improves your credit score over time, which can unlock better rates on future loans, even if it doesn't change your current loan's rate." },
    ],
    relatedLinks: [
      { label: "Refinancing Personal Loans", href: "/resources/guides/refinancing-personal-loans" },
      { label: "Average Personal Loan Rates", href: "/resources/guides/average-personal-loan-rates" },
    ],
  },
  {
    slug: "rebuild-credit-after-collections",
    title: "Rebuild Credit After Collections",
    description: "A clear roadmap to dispute, negotiate, and recover your creditworthiness after collections.",
    category: "how-to",
    intro: "A collections account can significantly damage your credit score, but recovery is possible with a clear, deliberate approach. Here's a roadmap for moving forward.",
    sections: [
      { heading: "Step 1: Verify the Debt Is Accurate", body: "Request written validation of the debt from the collections agency — errors and outdated accounts are more common than expected, and an inaccurate collection can sometimes be removed entirely." },
      { heading: "Step 2: Negotiate a Pay-for-Delete or Settlement", body: "Some collection agencies will agree to remove the account from your report in exchange for payment — get any such agreement in writing before paying." },
      { heading: "Step 3: Focus on New, Positive Credit Behaviour", body: "Even with a collection on your file, consistent on-time payments on other accounts going forward have a real, cumulative positive effect on your score over time." },
      { heading: "Step 4: Be Patient With the Timeline", body: "Most collections accounts fall off your credit report after 6-7 years, and their negative impact on your score generally lessens well before that as the account ages." },
    ],
    faqs: [
      { q: "Can I get a collection removed from my credit report?", a: "Sometimes — if the debt is inaccurate, or if you negotiate a pay-for-delete agreement with the collection agency in writing before paying, though not all agencies will agree to this." },
      { q: "Can I get a loan with a collection still on my file?", a: "Yes — some lenders will consider an application with a resolved collection, particularly alongside consistent recent income and no new delinquencies." },
    ],
    relatedLinks: [
      { label: "Equifax Canada — Credit Score Education", href: "https://www.equifax.ca/personal/education/credit-score/articles/-/learn/what-is-a-good-credit-score/" },
      { label: "Understanding Credit Reports", href: "/resources/guides/understanding-credit-reports" },
    ],
  },
  {
    slug: "budget-after-taking-a-loan",
    title: "Budget After Taking a Loan",
    description: "Manage your finances and stay on track with repayments after taking out a personal loan.",
    category: "how-to",
    intro: "Getting approved is only the first step — how you manage your budget afterward determines whether the loan helps or adds stress. Here's how to build a repayment plan that actually sticks.",
    sections: [
      { heading: "Treat Your Payment as a Fixed, Non-Negotiable Expense", body: "Build your loan payment into your budget the same way you would rent or utilities — automate it if possible so it's never at risk of being skipped." },
      { heading: "Revisit Your Discretionary Spending", body: "Identify a category or two of flexible spending to trim temporarily, so the new payment doesn't quietly erode money meant for savings or other bills." },
      { heading: "Build a Small Buffer", body: "Even a modest cushion in your chequing account reduces the risk of a missed payment if an unexpected cost comes up mid-month." },
      { heading: "Track Progress Toward Payoff", body: "Seeing your remaining balance shrink can be a real motivator — check in monthly, and consider extra payments toward principal if your budget allows." },
    ],
    faqs: [
      { q: "What should I do if I think I'll miss a payment?", a: "Contact your lender before the due date — many offer short-term flexibility or alternative arrangements if you reach out proactively rather than after missing the payment." },
      { q: "Should I pay more than my minimum payment if I can?", a: "Yes, if your lender allows extra payments toward principal without penalty — it reduces total interest and shortens your payoff timeline." },
    ],
    relatedLinks: [
      { label: "Emergency Fund Basics", href: "/resources/guides/emergency-fund-basics" },
      { label: "Loan calculator", href: "/resources/tools/loan-calculator" },
    ],
  },
  {
    slug: "ontario-lending-regulations",
    title: "Ontario Lending Regulations",
    description: "Payday loan laws, interest rate caps, and borrower protections in Ontario.",
    category: "regulation",
    intro: "Ontario regulates payday lending directly through the Payday Loans Act, 2008, while personal installment loans are governed by the federal criminal rate of interest. Here's a closer look at the legal landscape for borrowers in the province.",
    sections: [
      { heading: "The Payday Loans Act, 2008", body: "This provincial law requires payday lenders to be licensed, sets maximum cost-of-borrowing limits specific to payday loans, and mandates clear disclosure of the total cost before you sign an agreement." },
      { heading: "Federal Criminal Rate of Interest", body: "Personal installment loans, like those in our network, fall under the federal Criminal Code's interest rate cap of 35% APR, effective since January 2025 — separate from Ontario's payday-specific rules." },
      { heading: "Borrower Protections", body: "Ontario law requires lenders to disclose the full cost of borrowing in writing before you agree to a loan, and provides a cooling-off period for certain credit agreements — always review your agreement fully before signing." },
      { heading: "Where to File a Complaint", body: "Ontario's consumer protection ministry handles complaints related to licensed lenders operating in the province — keep records of your loan agreement and any communication in case you need to escalate an issue." },
    ],
    faqs: [
      { q: "Does Ontario cap interest rates on all loans?", a: "Ontario's Payday Loans Act specifically caps payday loan costs, while personal installment loans across Canada, including Ontario, are governed by the federal criminal rate of interest cap of 35% APR." },
      { q: "What should I do if a lender in Ontario won't disclose the full cost of my loan?", a: "This is a red flag — Ontario law requires full disclosure of borrowing costs before you agree to a loan. Don't proceed, and consider reporting the lender to the province's consumer protection ministry." },
    ],
    relatedLinks: [
      { label: "Payday Loans Act, 2008 — e-Laws Ontario", href: "https://www.ontario.ca/laws/statute/08p09" },
      { label: "Personal Loans in Ontario", href: "/loans/by-location/ontario" },
    ],
  },
  {
    slug: "bc-lending-regulations",
    title: "BC Lending Regulations",
    description: "BPCPA rules, payday loan caps, and borrower rights in British Columbia.",
    category: "regulation",
    intro: "British Columbia regulates consumer lending primarily through the Business Practices and Consumer Protection Act (BPCPA), with Consumer Protection BC overseeing payday lender licensing specifically.",
    sections: [
      { heading: "The Business Practices and Consumer Protection Act", body: "BC's BPCPA sets out broad consumer protection rules covering credit disclosure, unfair business practices, and cost-of-borrowing transparency across many types of consumer agreements, including loans." },
      { heading: "Payday Loan Licensing", body: "Consumer Protection BC licenses payday lenders operating in the province and sets maximum cost-of-borrowing limits specific to payday loans, separate from the rules governing personal installment loans." },
      { heading: "Federal Criminal Rate of Interest", body: "Personal installment loans in BC, like elsewhere in Canada, are governed by the federal Criminal Code's interest rate cap of 35% APR, effective since January 2025." },
      { heading: "Your Rights as a Borrower", body: "Under the BPCPA, you're entitled to clear, written disclosure of your loan's total cost before signing, and protection against unfair or deceptive lending practices." },
    ],
    faqs: [
      { q: "What does the BPCPA cover for personal loans?", a: "The Business Practices and Consumer Protection Act sets broad rules around cost-of-borrowing disclosure and unfair practices, applying to many consumer credit agreements in BC, including personal loans." },
      { q: "Who do I contact with a complaint about a BC lender?", a: "Consumer Protection BC handles licensing and complaints related to payday lenders specifically, while broader consumer protection concerns fall under the BPCPA's general enforcement framework." },
    ],
    relatedLinks: [
      { label: "Business Practices and Consumer Protection Act — CanLII", href: "https://www.canlii.org/en/bc/laws/stat/sbc-2004-c-2/latest/sbc-2004-c-2.html" },
      { label: "Personal Loans in British Columbia", href: "/loans/by-location/british-columbia" },
    ],
  },
  {
    slug: "alberta-lending-regulations",
    title: "Alberta Lending Regulations",
    description: "Consumer Protection Act rules, payday loan caps, and consumer protections in Alberta.",
    category: "regulation",
    intro: "Alberta regulates consumer credit primarily through the Consumer Protection Act — formerly known as the Fair Trading Act until it was renamed in 2017 — with specific provisions for payday lending that set licensing requirements and cost-of-borrowing limits.",
    sections: [
      { heading: "The Consumer Protection Act", body: "Alberta's Consumer Protection Act (renamed from the Fair Trading Act in 2017) governs a wide range of consumer transactions, including credit and loan agreements, requiring clear disclosure and prohibiting unfair practices." },
      { heading: "Payday Loan Regulations", body: "Under the Act's payday loan provisions, lenders must be licensed and disclose the full cost of borrowing before an agreement is signed, with specific cost caps for payday loans specifically." },
      { heading: "Federal Criminal Rate of Interest", body: "Personal installment loans in Alberta are governed separately by the federal Criminal Code's interest rate cap of 35% APR, effective since January 2025." },
      { heading: "Consumer Protections", body: "Alberta borrowers are entitled to full written disclosure of loan terms and costs before signing, and have a formal complaint process through the province's consumer protection office if a lender doesn't comply." },
    ],
    faqs: [
      { q: "Is the Fair Trading Act still Alberta's consumer protection law?", a: "The Fair Trading Act was renamed the Consumer Protection Act in 2017 — it's the same underlying law under a new name, so older references to the Fair Trading Act refer to the same statute." },
      { q: "How do I verify a lender is licensed in Alberta?", a: "Alberta maintains oversight of licensed lenders under the Consumer Protection Act — check with the province's consumer protection office if you're unsure whether a specific lender is properly licensed." },
    ],
    relatedLinks: [
      { label: "Consumer Protection Act — CanLII", href: "https://www.canlii.org/en/ab/laws/stat/rsa-2000-c-c-26.3/latest/rsa-2000-c-c-26.3.html" },
      { label: "Personal Loans in Alberta", href: "/loans/by-location/alberta" },
    ],
  },
  {
    slug: "quebec-lending-regulations",
    title: "Quebec Lending Regulations",
    description: "Consumer Protection Act, the effective payday loan ban, and protections in Quebec.",
    category: "regulation",
    intro: "Quebec takes the strictest approach to consumer credit of any Canadian province, capping interest rates on all consumer loans — not just payday loans — under its Consumer Protection Act, which has effectively eliminated traditional payday lending in the province.",
    sections: [
      { heading: "The Consumer Protection Act", body: "Quebec's Consumer Protection Act sets out detailed rules for credit agreements, including mandatory disclosure requirements and a general interest rate cap that's stricter than the federal criminal rate applied elsewhere in Canada." },
      { heading: "The Effective Payday Loan Ban", body: "Because Quebec caps all consumer credit costs below what payday lending typically requires to be profitable, traditional storefront payday lending has been effectively eliminated in the province — a stricter outcome than most other provinces achieve through payday-specific legislation." },
      { heading: "Language Requirements", body: "Quebec's language laws generally require consumer credit agreements to be available in French, an added protection ensuring borrowers can fully understand their loan terms in their preferred official language." },
      { heading: "Borrower Protections", body: "The Consumer Protection Act gives Quebec borrowers strong rights to clear disclosure, protection from misleading credit advertising, and recourse through the province's consumer protection office." },
    ],
    faqs: [
      { q: "Why can't I find payday loans in Quebec?", a: "Quebec's Consumer Protection Act caps interest rates on all consumer credit more strictly than the federal criminal rate used elsewhere, making traditional payday lending economically unviable in the province." },
      { q: "Are personal installment loans still available in Quebec?", a: "Yes — personal installment loans remain available in Quebec, priced within the province's stricter consumer credit rate limits." },
    ],
    relatedLinks: [
      { label: "Consumer Protection Act — CanLII", href: "https://www.canlii.org/en/qc/laws/stat/cqlr-c-p-40.1/latest/cqlr-c-p-40.1.html" },
      { label: "Personal Loans in Quebec", href: "/loans/by-location/quebec" },
    ],
  },
  {
    slug: "manitoba-lending-regulations",
    title: "Manitoba Lending Regulations",
    description: "The Consumer Protection Act, payday loan caps, and borrower rights in Manitoba.",
    category: "regulation",
    intro: "Manitoba was among the first Canadian provinces to formally regulate payday lending, doing so under The Consumer Protection Act (C.C.S.M. c. C200), with the province's Consumer Protection Office overseeing licensing and cost-of-borrowing limits for the industry.",
    sections: [
      { heading: "Early Payday Loan Regulation", body: "Manitoba's early move to regulate payday lending, under The Consumer Protection Act, set licensing requirements and cost-of-borrowing caps specific to payday loans, ahead of many other provinces." },
      { heading: "The Consumer Protection Office", body: "Manitoba's Consumer Protection Office administers The Consumer Protection Act, licensing payday lenders and enforcing disclosure requirements so borrowers see the full cost of a loan before agreeing to it." },
      { heading: "Federal Criminal Rate of Interest", body: "Personal installment loans in Manitoba, like elsewhere in Canada, are governed separately by the federal Criminal Code's interest rate cap of 35% APR, effective since January 2025." },
      { heading: "Borrower Rights", body: "Manitoba borrowers are entitled to full written disclosure of costs and terms before signing, and can file a complaint with the Consumer Protection Office if a lender fails to comply." },
    ],
    faqs: [
      { q: "What law regulates payday loans in Manitoba?", a: "The Consumer Protection Act (C.C.S.M. c. C200) is the governing statute, administered by Manitoba's Consumer Protection Office, which sets licensing and cost-of-borrowing requirements for payday lenders." },
      { q: "Does Manitoba's Consumer Protection Office handle personal loan complaints too?", a: "It primarily oversees payday lender licensing and broader consumer protection matters — personal installment loan interest rates are capped separately under the federal criminal rate of interest." },
    ],
    relatedLinks: [
      { label: "The Consumer Protection Act — CanLII", href: "https://www.canlii.org/en/mb/laws/stat/ccsm-c-c200/latest/ccsm-c-c200.html" },
      { label: "Personal Loans in Manitoba", href: "/loans/by-location/manitoba" },
    ],
  },
  {
    slug: "new-year-financial-reset",
    title: "New Year Financial Reset",
    description: "Start the year right with a complete financial reset plan for Canadians.",
    category: "seasonal",
    intro: "A new year is a natural checkpoint for reviewing your finances — debt, credit, and spending habits from the past year all leave a trail worth examining before setting fresh goals.",
    sections: [
      { heading: "Review Last Year's Spending", body: "Look back at where your money actually went, not just where you planned for it to go — bank and credit card statements often reveal patterns worth adjusting." },
      { heading: "Check Your Credit Report", body: "Start the year by requesting your free credit report from Equifax Canada or TransUnion Canada and checking for errors before they affect any borrowing plans." },
      { heading: "Tackle High-Interest Debt First", body: "If holiday spending left a balance on high-interest credit cards, consider whether a debt consolidation loan could lower your combined rate and simplify repayment into one fixed payment." },
      { heading: "Set a Realistic Emergency Fund Goal", body: "Even a modest, specific savings target for the year reduces how often you'll need to borrow for unexpected costs going forward." },
    ],
    faqs: [
      { q: "Is January a good time to consolidate holiday debt?", a: "Yes — many borrowers use the new year to consolidate credit card balances built up over the holidays into a single fixed-rate personal loan, simplifying repayment before interest accumulates further." },
      { q: "Should I check my credit score at the start of every year?", a: "It's a reasonable habit — an annual check costs nothing and helps you catch errors or track progress toward your credit goals." },
    ],
    relatedLinks: [
      { label: "Refinancing Personal Loans", href: "/resources/guides/refinancing-personal-loans" },
      { label: "Emergency Fund Basics", href: "/resources/guides/emergency-fund-basics" },
    ],
  },
  {
    slug: "tax-season-loan-tips",
    title: "Tax Season Loan Tips",
    description: "Smart strategies for managing loans during Canadian tax season. CRA payment plans and refund tips.",
    category: "seasonal",
    intro: "Tax season brings its own set of financial considerations for borrowers — from managing a balance owing to deciding what to do with a refund. Here's how it intersects with personal loans.",
    sections: [
      { heading: "If You Owe the CRA", body: "Compare a personal loan's APR against the CRA's current prescribed interest rate on unpaid balances — a lower-rate loan can be cheaper than accruing CRA interest and penalties, but the CRA also offers payment arrangements directly, worth checking first." },
      { heading: "Using Your Refund Wisely", body: "If you're expecting a refund, consider applying it toward any existing high-interest debt before other spending — it's a lump-sum opportunity to reduce a balance faster than scheduled payments alone." },
      { heading: "Self-Employed and Gig Workers", body: "Tax season often clarifies your actual annual income through your Notice of Assessment — useful documentation if you're planning to apply for a loan as a self-employed or gig worker." },
      { heading: "Avoid Refund Anticipation Loans When Possible", body: "Some services offer an advance on your expected refund at a cost — compare this against simply waiting for your refund or using a standard personal loan if you need funds before it arrives." },
    ],
    faqs: [
      { q: "Is it worth borrowing to pay a CRA tax bill?", a: "It depends on the rates involved — compare a personal loan's APR against the CRA's current interest rate on unpaid balances, and consider that a loan gives you one predictable monthly payment instead of accruing CRA penalties." },
      { q: "Can I use my Notice of Assessment as income proof for a loan?", a: "Yes — many lenders accept a recent Notice of Assessment as income verification, particularly useful for self-employed or gig worker applicants without traditional pay stubs." },
    ],
    relatedLinks: [
      { label: "CRA — Prescribed Interest Rates", href: "https://www.canada.ca/en/revenue-agency/services/tax/prescribed-interest-rates.html" },
      { label: "Loans for Self-Employed", href: "/loans/by-type/self-employed" },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
