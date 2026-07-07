export interface ComparisonRow {
  aspect: string;
  thisType: string;
  alternative: string;
}

export interface LoanType {
  slug: string;
  title: string;
  description: string;
  intro: string;
  whoItsFor: string[];
  incomeNotes: string[];
  considerations: string[];
  faqs: { q: string; a: string }[];
  comparisonRows?: ComparisonRow[];
  comparisonLabel?: string;
  relatedPurposeSlug?: string;
  isPillar?: boolean;
}

export const LOAN_TYPES: LoanType[] = [
  {
    slug: "bad-credit-loans",
    title: "Bad Credit Loans",
    description: "Bad credit? No problem. Apply for bad credit loans in Canada regardless of credit history. Get $300-$5,000 approved quickly.",
    intro: "\"Bad credit\" isn't a single number — it typically covers Equifax's Poor and Fair ranges (below 660), the result of missed payments, high utilization, or a limited credit history. It doesn't mean no options: our lender network includes partners who specialize in exactly this range, weighing your income and stability alongside your score.",
    whoItsFor: [
      "A history of missed or late payments",
      "A limited or thin credit file with few accounts",
      "A recent bankruptcy, consumer proposal, or collections account now resolved",
      "Anyone who's been declined by a traditional bank",
    ],
    incomeNotes: [
      "Proof of a regular income source (employment, pension, or benefits)",
      "An active Canadian bank account",
      "Recent pay stubs or bank statements showing consistent deposits",
    ],
    considerations: [
      "APRs are typically higher to offset the lender's risk — compare your total cost, not just approval odds.",
      "Your exact score changes your options meaningfully — see our credit score range guides for rates specific to your number.",
      "Building a repayment track record on a smaller loan can improve your options for future borrowing.",
    ],
    faqs: [
      { q: "What credit score counts as \"bad credit\" in Canada?", a: "Equifax classifies scores below 560 as Poor and 560-659 as Fair — both are commonly referred to as \"bad credit\" by lenders, though options and rates differ meaningfully within that range." },
      { q: "Can I get approved with a recent bankruptcy or consumer proposal?", a: "Some lenders in our network will consider applicants with a resolved bankruptcy or consumer proposal, particularly if it's been discharged and you've since shown consistent income and no new delinquencies." },
    ],
  },
  {
    slug: "debt-consolidation-loans",
    title: "Debt Consolidation Loans",
    description: "Consolidate debt in Canada with a personal loan. Learn how debt consolidation loans work, interest rates, and how to qualify for the best rates.",
    intro: "A debt consolidation loan is a single personal loan used to pay off multiple existing debts, replacing several monthly payments with one fixed payment — ideally at a lower combined rate. Some lenders disburse funds directly to your creditors; others deposit the full amount to you to pay off your own accounts.",
    whoItsFor: [
      "Carrying balances across multiple credit cards or store cards",
      "Juggling several different due dates and minimum payments each month",
      "A total debt load large enough that a lower rate meaningfully reduces interest paid",
      "Looking for a fixed payoff date, unlike revolving credit that can continue indefinitely",
    ],
    incomeNotes: [
      "Proof of income sufficient to cover the new fixed payment",
      "A debt-to-income ratio lenders can use to assess total obligations",
      "Documentation of existing debts being paid off, if the lender disburses directly to creditors",
    ],
    considerations: [
      "A lower APR only helps if it's genuinely lower than the weighted average of your current debts — compare the numbers, not just the sales pitch.",
      "Some lenders pay your creditors directly, which guarantees the old debts are actually closed; others deposit funds to you, requiring discipline to pay them off yourself.",
      "A longer term can lower your monthly payment but increase total interest paid over the life of the loan.",
    ],
    comparisonLabel: "Consolidation Loan vs. Other Ways to Consolidate",
    comparisonRows: [
      { aspect: "How it works", thisType: "Single new loan pays off multiple existing debts", alternative: "Balance transfer card: moves card debt to a new card, often 0% for a limited promo window" },
      { aspect: "Rate structure", thisType: "Fixed rate for the full term", alternative: "HELOC: variable rate tied to home equity, typically lower but requires homeownership" },
      { aspect: "Who qualifies", thisType: "Based on income and total debt load", alternative: "Debt management plan: run by a credit counsellor, doesn't require new credit approval" },
    ],
    faqs: [
      { q: "Does the lender pay off my old debts directly, or do I?", a: "It depends on the lender — some disburse funds directly to your listed creditors, while others deposit the full loan amount to your account and expect you to pay off the old balances yourself." },
      { q: "What's the difference between a consolidation loan and a balance transfer card?", a: "A consolidation loan is a fixed-rate installment loan with a set payoff date, while a balance transfer card moves revolving debt to a new card, often with a promotional 0% rate for a limited time before reverting to a standard APR." },
    ],
    relatedPurposeSlug: "debt-consolidation",
  },
  {
    slug: "emergency-loans",
    title: "Emergency Loans",
    description: "Need emergency cash fast? Apply for emergency loans in Canada with same-day approval. Get $300-$5,000 for unexpected expenses.",
    intro: "An emergency loan isn't a distinct loan product so much as a personal loan underwritten and funded on an accelerated timeline — usually with a decision in minutes and funds within 24 hours. Lenders offering emergency loans typically simplify documentation requirements to remove friction when speed matters most.",
    whoItsFor: [
      "Needing a lending decision the same day you apply, not within a few business days",
      "Limited time to gather extensive documentation before funds are needed",
      "A one-time, unplanned cost rather than an ongoing need",
      "Comfortable trading some rate flexibility for speed of funding",
    ],
    incomeNotes: [
      "Proof of income, often verified via a linked bank account rather than manual pay stub upload",
      "An active bank account capable of receiving an e-transfer or direct deposit",
      "Basic identity verification, usually completed digitally",
    ],
    considerations: [
      "Faster funding can mean a higher APR than a standard personal loan — compare the total cost even under time pressure.",
      "Streamlined underwriting means less paperwork, but lenders still check your ability to repay — approval isn't guaranteed just because it's labelled \"emergency.\"",
      "If your situation allows even a day or two to compare offers, it's worth it — rates for the same profile can vary by lender.",
    ],
    faqs: [
      { q: "How is an emergency loan different from a regular personal loan?", a: "It's not a different product structurally — the difference is process: faster decisioning, simplified documentation, and quicker funding, usually within 24 hours instead of several business days." },
      { q: "Can I get an emergency loan with no credit check?", a: "Reputable lenders always perform at least a soft credit check, which doesn't affect your score. Be cautious of any lender advertising \"no credit check\" loans, as it's often a red flag for predatory terms." },
    ],
    relatedPurposeSlug: "emergency-expenses",
  },
  {
    slug: "gig-workers",
    title: "Loans for Gig Workers",
    description: "Self-employed or gig worker in Canada? Personal loans for freelancers, Uber drivers, DoorDash couriers & contractors. Flexible income requirements.",
    intro: "Traditional lenders often ask for a T4 and an employer letter — something gig and platform workers rarely have. Lenders who work with gig workers instead verify income through platform payment history, direct deposit patterns, or linked app earnings, recognizing that irregular income doesn't mean unreliable income.",
    whoItsFor: [
      "Rideshare and delivery drivers (Uber, Lyft, DoorDash, Instacart, SkipTheDishes)",
      "Freelance and contract-based workers without a single employer",
      "Income that varies week to week rather than a fixed salary",
      "Workers who've been turned down by lenders expecting traditional pay stubs",
    ],
    incomeNotes: [
      "Bank statements showing consistent platform deposits over 3-6 months",
      "Platform earnings summaries or in-app statements",
      "A reasonably established history on the platform, though exact requirements vary by lender",
    ],
    considerations: [
      "Averaging income over several months, not just your best week, gives lenders a more accurate — and often more favourable — picture.",
      "Combining income from multiple platforms can strengthen your application if no single platform provides steady enough income alone.",
      "Setting aside a portion of variable income for loan payments protects you during slower weeks.",
    ],
    faqs: [
      { q: "Can I qualify for a loan with only gig or platform income?", a: "Yes — many lenders in our network specifically accept platform earnings statements or bank deposit history as proof of income, without requiring a traditional employer letter." },
      { q: "What if my income varies a lot week to week?", a: "Lenders typically look at averaged income over several months rather than a single week, so consistent overall earnings matter more than week-to-week variation." },
    ],
  },
  {
    slug: "newcomers",
    title: "Loans for Newcomers",
    description: "New to Canada? Get personal loans for newcomers with limited credit history. Newcomer-friendly lenders, fast approval. Build your Canadian credit.",
    intro: "Building credit in Canada takes time you may not have yet if you've recently arrived — most newcomers start with no Canadian credit file at all, regardless of credit history abroad. Newcomer-friendly lenders look beyond a thin file, often weighing income, employment, and time in Canada instead.",
    whoItsFor: [
      "Recently landed permanent residents or those on a valid work permit",
      "No Canadian credit history yet, even with strong credit history in another country",
      "Employed or with a job offer, but without an extensive Canadian employment record",
      "Looking to build a Canadian credit history through on-time repayment",
    ],
    incomeNotes: [
      "Proof of employment or a job offer letter",
      "A Canadian bank account, even if recently opened",
      "Immigration documents confirming status (permanent residency, work permit, etc.)",
    ],
    considerations: [
      "Requirements around immigration status vary by lender — some work only with permanent residents or citizens, while others accept valid work permit holders.",
      "A newcomer-friendly loan, repaid on time, is one of the fastest ways to establish a Canadian credit history from scratch.",
      "Compare a personal loan against newcomer-specific credit cards or secured credit products, which can also help build credit at a lower cost.",
    ],
    faqs: [
      { q: "Can I get a loan in Canada without any Canadian credit history?", a: "Yes — newcomer-friendly lenders in our network are specifically set up to evaluate applicants without a Canadian credit file, typically relying more on income and employment." },
      { q: "Does my credit history from my home country count?", a: "Canadian credit bureaus generally can't access foreign credit history, so most lenders will treat you as having no file, regardless of your credit history abroad — though some newcomer programs may ask about it informally." },
    ],
  },
  {
    slug: "self-employed",
    title: "Loans for Self-Employed",
    description: "Self-employed in Canada? Personal loans for small business owners & entrepreneurs. Bank statements accepted as income proof. Apply online today.",
    intro: "Self-employed income doesn't come with a T4 or employer letter, which can complicate approval at traditional banks. Lenders who work with self-employed borrowers instead rely on bank statements, Notices of Assessment, or invoicing history to verify income — recognizing that steady self-employment income is just as real as a paycheque.",
    whoItsFor: [
      "Small business owners and sole proprietors",
      "Independent contractors and consultants",
      "Those with an established self-employment history, though exact requirements vary by lender",
      "Business income that's steady even if it doesn't come with traditional pay stubs",
    ],
    incomeNotes: [
      "Bank statements showing regular business or personal deposits, typically 3-6 months",
      "Notices of Assessment (NOA) or T2125 forms from recent tax filings",
      "Invoices or contracts demonstrating ongoing client relationships",
    ],
    considerations: [
      "Lenders often average income over a longer period for self-employed applicants, so a strong recent year can offset a weaker earlier one.",
      "Keeping business and personal banking separate makes it easier to demonstrate clean, verifiable income.",
      "A higher, well-documented net income (after expenses) generally strengthens an application more than gross revenue alone.",
    ],
    faqs: [
      { q: "Do I need two years of tax returns to qualify?", a: "Many lenders prefer at least one to two years of self-employment history, though some will consider shorter histories if income is well-documented through bank statements and invoices." },
      { q: "Can I use my business bank statements instead of personal ones?", a: "Yes, many lenders accept business bank statements as income proof for self-employed applicants, alongside or instead of personal statements." },
    ],
  },
  {
    slug: "seniors",
    title: "Loans for Seniors",
    description: "Personal loans for seniors and retirees in Canada. Pension and retirement income accepted. Cover medical bills, home repairs & more. Apply today.",
    intro: "Retirement income doesn't disqualify you from a personal loan — CPP, OAS, and private pension income are all accepted as proof of income by most lenders in our network, the same as employment income would be. Seniors often qualify at competitive rates thanks to stable, predictable monthly income.",
    whoItsFor: [
      "Retirees relying on CPP, OAS, or a private pension as primary income",
      "Covering unexpected costs like medical bills, home repairs, or helping family",
      "Those who may have paid off a mortgage and have strong home equity, though a personal loan doesn't require it",
      "Seniors on a fixed income who want predictable, fixed monthly payments",
    ],
    incomeNotes: [
      "Pension statements (CPP, OAS, employer pension, or RRIF/RRSP withdrawals)",
      "A bank account showing regular deposit of retirement income",
      "No employment income required if pension income is sufficient",
    ],
    considerations: [
      "A fixed retirement income means it's worth being conservative about the monthly payment you take on relative to other alternatives.",
      "If you have home equity, a HELOC or reverse mortgage may offer a lower rate — worth comparing for larger amounts.",
      "Confirm the loan's term ends within a timeframe that's comfortable for your fixed income budget.",
    ],
    faqs: [
      { q: "Does pension income count as proof of income for a loan?", a: "Yes — CPP, OAS, and private pension income are accepted as income by most lenders in our network, the same as employment income would be." },
      { q: "Is there an age limit for getting a personal loan in Canada?", a: "No maximum age limit applies — approval is based on income and creditworthiness, not age, provided you meet the minimum age of majority in your province." },
    ],
  },
  {
    slug: "single-parents",
    title: "Loans for Single Parents",
    description: "Personal loans for single parents in Canada. Cover childcare, bills & emergencies. Flexible terms, all credit scores. Government benefit income accepted.",
    intro: "Raising kids on one income means less room to absorb a surprise expense. Personal loans for single parents typically accept government benefit income like the Canada Child Benefit alongside employment income, and are sized to fit a single-income household budget.",
    whoItsFor: [
      "Covering childcare costs, school expenses, or an unexpected bill",
      "Managing on one income where an emergency fund may be thinner",
      "Receiving child support or the Canada Child Benefit (CCB) as part of household income",
      "Looking for a fixed monthly payment that's easy to budget around",
    ],
    incomeNotes: [
      "Employment income, if applicable, verified via pay stubs or bank statements",
      "Canada Child Benefit (CCB) statements or child support documentation, where accepted",
      "A bank account showing consistent income deposits",
    ],
    considerations: [
      "Borrow only what covers the specific need — a single-income household benefits most from keeping payments as low as possible.",
      "Check provincial family support programs before borrowing; some costs like childcare and school supplies have subsidies that reduce what you need.",
      "A shorter term keeps total interest lower, but confirm the resulting payment still fits comfortably in a one-income budget.",
    ],
    faqs: [
      { q: "Does the Canada Child Benefit count as income for a loan application?", a: "Some lenders in our network do accept CCB or child support payments as part of household income — it's worth confirming with your specific lender since policies vary." },
      { q: "Can I qualify with only one income in the household?", a: "Yes — approval is based on your individual income and ability to repay, not household size, though your loan amount and terms will reflect what a single income can support." },
    ],
  },
  {
    slug: "payday-alternative-loans",
    title: "Payday Alternative Loans",
    description: "Looking for alternatives to payday loans? Get lower rates and longer terms with payday alternative loans in Canada.",
    intro: "A payday loan is typically repaid in a single lump sum on your next payday, often carrying fees that translate to a very high effective annual rate. A payday alternative loan is an installment loan instead — repaid over several months with a fixed schedule, usually at a meaningfully lower overall cost.",
    whoItsFor: [
      "Needing short-term cash but wanting to avoid a payday loan's single lump-sum repayment",
      "Preferring a predictable monthly payment over a due-in-full deadline",
      "Borrowers who've used payday loans before and want a lower-cost option going forward",
      "Anyone comparing short-term borrowing options before committing to one",
    ],
    incomeNotes: [
      "Proof of a regular income source",
      "An active bank account",
      "Standard identity verification",
    ],
    considerations: [
      "Even among payday alternatives, APRs vary — compare the total repayment amount across a few lenders, not just the headline rate.",
      "An installment structure means more time to repay, but also more total time for interest to accrue — check both the monthly payment and total cost.",
      "If you've relied on payday loans repeatedly, breaking the cycle usually means borrowing slightly less than the maximum offered, to leave more room in future budgets.",
    ],
    comparisonLabel: "Payday Alternative Loan vs. Payday Loan",
    comparisonRows: [
      { aspect: "Repayment structure", thisType: "Fixed installments over several months", alternative: "Payday loan: single lump-sum repayment on your next payday" },
      { aspect: "Typical cost", thisType: "APR within our network's standard 5.99%-34.99% range", alternative: "Payday loan: fees often equivalent to a much higher effective annual rate" },
      { aspect: "Renewal risk", thisType: "Fixed schedule with a defined end date", alternative: "Payday loan: can lead to repeat borrowing if the lump sum isn't available on payday" },
    ],
    faqs: [
      { q: "Is a payday alternative loan the same as a payday loan?", a: "No — a payday alternative loan is an installment loan repaid over several months, while a payday loan is typically due in full on your next payday, often at a much higher effective cost." },
      { q: "Will a payday alternative loan help my credit?", a: "Some lenders report payment history to the credit bureaus, which can help build credit over time with on-time payments — check whether your specific lender reports before applying if this matters to you." },
    ],
  },
  {
    slug: "personal-loans",
    title: "Personal Loans",
    description: "Apply for personal loans in Canada with fast approval. Get $300-$5,000 with competitive rates and flexible terms.",
    intro: "A personal loan is a fixed amount of money borrowed from a lender and repaid in regular installments over a set term, typically at a fixed interest rate. In Canada, personal loans are one of the most flexible borrowing options — usable for nearly any purpose, from a $300 emergency to a $5,000 debt consolidation, with no collateral required in most cases.",
    whoItsFor: [
      "Covering planned or unplanned expenses without dipping into savings",
      "Consolidating higher-interest debt into one fixed payment",
      "Borrowers across the full credit spectrum, from building credit to excellent scores",
      "Anyone who prefers a fixed payment and end date over revolving credit",
    ],
    incomeNotes: [
      "Proof of a regular source of income",
      "An active bank account in your name",
      "Valid identification and a Social Insurance Number (SIN)",
    ],
    considerations: [
      "Unsecured personal loans typically carry a higher rate than secured options like a HELOC, since there's no collateral for the lender to claim.",
      "The right loan amount and term depend heavily on why you're borrowing — see our guides by amount and by purpose for specifics.",
      "Your credit score is one factor among several — income and existing debt load matter just as much for approval and rate.",
    ],
    faqs: [
      { q: "What can I use a personal loan for?", a: "Personal loans are flexible and can be used for nearly any legitimate purpose — from emergencies and debt consolidation to home improvement, medical costs, or major purchases." },
      { q: "Is a personal loan secured or unsecured?", a: "Most personal loans in our network are unsecured, meaning no collateral is required, though this can mean a higher rate than secured borrowing options like a HELOC." },
    ],
    isPillar: true,
  },
  {
    slug: "same-day-loans",
    title: "Same Day Loans",
    description: "Need cash fast in Canada? Learn all about same-day loans, how they work, interest rates, and how to apply for quick approval.",
    intro: "A same-day loan isn't a separate loan category so much as a funding speed — a personal loan where the lender can approve and deposit funds within the same business day, rather than the 24-48 hours typical of standard online lending. Not every lender in our network offers true same-day funding, so it's worth confirming timing before you apply if speed is the priority.",
    whoItsFor: [
      "Needing funds the same day you apply, not just within 24 hours",
      "Applying earlier in the day, since same-day funding typically requires submission before a lender's daily cutoff time",
      "Comfortable with a streamlined, mostly digital application process",
      "A cost genuinely urgent enough that speed outweighs comparing every possible rate",
    ],
    incomeNotes: [
      "Proof of income verifiable quickly, often via bank account linking rather than manual document upload",
      "An active bank account with a major Canadian financial institution, which speeds up e-transfer or direct deposit",
      "Basic government-issued ID for digital identity verification",
    ],
    considerations: [
      "True same-day funding usually requires applying and accepting an offer before a lender's specific cutoff time — applying late in the day may push funding to the next business day regardless.",
      "Faster funding doesn't always mean a better rate — compare same-day options against standard 24-hour lenders if you have even a little flexibility.",
      "Weekend and holiday applications may not fund until the next business day, even with a same-day lender.",
    ],
    faqs: [
      { q: "How fast is \"same-day\" really?", a: "It depends on when you apply — most same-day lenders require submission and acceptance before a daily cutoff time (often early-to-mid afternoon) for funds to arrive the same business day." },
      { q: "Do same-day loans cost more than standard personal loans?", a: "Not necessarily, but it's worth comparing — some faster-funding lenders price in a premium for speed, so check the APR and total cost alongside the funding timeline." },
    ],
  },
];

export function getLoanType(slug: string): LoanType | undefined {
  return LOAN_TYPES.find((t) => t.slug === slug);
}
