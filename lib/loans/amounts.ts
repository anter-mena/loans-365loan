export type LoanTier = "small" | "mid" | "large";

export interface LoanAmount {
  value: number;
  slug: string;
  display: string;
  tier: LoanTier;
  intro: string;
  useCases: string[];
  cons: string[];
  alternatives: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
}

export const LOAN_AMOUNTS: LoanAmount[] = [
  {
    value: 300, slug: "300", display: "$300", tier: "small",
    intro: "A $300 loan is our smallest amount — sized for a single, small unexpected cost, like topping up a bill before payday or covering a minor repair. It's typically the fastest amount to get approved for, since the total exposure for a lender is low.",
    useCases: ["Covering a shortfall on a utility or phone bill before your next paycheque", "A minor car repair or replacement part", "Bridging a few days' gap between paycheques", "A small emergency purchase you can't put off"],
    cons: ["The smallest amounts sometimes carry a flat fee structure that makes the effective rate look higher relative to the dollar amount borrowed.", "Not meant to cover anything beyond a single, contained cost — it won't stretch to combine multiple bills."],
    alternatives: [
      { title: "Employer paycheque advance", description: "If your employer offers one, it's often interest-free for an amount this small." },
      { title: "Overdraft protection", description: "If your bank account has overdraft coverage, it may be cheaper for a cost this size than a new loan." },
    ],
    faqs: [
      { q: "Is $300 too small of an amount to bother borrowing?", a: "Not at all — many lenders in our network specialize in smaller amounts specifically because the risk and repayment period are both short, making approval straightforward." },
      { q: "How quickly is a $300 loan typically funded?", a: "Often the fastest amount in our range to fund, since it requires the least underwriting — many applicants see funds within hours of accepting an offer." },
    ],
  },
  {
    value: 500, slug: "500", display: "$500", tier: "small",
    intro: "A $500 loan covers a slightly larger single expense than our smallest amount — common for a fuller car repair, a larger bill, or a purchase that a $300 loan wouldn't quite stretch to cover.",
    useCases: ["A more involved car repair, like a battery or brake job", "Replacing a broken small appliance", "A vet visit or pet care cost", "Covering rent or a bill that's fallen slightly behind"],
    cons: ["Still a short enough term that the monthly payment is a meaningful chunk of a typical paycheque.", "Best treated as a one-time solution, not a recurring source of cash flow."],
    alternatives: [
      { title: "Credit union small loan", description: "If you're a member, a small loan from a credit union can sometimes beat our network's rate for this amount." },
      { title: "Selling unused items", description: "For a cost this size, some borrowers find it's faster and cheaper to sell something they no longer need." },
    ],
    faqs: [
      { q: "What's the typical repayment period for a $500 loan?", a: "Most lenders in our network offer 3 to 6 month terms for this amount, balancing a manageable payment against a fast payoff." },
      { q: "Can I get a $500 loan with no credit history?", a: "Yes — this amount is small enough that many lenders focused on thin-file or newcomer applicants will consider it, weighing your income more than your credit file." },
    ],
  },
  {
    value: 600, slug: "600", display: "$600", tier: "small",
    intro: "A $600 loan sits at the upper end of our smallest amounts, often used to cover a cost that's a bit too large for a paycheque-to-paycheque bridge but still doesn't require a longer commitment.",
    useCases: ["Combining two smaller bills into a single payment", "A moving cost like a truck rental or deposit", "An unexpected travel expense", "A dental cost not fully covered by insurance"],
    cons: ["Rates for smaller amounts can be higher in percentage terms than larger loans, even though the total dollar interest is small.", "Worth comparing lender options carefully, since even a small rate difference matters more on repeat borrowing."],
    alternatives: [
      { title: "Payment plan with the service provider", description: "For costs like a dental bill, ask if the provider offers a payment plan directly — sometimes interest-free." },
      { title: "Family loan", description: "For an amount this size, borrowing from family with a simple written agreement can be a lower-cost option." },
    ],
    faqs: [
      { q: "Why might a $600 loan have a similar rate to a $300 loan?", a: "Lender pricing for smaller amounts is often based more on your credit profile than the specific dollar amount, so two small loans can carry similar rates even at different sizes." },
      { q: "Is $600 enough to combine two small bills?", a: "Often yes — this is a common amount for consolidating two modest bills into one predictable payment instead of juggling separate due dates." },
    ],
  },
  {
    value: 750, slug: "750", display: "$750", tier: "small",
    intro: "A $750 loan is a common choice for a cost that's grown slightly beyond a simple bill or repair — think a fuller list of back-to-school supplies, a larger vet bill, or a modest home repair.",
    useCases: ["A larger back-to-school shopping list for multiple children", "A more significant appliance repair", "Emergency travel costs", "A security deposit for a new rental"],
    cons: ["At this amount, lenders may start asking for slightly more income documentation than at smaller amounts.", "Worth confirming the term length fits your budget — a short term at this amount means a noticeably higher monthly payment."],
    alternatives: [
      { title: "Buy-now-pay-later for a specific purchase", description: "If the cost is tied to a single retail purchase, a point-of-sale installment plan might be cheaper for this amount." },
      { title: "Credit card with a promotional rate", description: "A 0% introductory offer, if you qualify and can repay within the window, can beat a personal loan's cost." },
    ],
    faqs: [
      { q: "What documents are typically needed for a $750 loan?", a: "Usually the same basics as smaller amounts — proof of income, a bank account, and ID — though some lenders may ask for a recent pay stub at this size." },
      { q: "Is a $750 loan enough to cover a security deposit?", a: "In many parts of Canada, yes — first and last month's rent deposits commonly fall in this range, though costs vary significantly by city." },
    ],
  },
  {
    value: 800, slug: "800", display: "$800", tier: "small",
    intro: "An $800 loan is our largest amount in the small-loan tier, often used when a cost is too large for a quick bridge loan but doesn't yet require the longer terms available at higher amounts.",
    useCases: ["A larger auto repair, like a transmission issue", "Replacing a major kitchen appliance", "Catching up on a utility bill that's fallen behind by more than one cycle", "A one-time medical or dental cost"],
    cons: ["This is close to the point where a slightly longer, mid-tier amount might offer a more comfortable monthly payment for the same underlying cost.", "Compare the total cost at this amount against borrowing slightly more with a longer term if your expense is likely to grow."],
    alternatives: [
      { title: "Line of credit", description: "If you already have one, drawing $800 from an existing line can be cheaper than a new personal loan application." },
      { title: "Split the cost across two paycheques", description: "If the expense allows partial payment, splitting it might reduce how much you need to borrow." },
    ],
    faqs: [
      { q: "Should I borrow $800 or round up to a mid-tier amount like $1,000?", a: "Borrow only what your specific expense requires — an extra $200 you don't need still accrues interest, even if the difference in monthly payment feels small." },
      { q: "Is an $800 loan considered a payday loan?", a: "No — it's a personal installment loan, repaid over several months rather than in a single lump sum on your next payday." },
    ],
  },
  {
    value: 1000, slug: "1000", display: "$1,000", tier: "mid",
    intro: "A $1,000 loan is often the first amount borrowers consider when a cost is too large to bridge with a paycheque but doesn't require a large, multi-thousand-dollar commitment — common for combining a couple of bills or a solid one-time expense.",
    useCases: ["Combining two or three smaller outstanding bills", "A significant car repair, like brakes and a battery together", "A short, unplanned trip for a family emergency", "Replacing a major broken appliance and its installation cost"],
    cons: ["Terms at this amount often stretch to 6-12 months, which lowers the payment but adds more total interest than the smaller tier.", "Worth checking for any early repayment penalty if you think you might pay it off faster than scheduled."],
    alternatives: [
      { title: "Credit union personal loan", description: "At this amount, a credit union with an established relationship may offer a meaningfully lower rate." },
      { title: "0% introductory credit card", description: "If you can repay within the promotional window, this can be the cheapest option — but missing the deadline is costly." },
    ],
    faqs: [
      { q: "What's a typical monthly payment on a $1,000 loan?", a: "It depends heavily on your term and rate — a 12-month term at a representative rate often lands in the $90-$100/mo range, though your specific offer may vary." },
      { q: "Can I use a $1,000 loan to consolidate smaller debts?", a: "Yes — this is one of the more common uses at this amount, replacing a few smaller bills or card balances with one fixed payment." },
    ],
  },
  {
    value: 1200, slug: "1200", display: "$1,200", tier: "mid",
    intro: "A $1,200 loan gives a bit more room than the $1,000 mark, often chosen when a mid-sized expense comes with some uncertainty about the final cost, like a repair that might run slightly over an initial estimate.",
    useCases: ["A car repair with an uncertain final invoice", "Combining a bill with a smaller planned purchase", "A moving cost including a deposit and a truck rental", "Covering a shortfall after a reduced paycheque"],
    cons: ["A slightly larger amount than you need still costs you in interest — confirm your actual expense before rounding up.", "At this size, comparing a few lenders' offers is worth the extra few minutes, since rates can vary more than at smaller amounts."],
    alternatives: [
      { title: "Installment plan with the service provider", description: "Some repair shops or contractors offer their own financing, sometimes at a comparable or better rate." },
      { title: "Personal line of credit", description: "If your borrowing need might grow beyond $1,200, a line of credit avoids taking on more than you need upfront." },
    ],
    faqs: [
      { q: "Why would I choose $1,200 over a round $1,000?", a: "If your actual cost is closer to $1,200, borrowing the precise amount you need avoids either shortfall or unnecessary extra interest from over-borrowing." },
      { q: "Does a $1,200 loan require more documentation than $1,000?", a: "Generally no — requirements are similar across this tier, though your specific lender's process may vary slightly." },
    ],
  },
  {
    value: 1500, slug: "1500", display: "$1,500", tier: "mid",
    intro: "A $1,500 loan is a common mid-tier amount, often used for debt consolidation of a couple of credit cards, a significant home or auto repair, or a planned cost like a smaller family celebration.",
    useCases: ["Consolidating two credit card balances into one payment", "A major home repair, like a water heater replacement", "A milestone celebration or smaller wedding cost", "Covering a portion of unexpected medical expenses"],
    cons: ["At this amount, total interest becomes a more meaningful number — compare the total repayable amount across offers, not just the monthly payment.", "A missed payment at this size has a bigger relative impact on your credit than at smaller amounts."],
    alternatives: [
      { title: "Balance transfer credit card", description: "If you're consolidating card debt specifically, a 0% balance transfer offer can beat a personal loan's cost if you qualify." },
      { title: "Credit union personal loan", description: "Worth comparing directly, since credit unions often price mid-sized loans competitively for members." },
    ],
    faqs: [
      { q: "Is $1,500 enough to meaningfully consolidate credit card debt?", a: "It depends on your total balances — for smaller combined balances, yes; for larger debt loads, a bigger consolidation loan or a dedicated debt consolidation product may serve you better." },
      { q: "What term lengths are available for a $1,500 loan?", a: "Most lenders in our network offer terms between 6 and 12 months at this amount, though some may extend further depending on your credit profile." },
    ],
  },
  {
    value: 1750, slug: "1750", display: "$1,750", tier: "mid",
    intro: "A $1,750 loan sits between the more common $1,500 and $2,000 amounts, often chosen when your specific expense doesn't round neatly to either and you'd rather not over-borrow.",
    useCases: ["A repair or purchase with a specific, non-round invoice amount", "Combining a bill with a smaller emergency cost", "A larger pet medical bill", "Covering the gap between an insurance payout and total repair cost"],
    cons: ["Less commonly advertised as a flat amount by some lenders, so it may take slightly more comparison shopping to find the best rate.", "Confirm your lender allows a precise, non-round amount rather than rounding you up automatically."],
    alternatives: [
      { title: "HELOC (if you're a homeowner)", description: "For this size, a home equity line of credit could offer a lower rate, though it requires home equity and adds a secured commitment." },
      { title: "Split financing", description: "If your cost has two components, financing each separately at the best available rate for each might beat one combined loan." },
    ],
    faqs: [
      { q: "Why isn't $1,750 a common 'round' loan amount?", a: "Lenders often market round numbers, but most will lend the exact amount you need — it's worth asking directly rather than assuming you must round up or down." },
      { q: "Is it cheaper to borrow $1,750 or round up to $2,000?", a: "Borrowing your actual need avoids extra interest — request the precise amount rather than rounding up for a 'cleaner' number." },
    ],
  },
  {
    value: 2000, slug: "2000", display: "$2,000", tier: "mid",
    intro: "A $2,000 loan is one of the most commonly requested amounts in our network, often used for a meaningful one-time cost like a larger repair, a portion of a bigger project, or consolidating a few debts.",
    useCases: ["A major appliance replacement, like a refrigerator or washer/dryer set", "Combining three or more smaller debts", "A significant portion of a home improvement project", "Covering costs related to a new baby"],
    cons: ["This amount often comes with a longer term (up to 12-18 months in some cases), which increases total interest paid compared to smaller, shorter loans.", "Worth checking your debt-to-income ratio before applying, since lenders scrutinize this more closely at higher amounts."],
    alternatives: [
      { title: "HELOC or secured loan", description: "If you own your home, a secured option at this amount likely offers a meaningfully lower rate." },
      { title: "Family loan with a written agreement", description: "For a $2,000 amount, some borrowers find family lending, formalized properly, cheaper than any commercial option." },
    ],
    faqs: [
      { q: "What credit score is typically needed for a $2,000 loan?", a: "Our network works across the credit spectrum, though your specific rate at this amount will depend heavily on your score — see our credit score guides for details at your range." },
      { q: "Can I use a $2,000 loan for a home improvement project?", a: "Yes, though for a full renovation this amount may only cover a portion — see our home improvement guide for how larger projects are typically financed." },
    ],
  },
  {
    value: 2500, slug: "2500", display: "$2,500", tier: "large",
    intro: "A $2,500 loan marks the start of our larger amounts, typically used for substantial expenses like meaningful debt consolidation, a significant home repair, or a larger planned life event.",
    useCases: ["Consolidating multiple credit cards into one lower combined payment", "A major home repair, like roof or furnace work", "A more significant wedding or celebration cost", "A larger vehicle repair or replacement part"],
    cons: ["Approval at this amount typically requires stronger proof of income and a fuller credit check than smaller loans.", "Total interest over a longer term can be substantial — always compare the total repayable amount, not just the rate."],
    alternatives: [
      { title: "Debt consolidation loan", description: "If consolidating debt is your goal, a purpose-built consolidation loan may offer better terms than a general personal loan." },
      { title: "HELOC", description: "For homeowners, a home equity line of credit typically offers the lowest rate available at this amount." },
    ],
    faqs: [
      { q: "What income do I need to qualify for a $2,500 loan?", a: "Requirements vary by lender, but you'll generally need to demonstrate income sufficient to comfortably cover the monthly payment alongside your existing obligations." },
      { q: "Is 24 months the maximum term for a $2,500 loan?", a: "Not necessarily — some lenders offer longer terms at this amount; see our loans by repayment term guide for options up to 60 months." },
    ],
  },
  {
    value: 3000, slug: "3000", display: "$3,000", tier: "large",
    intro: "A $3,000 loan is a common choice for consolidating multiple debts or funding a significant expense, like a large home repair or a meaningful portion of a bigger financial goal.",
    useCases: ["Consolidating several credit cards and a smaller personal loan into one payment", "A major home system repair or replacement", "Funding a portion of small business startup costs", "A significant, unavoidable medical or dental expense"],
    cons: ["At this size, comparing multiple lenders is especially worthwhile, since rate differences translate to real dollar amounts over the loan's life.", "A longer term lowers your payment but can meaningfully increase total cost — run the numbers for a few term options before choosing."],
    alternatives: [
      { title: "Balance transfer + personal loan combination", description: "Some borrowers split a larger need between a promotional balance transfer and a smaller personal loan to reduce blended cost." },
      { title: "Credit union term loan", description: "For larger amounts, a credit union's underwriting can sometimes beat an online lender's rate for established members." },
    ],
    faqs: [
      { q: "Is a $3,000 loan enough to consolidate most credit card debt?", a: "For many Canadians with moderate card balances, yes — though those with larger combined debt may need a bigger amount or a dedicated consolidation product." },
      { q: "How does my credit score affect my rate at $3,000?", a: "Significantly — at larger amounts, the gap between prime and subprime rates becomes a bigger dollar difference, making it worth checking your exact credit score range before applying." },
    ],
  },
  {
    value: 3500, slug: "3500", display: "$3,500", tier: "large",
    intro: "A $3,500 loan is often chosen for a specific, larger cost that doesn't quite require the full $5,000 maximum — a substantial home project, a bigger debt consolidation, or a well-defined major expense.",
    useCases: ["A defined home renovation project, like a bathroom refresh", "Consolidating a larger number of smaller debts", "A significant, planned family expense like adoption costs", "Covering a gap between insurance and a major repair"],
    cons: ["This amount sits close to our maximum, so it's worth confirming a $3,500 loan is genuinely enough for your need before committing to the application process.", "Longer terms at this size mean a real difference in total interest — compare at least two term lengths before deciding."],
    alternatives: [
      { title: "HELOC for a defined project", description: "For a specific renovation, a HELOC can offer a lower rate if you have qualifying home equity." },
      { title: "Phased financing", description: "If your project can be split into phases, financing each phase separately may reduce the total amount borrowed at once." },
    ],
    faqs: [
      { q: "Is $3,500 enough for a bathroom renovation?", a: "It depends on scope — a refresh (fixtures, paint, minor updates) often fits this budget, while a full gut renovation typically costs more; see our home improvement guide for typical cost ranges." },
      { q: "What happens if my project costs more than $3,500?", a: "You can apply for a larger amount up to our $5,000 maximum, or consider a HELOC or secured loan if your project exceeds that." },
    ],
  },
  {
    value: 4000, slug: "4000", display: "$4,000", tier: "large",
    intro: "A $4,000 loan is one of our larger amounts, typically reserved for significant, well-defined expenses like a major debt consolidation, a large home project, or a substantial one-time family cost.",
    useCases: ["Consolidating a meaningful amount of higher-interest debt", "A larger home improvement project with a defined scope", "Major dental work not covered by insurance", "A significant, planned family expense"],
    cons: ["Qualifying for this amount typically requires stronger income documentation and a fuller credit review.", "Total interest at this size, especially over longer terms, can be substantial — always request the total repayable figure before accepting an offer."],
    alternatives: [
      { title: "HELOC", description: "For homeowners, this is often the lowest-cost way to access $4,000, assuming sufficient equity." },
      { title: "Debt consolidation loan", description: "Purpose-built consolidation products may offer better structuring than a general personal loan at this amount." },
    ],
    faqs: [
      { q: "Do I need a co-signer for a $4,000 loan?", a: "Not necessarily — approval depends on your income and credit profile, though a co-signer with stronger credit could improve your rate if your own profile is borderline." },
      { q: "How long does it typically take to repay a $4,000 loan?", a: "Terms in our network typically range from 24 to 48 months at this amount, balancing a manageable payment against total interest." },
    ],
  },
  {
    value: 4500, slug: "4500", display: "$4,500", tier: "large",
    intro: "A $4,500 loan is near our maximum amount, typically used for substantial expenses like a major consolidation of several debts or a significant, clearly scoped project.",
    useCases: ["Consolidating a large number of smaller debts into one manageable payment", "A significant home system replacement, like a furnace and related work", "A major life event cost, like a larger wedding", "Bridging a large, unavoidable expense with a predictable payment"],
    cons: ["This close to our maximum, it's worth confirming whether your need might exceed $5,000, in which case a different loan product may serve you better.", "Approval at this size depends heavily on a strong income-to-debt ratio — review this before applying."],
    alternatives: [
      { title: "HELOC or secured loan", description: "At this size, a secured option is often meaningfully cheaper if you have qualifying collateral." },
      { title: "Larger consolidation loan", description: "If you're consolidating debt specifically, compare against dedicated consolidation products built for this amount range." },
    ],
    faqs: [
      { q: "Is $4,500 close to the maximum I can borrow?", a: "Yes — our network's standard personal loan range tops out at $5,000; for more, you'd need a different loan product." },
      { q: "What term should I choose for a $4,500 loan?", a: "It depends on your budget — see our loans by repayment term guide to compare real payment examples at different lengths for this amount." },
    ],
  },
  {
    value: 5000, slug: "5000", display: "$5,000", tier: "large",
    intro: "A $5,000 loan is our largest standard amount, typically reserved for significant expenses like major debt consolidation, a substantial home project, or a large, unavoidable one-time cost.",
    useCases: ["Consolidating the largest amount of debt our network typically supports in one loan", "A major home renovation or repair project", "Significant medical, dental, or family expenses", "A large, planned life event cost"],
    cons: ["At our maximum amount, approval requires the strongest income and credit profile in our range — not every applicant will qualify for the full $5,000.", "Total interest at this size, especially over a longer term, is the highest in our range — compare total repayable figures across at least a few term lengths."],
    alternatives: [
      { title: "HELOC", description: "For homeowners, this is typically the lowest-cost way to access this amount or more, assuming sufficient equity." },
      { title: "A larger loan product outside our network", description: "If your need exceeds $5,000, you may need a dedicated larger personal loan or line of credit product." },
    ],
    faqs: [
      { q: "Will I automatically qualify for the full $5,000?", a: "No — approval and the specific amount offered depend on your income, credit profile, and existing debt load, the same as any other amount in our range." },
      { q: "What if I need more than $5,000?", a: "Our network's standard personal loans top out at $5,000 — for larger amounts, a line of credit, HELOC, or a different loan product may be a better fit; see our loan types page for alternatives." },
    ],
  },
];

export function getLoanAmount(slug: string): LoanAmount | undefined {
  return LOAN_AMOUNTS.find((a) => a.slug === slug);
}

export const TERM_OPTIONS: Record<LoanTier, [number, number]> = {
  small: [3, 6],
  mid: [6, 12],
  large: [12, 24],
};
