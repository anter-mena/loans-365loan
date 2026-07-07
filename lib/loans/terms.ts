export interface RepaymentTerm {
  slug: string;
  months: number;
  label: string;
  representativeAmounts: number[];
  intro: string;
  whoItsFor: string[];
  considerations: string[];
  faqs: { q: string; a: string }[];
}

export const REPAYMENT_TERMS: RepaymentTerm[] = [
  {
    slug: "3-months",
    months: 3,
    label: "3 Months",
    representativeAmounts: [300, 500, 800],
    intro: "A 3-month term is the shortest repayment option in our network, designed to bridge a single short-term gap — a bill, a minor repair, or a bridge until your next paycheque or two. You'll pay the least total interest of any term, in exchange for the highest monthly payment relative to the amount borrowed.",
    whoItsFor: [
      "A one-time expense you can comfortably repay within a season",
      "Wanting to minimize total interest paid above all else",
      "Smaller loan amounts, typically under $1,000",
      "Confidence in stable income over the next few months",
    ],
    considerations: [
      "The monthly payment is proportionally higher than longer terms — make sure it fits comfortably in your budget before committing.",
      "Missing a payment on a short term has less room to recover than on a longer schedule.",
      "If your amount doesn't fully fit a 3-month payment, a slightly longer term may keep payments more manageable.",
    ],
    faqs: [
      { q: "Is a 3-month loan hard to get approved for?", a: "Not typically — shorter terms on smaller amounts are often the easiest to qualify for across our lender network, since the total exposure for the lender is lower." },
      { q: "Can I repay a 3-month loan early?", a: "Many lenders allow early repayment, which can reduce your total interest — check your specific lender's terms, as policies vary." },
    ],
  },
  {
    slug: "6-months",
    months: 6,
    label: "6 Months",
    representativeAmounts: [500, 800, 1000],
    intro: "A 6-month term roughly doubles your repayment window compared to the shortest option, lowering your monthly payment while still keeping total interest relatively low. It's a common choice for slightly larger one-time costs that don't fit comfortably into 3 months.",
    whoItsFor: [
      "A cost too large to comfortably repay in 3 months",
      "Wanting a lower monthly payment without stretching into a full year",
      "Loan amounts typically in the $500-$1,200 range",
      "A clear, predictable payoff date within half a year",
    ],
    considerations: [
      "Total interest paid is somewhat higher than a 3-month term at the same amount, since interest accrues over a longer window.",
      "Six months is still short enough that a temporary income disruption could meaningfully strain your budget — plan accordingly.",
      "Compare the monthly payment here against a 3-month term for the same amount to see the tradeoff directly.",
    ],
    faqs: [
      { q: "How much more does a 6-month term cost than a 3-month term?", a: "It depends on the amount, but longer terms generally mean lower monthly payments and somewhat higher total interest — compare the specific numbers for your amount before choosing." },
      { q: "Is 6 months a common loan term in Canada?", a: "Yes — it's one of the more commonly offered terms for smaller personal loans, striking a balance between manageable payments and a fast payoff." },
    ],
  },
  {
    slug: "12-months",
    months: 12,
    label: "12 Months",
    representativeAmounts: [1000, 1500, 2000],
    intro: "A 12-month term is one of the most common repayment periods for personal loans in Canada, giving a full year to spread out a mid-sized expense. It's often the point where monthly payments start feeling comfortably manageable relative to the amount borrowed.",
    whoItsFor: [
      "Mid-sized expenses like a larger repair, moving costs, or a planned purchase",
      "Wanting predictable monthly budgeting over a full year",
      "Loan amounts typically in the $1,000-$2,000 range",
      "A balance between manageable payments and reasonable total interest",
    ],
    considerations: [
      "A full year is long enough that your financial situation could change — check for any prepayment flexibility in case you want to pay it off early.",
      "Total interest is meaningfully higher than a 3 or 6-month term for the same amount — borrow only what you need.",
      "This is often the first term where lenders may ask for more complete income documentation.",
    ],
    faqs: [
      { q: "Is a 12-month loan the most popular option?", a: "It's one of the most commonly chosen terms, since it balances a manageable monthly payment against a reasonable total cost for mid-sized amounts." },
      { q: "Can I switch from a 12-month to a shorter term later?", a: "Not directly, but you can often make extra payments or repay early if your lender allows it, which effectively shortens your payoff time and reduces total interest." },
    ],
  },
  {
    slug: "18-months",
    months: 18,
    label: "18 Months",
    representativeAmounts: [1500, 2000, 2500],
    intro: "An 18-month term extends your repayment window to a year and a half, further lowering the monthly payment for mid-to-larger amounts. It's a useful middle ground for borrowers who find 12 months a bit tight but don't need a full 24 months.",
    whoItsFor: [
      "Amounts that feel slightly too large for a 12-month payment",
      "Wanting more monthly breathing room without committing to two full years",
      "A mid-sized planned expense, like a larger repair or a life event cost",
      "Borrowers comfortable with a longer commitment in exchange for lower payments",
    ],
    considerations: [
      "18 months isn't always offered by every lender in our network — availability can be more limited than the more standard 12 or 24-month terms.",
      "The gap in total interest between 12 and 18 months is worth checking directly, since it's not always as large as the payment difference suggests.",
      "A longer commitment means more time for your circumstances to change — build in some payment flexibility if possible.",
    ],
    faqs: [
      { q: "Do all lenders offer an 18-month term?", a: "Not all — 12 and 24-month terms are more universally available, so it's worth checking which of our network's lenders offer 18 months for your specific amount." },
      { q: "Is 18 months a good compromise between 12 and 24 months?", a: "For many borrowers, yes — it lowers the monthly payment compared to 12 months without adding a full extra year of interest like a 24-month term would." },
    ],
  },
  {
    slug: "24-months",
    months: 24,
    label: "24 Months",
    representativeAmounts: [2000, 2500, 3500],
    intro: "A 24-month term is the standard choice for larger personal loans in our network, giving a full two years to comfortably repay a bigger expense or consolidate existing debt. It's typically where the monthly payment becomes clearly manageable, even for loan amounts near our $5,000 maximum.",
    whoItsFor: [
      "Larger expenses like debt consolidation or a major purchase",
      "Wanting the lowest monthly payment among our more commonly available terms",
      "Loan amounts from $2,000 up to our full $5,000 maximum",
      "A structured, multi-year payoff plan instead of revolving debt",
    ],
    considerations: [
      "Two years of accruing interest adds up — compare the total repayment amount against your current debt if you're consolidating.",
      "A longer term is a longer commitment; confirm the payment fits your budget through any reasonably foreseeable changes.",
      "This is often the point where it's worth comparing a personal loan against alternatives like a line of credit for the lowest overall cost.",
    ],
    faqs: [
      { q: "Is 24 months the maximum term for a $5,000 loan?", a: "Not necessarily — some lenders in our network offer longer terms like 36, 48, or 60 months for larger amounts, which can lower the monthly payment further at the cost of more total interest." },
      { q: "Why is 24 months such a common term?", a: "It represents a widely-offered balance between a manageable monthly payment and a reasonable total cost, which is why most lenders in our network default to it for larger loan amounts." },
    ],
  },
  {
    slug: "36-months",
    months: 36,
    label: "36 Months",
    representativeAmounts: [3000, 4000, 5000],
    intro: "A 36-month term extends repayment to three years, meaningfully lowering the monthly payment on larger amounts at the cost of more total interest. It's most often used for debt consolidation or a major expense where minimizing the monthly payment matters more than minimizing total cost.",
    whoItsFor: [
      "Debt consolidation where a lower combined payment is the priority",
      "Larger expenses where a 24-month payment still feels too high",
      "Borrowers prioritizing monthly cash flow over total interest paid",
      "A multi-year commitment you're confident will remain manageable",
    ],
    considerations: [
      "Total interest over 36 months is substantially higher than shorter terms — run the numbers before committing to make sure the lower payment is worth the added cost.",
      "Not every lender in our network offers terms this long; availability depends on your amount and credit profile.",
      "Confirm there's no penalty for early repayment, in case your financial situation improves and you want to pay it off faster.",
    ],
    faqs: [
      { q: "How much more interest will I pay over 36 months versus 24?", a: "Meaningfully more — extending the term lowers your monthly payment but increases the total interest paid, since interest accrues over a longer period. Compare the specific total repayable amount for your loan size." },
      { q: "Are 36-month terms available for smaller loan amounts?", a: "Typically no — longer terms are generally reserved for larger loan amounts, since a very small loan stretched over three years would carry a monthly payment too low to be practical for most lenders." },
    ],
  },
  {
    slug: "48-months",
    months: 48,
    label: "48 Months",
    representativeAmounts: [4000, 4500, 5000],
    intro: "A 48-month term is one of the longest repayment periods available in our network, reserved for larger loan amounts where a low monthly payment is the top priority. Four years of repayment means a meaningfully higher total cost, so this term is worth comparing carefully against shorter alternatives.",
    whoItsFor: [
      "Larger loan amounts near our $5,000 maximum",
      "Borrowers who need the lowest possible monthly payment",
      "Debt consolidation where cash flow is the most immediate concern",
      "A long-term financial commitment you've weighed carefully against the total cost",
    ],
    considerations: [
      "Total interest over 48 months is substantial — this term should be a deliberate choice, not a default, since shorter terms cost meaningfully less overall.",
      "Availability at this term length depends heavily on your credit profile and the specific lender.",
      "If your budget can handle a somewhat higher payment, a 24 or 36-month term will save you real money over the life of the loan.",
    ],
    faqs: [
      { q: "Is a 48-month term available for every credit profile?", a: "Not always — longer terms are more commonly extended to borrowers with stronger credit and income profiles, since the lender's risk exposure lasts longer." },
      { q: "Should I choose 48 months just because the payment is lowest?", a: "Not automatically — compare the total repayment amount against shorter terms first. The lowest monthly payment isn't always the lowest-cost option overall." },
    ],
  },
  {
    slug: "60-months",
    months: 60,
    label: "60 Months",
    representativeAmounts: [5000],
    intro: "A 60-month term is the longest repayment period offered across our network, exclusively for our largest loan amounts. Five years of repayment produces the lowest possible monthly payment, but also the highest total interest cost of any term we offer — this is the term to choose only after comparing it carefully against shorter options.",
    whoItsFor: [
      "Our maximum $5,000 loan amount specifically",
      "Borrowers who need the lowest possible monthly payment above all else",
      "Larger debt consolidation where minimizing monthly outflow is critical",
      "A five-year commitment you've fully weighed against the total cost",
    ],
    considerations: [
      "Total interest over 60 months is significant — for the same $5,000 loan, a 60-month term will cost meaningfully more in total than a 24 or 36-month term.",
      "Not all lenders in our network offer 60-month terms, and availability depends on a stronger credit and income profile.",
      "Before choosing this term, compare the total repayable amount against shorter terms — the payment difference may be smaller than expected relative to the added interest cost.",
    ],
    faqs: [
      { q: "Is a 60-month term available for smaller loan amounts?", a: "No — 60-month terms are reserved for our largest loan amounts, since a small loan stretched over five years wouldn't be practical for lenders to offer." },
      { q: "How much does a 60-month term cost compared to 24 months for the same $5,000 loan?", a: "Significantly more in total interest, since interest accrues over more than double the time — the repayment table on this page shows the specific numbers side by side." },
    ],
  },
];

export function getRepaymentTerm(slug: string): RepaymentTerm | undefined {
  return REPAYMENT_TERMS.find((t) => t.slug === slug);
}
