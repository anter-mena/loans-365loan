export interface LoanPurpose {
  slug: string;
  title: string;
  description: string;
  intro: string;
  covers: string[];
  considerations: string[];
  suggestedAmountSlug: string;
  faqs: { q: string; a: string }[];
}

export const LOAN_PURPOSES: LoanPurpose[] = [
  {
    slug: "business-startup-costs",
    title: "Business Startup Costs",
    description: "Starting a small business? Compare personal loans for startup costs in Canada. Fund equipment, inventory, and launch expenses.",
    intro: "Launching a small business often means covering costs before any revenue comes in — equipment, initial inventory, permits, or a first month's rent on a workspace. A personal loan can bridge that gap without giving up equity or taking on a business partner.",
    covers: ["Equipment and tools", "Initial inventory or supplies", "Business registration and permits", "First and last month's rent on a workspace"],
    considerations: [
      "A personal loan is based on your personal credit, not a business plan — often faster than a business loan for small amounts.",
      "Keep business and personal expenses separate once you're funded, even if the loan itself is personal.",
      "For larger, ongoing business financing, a dedicated business loan or line of credit may offer better terms long-term.",
    ],
    suggestedAmountSlug: "3000",
    faqs: [
      { q: "Can I use a personal loan instead of a business loan?", a: "Yes, for smaller startup costs many entrepreneurs use a personal loan since approval is based on personal credit and income, not business revenue or a business plan — which makes it faster for new businesses with no financial history yet." },
      { q: "Will this affect my personal credit or my business credit?", a: "A personal loan for business costs reports to your personal credit file, not a business credit file. Repay it like any other personal loan to protect your personal score." },
    ],
  },
  {
    slug: "birthday-special-occasions",
    title: "Birthday & Special Occasions",
    description: "Planning a milestone celebration? Compare personal loans for birthday parties and special events in Canada.",
    intro: "Milestone birthdays, anniversaries, and celebrations can add up quickly once you factor in venue, catering, and decor. A personal loan spreads that one-time cost into manageable monthly payments instead of straining your regular budget.",
    covers: ["Venue rental and catering", "Decorations and entertainment", "Gifts and party favours", "Photography or videography"],
    considerations: [
      "Set a firm budget before you shop for vendors — it's easy for celebration costs to grow.",
      "Borrow only what the event needs; a smaller, well-planned celebration is easier to repay.",
      "Compare a loan's total cost against simply saving for a slightly later date if there's no fixed deadline.",
    ],
    suggestedAmountSlug: "1500",
    faqs: [
      { q: "How much do Canadians typically spend on a milestone birthday party?", a: "Costs vary widely by guest count and venue, but a mid-size celebration with a rented venue and catering commonly runs $1,000 to $3,000 in Canada." },
      { q: "Is it worth financing a one-day event?", a: "That's a personal call — some prefer to spread a meaningful celebration's cost over a few months rather than delay it or scale it back significantly." },
    ],
  },
  {
    slug: "back-to-school",
    title: "Back to School",
    description: "Navigate back-to-school costs in Canada with personal loans. Learn about typical expenses, loan options, and responsible borrowing.",
    intro: "Between school supplies, a new wardrobe, technology, and activity fees, back-to-school season is one of the more predictable — and expensive — times of year for Canadian families. A short-term loan can smooth out the cost across a single paycheque cycle.",
    covers: ["School supplies and textbooks", "Laptop or tablet for schoolwork", "Clothing and footwear", "Extracurricular and activity fees"],
    considerations: [
      "Costs are seasonal and predictable — a smaller, shorter-term loan usually fits better than a large one.",
      "Check if your school or province offers supply grants or subsidies before borrowing.",
      "Buying supplies in bulk with siblings or neighbours can reduce how much you need to borrow.",
    ],
    suggestedAmountSlug: "800",
    faqs: [
      { q: "How much does back-to-school shopping typically cost per child in Canada?", a: "Estimates commonly range from $200 to $700 per child depending on grade level and whether new technology is needed, with costs rising for older students." },
      { q: "Can I get approved quickly enough for the start of the school year?", a: "Yes — most applicants receive a decision within minutes and funds within 24 hours, which fits within a typical back-to-school shopping window." },
    ],
  },
  {
    slug: "baby-expenses",
    title: "Baby Expenses",
    description: "Expecting a baby in Canada? Learn how a personal loan can help cover the costs of welcoming your new arrival. Get tips on managing baby expenses.",
    intro: "A new baby brings real upfront costs — a crib, car seat, stroller, and everything else before your little one arrives. A personal loan can help cover the essentials in one lump sum rather than piecing it together paycheque by paycheque.",
    covers: ["Crib, car seat, and stroller", "Diapers and initial nursery setup", "Hospital or delivery-related costs not covered by insurance", "Maternity or paternity leave income gaps"],
    considerations: [
      "Prioritize safety essentials (car seat, crib) first — many other items can be bought secondhand.",
      "Factor in a temporary income dip if you're taking unpaid or partial leave.",
      "Baby registries and family gifts can offset a meaningful portion of these costs.",
    ],
    suggestedAmountSlug: "2000",
    faqs: [
      { q: "What do new parents in Canada typically spend in the first year?", a: "Estimates vary, but core essentials like a crib, car seat, stroller, and diapers commonly total $2,000 to $4,000 in the first year, before ongoing costs like childcare." },
      { q: "Can I apply for a loan while on parental leave with reduced income?", a: "Yes — lenders look at your overall income, including EI parental benefits, though your specific offers will reflect your reduced income during leave." },
    ],
  },
  {
    slug: "appliance-replacement",
    title: "Appliance Replacement",
    description: "Need to replace a broken appliance in Canada? Learn how personal loans can help, typical costs, and tips for responsible borrowing.",
    intro: "A broken fridge, washer, or stove isn't something most households can put off. A personal loan lets you replace an essential appliance right away and spread the cost over a few months instead of draining your savings in one shot.",
    covers: ["Refrigerators, washers, and dryers", "Stoves, ovens, and dishwashers", "Delivery and installation fees", "Removal of the old appliance"],
    considerations: [
      "Compare energy-efficient models — a slightly higher upfront cost can lower utility bills over time.",
      "Check if your existing appliance is still under warranty before assuming it needs full replacement.",
      "Some retailers offer 0% financing on major appliances — worth comparing against a personal loan's total cost.",
    ],
    suggestedAmountSlug: "1000",
    faqs: [
      { q: "How much does it cost to replace a major appliance in Canada?", a: "A mid-range refrigerator, washer, or stove typically costs $600 to $1,500 before delivery and installation, with premium models running higher." },
      { q: "Can I get funded fast enough for an emergency appliance replacement?", a: "Yes — most applicants get a decision within minutes and funds within 24 hours, which works for a broken fridge or washer that can't wait." },
    ],
  },
  {
    slug: "adoption-expenses",
    title: "Adoption Expenses",
    description: "Planning to adopt? Compare personal loans for adoption expenses in Canada. Cover agency fees, legal costs, and travel.",
    intro: "Adoption often comes with significant upfront costs — agency fees, legal work, home studies, and sometimes travel. A personal loan can help cover these costs on the timeline the adoption process requires, rather than delaying your family's plans.",
    covers: ["Adoption agency and application fees", "Legal and court costs", "Home study fees", "Travel for domestic or international adoption"],
    considerations: [
      "Check for provincial adoption subsidies or tax credits that can offset part of the cost.",
      "Some employers offer adoption assistance benefits — worth checking before you borrow.",
      "International adoptions often have larger, less predictable costs than domestic ones — plan for some buffer.",
    ],
    suggestedAmountSlug: "3000",
    faqs: [
      { q: "How much does adoption typically cost in Canada?", a: "Costs vary significantly by province and type of adoption, with private domestic adoption often ranging from a few thousand dollars to over $20,000, and international adoption typically costing more." },
      { q: "Are adoption costs tax deductible in Canada?", a: "Canada offers an Adoption Expense Tax Credit that can offset some eligible costs — check with the CRA or a tax professional for current amounts and eligibility." },
    ],
  },
  {
    slug: "car-down-payment",
    title: "Car Down Payment",
    description: "Need a down payment for a vehicle? Compare personal loans for car down payments in Canada. Get approved quickly with competitive rates.",
    intro: "A larger down payment can mean a lower monthly car payment and less interest paid over the life of an auto loan. A personal loan can help you reach that down payment amount faster, especially if you need the vehicle sooner than your savings allow.",
    covers: ["Down payment on a new or used vehicle", "Vehicle registration and licensing fees", "First insurance payment", "Safety inspection or certification costs"],
    considerations: [
      "A bigger down payment reduces your auto loan's total interest — compare that savings against this loan's cost.",
      "Some dealers offer their own financing promotions — compare the total cost, not just the monthly payment.",
      "Keep your debt-to-income ratio in mind, since you'll likely be carrying both loans at once.",
    ],
    suggestedAmountSlug: "2500",
    faqs: [
      { q: "How much should I put down on a car in Canada?", a: "A common guideline is 10-20% of the vehicle's price, though the right amount depends on the loan term and rate you're offered." },
      { q: "Can I use a personal loan for a down payment and still get approved for the auto loan?", a: "Yes, though the auto lender may ask about the source of your down payment — be upfront about it as part of your application." },
    ],
  },
  {
    slug: "car-repairs",
    title: "Car Repairs",
    description: "Compare personal loans for car repairs in Canada. Cover mechanic bills, transmission, engine and brake repairs with affordable payments.",
    intro: "A failed transmission, engine trouble, or brake repair can turn into an emergency fast, especially if you rely on your car to get to work. A personal loan gets the repair covered quickly so you're not without transportation any longer than necessary.",
    covers: ["Transmission and engine repairs", "Brake and suspension work", "Diagnostic and labour fees", "Towing costs"],
    considerations: [
      "Get a second quote for major repairs — costs can vary significantly between shops.",
      "Weigh the repair cost against the vehicle's value — sometimes replacement makes more financial sense.",
      "Ask your mechanic for a repair priority list if you're on a tight budget; not everything needs fixing at once.",
    ],
    suggestedAmountSlug: "1200",
    faqs: [
      { q: "How much do common car repairs cost in Canada?", a: "Brake jobs often run $300-$800, while transmission or engine repairs can range from $1,500 to $4,000+ depending on the vehicle and extent of the damage." },
      { q: "How fast can I get funded for an urgent car repair?", a: "Most applicants receive a decision within minutes and funds within 24 hours, and some lenders offer same-day funding for urgent repairs." },
    ],
  },
  {
    slug: "certification-licensing-fees",
    title: "Certification & Licensing Fees",
    description: "Need to pay for professional certification or licensing? Compare personal loans for career development costs in Canada.",
    intro: "Professional certifications, licensing exams, and continuing education can be a meaningful upfront investment in your career, but the payoff — a promotion, new role, or higher earning potential — often more than covers the cost over time.",
    covers: ["Exam and certification fees", "Course materials and study resources", "Licensing or membership dues", "Travel to testing centres if required"],
    considerations: [
      "Check if your employer offers tuition or certification reimbursement before you pay out of pocket.",
      "Some professional bodies offer payment plans directly — compare that cost against a personal loan.",
      "Factor in exam retake costs if the certification has a meaningful failure rate.",
    ],
    suggestedAmountSlug: "1500",
    faqs: [
      { q: "Can a personal loan cover professional exam fees?", a: "Yes — a personal loan can be used for any legitimate expense, including certification exams, licensing fees, and required course materials." },
      { q: "Will my employer's reimbursement affect my loan?", a: "No — a personal loan is independent of any employer reimbursement. You can use reimbursed funds to pay down the loan faster once received." },
    ],
  },
  {
    slug: "childcare-deposits",
    title: "Childcare Deposits",
    description: "Need to pay a daycare deposit? Compare personal loans for childcare registration and deposit fees in Canada.",
    intro: "Many daycares and childcare centres require a non-refundable deposit or several months' payment upfront to hold a spot — often due well before your return-to-work date. A personal loan can cover that deposit without disrupting your regular budget.",
    covers: ["Daycare or childcare centre deposits", "First month's tuition paid upfront", "Registration and administration fees", "Backup or emergency childcare costs"],
    considerations: [
      "Ask centres if deposits are refundable or transferable if your plans change.",
      "Get on waitlists early — in many Canadian cities, spots are scarce and deposits are due with little notice.",
      "Check provincial childcare subsidy programs, which can reduce your ongoing costs even if they don't cover the deposit.",
    ],
    suggestedAmountSlug: "800",
    faqs: [
      { q: "How much are typical daycare deposits in Canada?", a: "Deposits vary by province and centre, but commonly range from one to two months of tuition, which can be several hundred to over a thousand dollars in major cities." },
      { q: "Can I get funded before my daycare's deposit deadline?", a: "Most applicants get a decision within minutes and funds within 24 hours, which typically fits within a centre's deposit deadline." },
    ],
  },
  {
    slug: "christmas-expenses",
    title: "Christmas Expenses",
    description: "Considering a personal loan to cover Christmas expenses in Canada? Learn about typical costs, loan amounts, and how to apply for a Christmas loan tailored for Canadians.",
    intro: "Between gifts, travel, and hosting, December costs can stretch even a well-planned budget. A Christmas loan spreads holiday spending over a few months so you're not starting the new year with high-interest credit card debt.",
    covers: ["Gifts for family and friends", "Holiday travel and hosting costs", "Decorations and holiday meals", "Year-end charitable giving"],
    considerations: [
      "Compare this loan's total cost against your credit card's rate if you'd otherwise carry a balance through January.",
      "Set a per-person gift budget in advance — it's the easiest way to control total holiday spending.",
      "Consider applying early in November to spread payments over more months before the bills arrive.",
    ],
    suggestedAmountSlug: "1000",
    faqs: [
      { q: "When should I apply for a Christmas loan?", a: "Applying in October or November gives you funds before peak holiday spending and more time to compare repayment terms before January bills arrive." },
      { q: "Is a Christmas loan different from a regular personal loan?", a: "Not structurally — it's a personal loan applied toward holiday costs. Some lenders market seasonal \"holiday loans,\" but the underlying product is the same." },
    ],
  },
  {
    slug: "debt-consolidation",
    title: "Debt Consolidation",
    description: "Explore how personal loans can help you consolidate debt in Canada. Learn about costs, benefits, and responsible loan management.",
    intro: "Juggling several credit cards or high-interest debts each month makes it easy to lose track of what you owe and pay more in interest than necessary. A debt consolidation loan combines those balances into one fixed payment, often at a lower overall rate.",
    covers: ["Multiple credit card balances", "Existing high-interest personal loans", "Store cards and line-of-credit balances", "Overdraft or collections balances"],
    considerations: [
      "Compare the new loan's APR against the weighted average of your current debts — consolidation only helps if the new rate is genuinely lower.",
      "Avoid re-accumulating balances on cards you've just paid off; consider closing or freezing them.",
      "A longer term can lower your monthly payment but increase total interest paid — check both numbers before deciding.",
    ],
    suggestedAmountSlug: "5000",
    faqs: [
      { q: "Will debt consolidation hurt my credit score?", a: "Checking your rate uses a soft credit inquiry with no impact. Consolidating can help your score over time by lowering your credit utilization, provided you don't run up the old balances again." },
      { q: "Is debt consolidation the same as debt settlement?", a: "No. Consolidation combines your existing debts into one new loan that you repay in full. Debt settlement negotiates to pay less than you owe and typically damages your credit significantly more." },
    ],
  },
  {
    slug: "home-improvement",
    title: "Home Improvement",
    description: "Considering a personal loan for home renovations in Canada? Learn about typical costs, loan amounts, pros and cons, and how to apply for your dream home improvement project.",
    intro: "Whether it's a kitchen refresh, a new roof, or fixing something that's been on your list for years, home improvement projects rarely fit into a single paycheque. A personal loan lets you start the project now and pay it off over a term that matches the investment.",
    covers: ["Kitchen and bathroom renovations", "Roofing, siding, and windows", "Flooring and painting", "Contractor and permit fees"],
    considerations: [
      "Get multiple contractor quotes — renovation costs can vary substantially for the same scope of work.",
      "Improvements like kitchens and bathrooms typically add the most resale value if you're planning to sell later.",
      "A secured option like a HELOC may offer a lower rate than a personal loan if you have home equity available.",
    ],
    suggestedAmountSlug: "4000",
    faqs: [
      { q: "How much do home renovations typically cost in Canada?", a: "Costs vary enormously by project — a bathroom refresh might run $5,000-$15,000, while a full kitchen renovation often exceeds $20,000. A personal loan tends to suit smaller, defined projects best." },
      { q: "Is a personal loan or a HELOC better for renovations?", a: "A HELOC often has a lower rate if you have home equity, but a personal loan is faster to arrange and doesn't put your home up as collateral — a reasonable tradeoff for smaller projects." },
    ],
  },
  {
    slug: "holiday-shopping",
    title: "Holiday Shopping",
    description: "Need extra funds for holiday gift shopping? Compare personal loans for seasonal spending in Canada. Manageable repayment terms.",
    intro: "Seasonal gift-giving and hosting can add up well beyond what a single paycheque covers, especially with a larger family or gift list. A personal loan spreads that spending into manageable monthly payments instead of carrying a high-interest credit card balance.",
    covers: ["Gifts for family, friends, and coworkers", "Holiday hosting and entertaining costs", "Seasonal travel to see family", "Gift wrapping, cards, and shipping"],
    considerations: [
      "Set a total holiday budget before shopping, then divide it across your gift list.",
      "Watch for Black Friday and Boxing Day sales to reduce how much you actually need to borrow.",
      "Compare a loan's fixed rate against a credit card's rate if you'd otherwise carry a balance into the new year.",
    ],
    suggestedAmountSlug: "750",
    faqs: [
      { q: "How much do Canadians spend on holiday shopping each year?", a: "Survey estimates commonly put average holiday spending per person in the range of $500 to $800, though this varies widely by household and region." },
      { q: "Is it better to use a loan or a credit card for holiday shopping?", a: "A personal loan typically offers a lower, fixed rate compared to a credit card's ongoing interest, especially if you wouldn't pay the card off in full." },
    ],
  },
  {
    slug: "funeral-expenses",
    title: "Funeral Expenses",
    description: "Get guidance on using personal loans to cover funeral expenses in Canada. Learn about costs, application, and responsible borrowing.",
    intro: "Funeral costs often arrive suddenly and need to be paid quickly, at a time when the last thing you want to worry about is financing. A personal loan can cover these costs immediately, letting you focus on your family instead of the bill.",
    covers: ["Funeral home and burial or cremation costs", "Casket, urn, or memorial costs", "Service, venue, and catering costs", "Travel for out-of-town family"],
    considerations: [
      "Ask the funeral home about payment plans directly — some offer their own financing.",
      "Check if the deceased had life insurance or a pre-paid funeral plan before assuming the full cost falls on you.",
      "You don't need to make every decision the same day — many funeral homes allow a short window to review costs.",
    ],
    suggestedAmountSlug: "3000",
    faqs: [
      { q: "How much does an average funeral cost in Canada?", a: "A traditional funeral with burial commonly costs $5,000 to $15,000 in Canada, while cremation-based services are often less expensive." },
      { q: "How quickly can I get funded to cover funeral costs?", a: "Most applicants get a decision within minutes and funds within 24 hours, which helps when a funeral home needs payment on a short timeline." },
    ],
  },
  {
    slug: "emergency-expenses",
    title: "Emergency Expenses",
    description: "Unexpected emergency? Learn how personal loans can help Canadians cover urgent costs like car repairs or medical bills. Get tips on applying and managing your loan.",
    intro: "Not every emergency gives you time to plan — a burst pipe, an urgent medical bill, or a sudden job loss can all require money faster than your savings can provide. A personal loan is built for exactly this kind of unplanned, time-sensitive cost.",
    covers: ["Unexpected home or vehicle repairs", "Urgent medical or dental bills", "Emergency travel", "Bridging an income gap after job loss"],
    considerations: [
      "Borrow only what the emergency actually requires — it's tempting to round up when money is stressful.",
      "Check if you have any emergency assistance programs available through your province or employer first.",
      "An emergency fund, even a small one, reduces how often you'll need to rely on borrowing in the future.",
    ],
    suggestedAmountSlug: "1000",
    faqs: [
      { q: "How fast can I get an emergency loan in Canada?", a: "Most applicants receive a decision within minutes, and funds are typically deposited within 24 hours — some lenders offer same-day funding for genuine emergencies." },
      { q: "What counts as an emergency expense?", a: "Any unplanned, necessary cost qualifies — common examples include urgent repairs, medical bills, or a sudden gap in income. Lenders don't require proof of the specific emergency to approve a personal loan." },
    ],
  },
  {
    slug: "divorce-separation-costs",
    title: "Divorce & Separation Costs",
    description: "Going through a divorce or separation? Compare personal loans to cover legal fees, moving costs, and transition expenses in Canada.",
    intro: "Separating from a partner often comes with real upfront costs — legal fees, a new place to live, and splitting shared expenses that used to be covered by two incomes. A personal loan can help cover the transition without adding financial stress to an already difficult time.",
    covers: ["Legal and mediation fees", "Moving and first-and-last-month's rent on a new place", "Furnishing a new household", "Temporary support while finances are separated"],
    considerations: [
      "Legal aid or mediation services may be available at a lower cost than full legal representation — worth checking before you borrow for legal fees specifically.",
      "Keep new debt separate from any shared debts still being divided in the separation.",
      "A budget based on your income alone, not the household's former combined income, will help size the loan correctly.",
    ],
    suggestedAmountSlug: "2500",
    faqs: [
      { q: "Can a personal loan cover legal fees for a divorce?", a: "Yes — a personal loan can be used for any legitimate expense, including legal or mediation fees related to a separation or divorce." },
      { q: "Will this loan be considered in the divorce settlement?", a: "Debts taken on during or after separation are generally treated as personal — but rules vary by province. A family lawyer can advise on how this specific debt may factor into your settlement." },
    ],
  },
  {
    slug: "dental-expenses",
    title: "Dental Expenses",
    description: "Explore how personal loans can help cover dental expenses in Canada. Learn about typical costs, loan options, and responsible borrowing.",
    intro: "Dental work is often only partially covered by insurance, and procedures like crowns, root canals, or orthodontics can carry a significant out-of-pocket cost. A personal loan lets you get necessary treatment done now and pay it off over time.",
    covers: ["Crowns, root canals, and extractions", "Orthodontics and braces", "Dental implants and cosmetic work", "Emergency dental treatment"],
    considerations: [
      "Ask your dentist's office about in-house payment plans — some offer 0% financing directly.",
      "Check exactly what your insurance covers before borrowing for the full amount.",
      "Get a written treatment estimate, since costs can shift once work begins.",
    ],
    suggestedAmountSlug: "1500",
    faqs: [
      { q: "How much does dental work typically cost in Canada?", a: "A root canal often runs $600-$1,500 depending on the tooth, while a single crown can cost $1,000-$2,000 — insurance typically covers only a portion of these costs." },
      { q: "Can I get a loan for cosmetic dental work too?", a: "Yes, a personal loan can be used for elective or cosmetic dental procedures as well as necessary treatment — lenders don't distinguish between the two." },
    ],
  },
  {
    slug: "home-security",
    title: "Home Security",
    description: "Need to install a home security system? Compare personal loans for home safety equipment and installation in Canada.",
    intro: "Whether you've had a break-in, a close call, or just want peace of mind, upgrading your home's security is a cost most households don't budget for in advance. A personal loan lets you install a proper system right away instead of waiting to save up.",
    covers: ["Security system equipment and cameras", "Professional installation", "Monitoring service setup fees", "Smart locks and lighting upgrades"],
    considerations: [
      "Compare DIY systems against professionally monitored ones — the upfront cost differs significantly.",
      "Check if your home insurance offers a discount for a monitored security system; it can offset some of the ongoing cost.",
      "Prioritize entry points (doors, ground-floor windows) if your budget doesn't stretch to a full system.",
    ],
    suggestedAmountSlug: "1200",
    faqs: [
      { q: "How much does a home security system cost in Canada?", a: "A basic self-monitored system can start around $200-$500, while a professionally installed and monitored system often runs $1,000-$2,500 including equipment and setup." },
      { q: "Does a security system lower my home insurance?", a: "Many Canadian insurers offer a discount for monitored security systems — check with your provider, as it can help offset the ongoing monitoring cost." },
    ],
  },
  {
    slug: "moving-expenses",
    title: "Moving Expenses",
    description: "Considering a personal loan for your Canadian move? Learn about typical costs, loan amounts, pros and cons, and how to apply for moving expense financing.",
    intro: "Between movers, a deposit on a new place, and replacing anything that doesn't survive the move, relocating costs more than most people expect. A personal loan covers the move upfront so you're not scrambling to pay multiple parties at once.",
    covers: ["Moving company or truck rental", "First and last month's rent or a down payment", "Packing supplies and storage", "Utility hookup and transfer fees"],
    considerations: [
      "Get moving quotes well in advance — costs can spike significantly during peak moving season (May to September).",
      "Compare a full-service mover against a rental truck plus your own labour if you're trying to reduce costs.",
      "Factor in a buffer for unexpected costs like extra storage or delayed possession dates.",
    ],
    suggestedAmountSlug: "1500",
    faqs: [
      { q: "How much does a typical move cost in Canada?", a: "A local move often runs $500-$1,500 with professional movers, while a long-distance move across provinces can cost $2,000-$5,000 or more depending on distance and volume." },
      { q: "Can I get funded before my moving date?", a: "Most applicants get a decision within minutes and funds within 24 hours, which usually leaves enough time to book movers or a truck before your move." },
    ],
  },
  {
    slug: "medical-expenses",
    title: "Medical Expenses",
    description: "Explore personal loans for medical expenses in Canada. Learn about typical costs, application process, and responsible loan management for healthcare financing.",
    intro: "Not every medical cost is covered by provincial health insurance or an employer plan — specialists, procedures, equipment, and treatments can leave a real out-of-pocket balance. A personal loan lets you get the care you need without delay.",
    covers: ["Specialist consultations and procedures", "Medical equipment and mobility aids", "Out-of-country medical costs", "Fertility treatments and other uninsured procedures"],
    considerations: [
      "Confirm exactly what's covered by your provincial plan or employer benefits before borrowing for the full cost.",
      "Ask your provider's billing office about payment plans, which sometimes carry no interest.",
      "Keep receipts — many medical expenses are eligible for a tax credit at filing time.",
    ],
    suggestedAmountSlug: "2000",
    faqs: [
      { q: "Are medical expenses tax deductible in Canada?", a: "Many out-of-pocket medical expenses qualify for the Medical Expense Tax Credit — keep all receipts and check current eligibility with the CRA or a tax professional." },
      { q: "Can I use a personal loan for a procedure not covered by my province?", a: "Yes — a personal loan can cover any legitimate medical cost, including procedures not covered by provincial health insurance or private benefits." },
    ],
  },
  {
    slug: "legal-fees",
    title: "Legal Fees",
    description: "Need help covering legal costs? Compare personal loans for attorney fees, court costs, and legal expenses in Canada. Fast approval, flexible terms.",
    intro: "Legal representation — whether for a family matter, a dispute, or a contract — often requires payment upfront or a retainer before work begins. A personal loan can cover legal costs so you're not choosing a lawyer based on price alone.",
    covers: ["Attorney retainers and hourly fees", "Court filing and administrative costs", "Mediation or arbitration fees", "Document preparation and notary costs"],
    considerations: [
      "Ask about flat-fee arrangements for straightforward matters — they can be more predictable than hourly billing.",
      "Check if you qualify for legal aid, which can significantly reduce or eliminate costs for certain cases.",
      "Get a written estimate of total expected costs before committing to representation.",
    ],
    suggestedAmountSlug: "2000",
    faqs: [
      { q: "Can a personal loan cover a lawyer's retainer?", a: "Yes — a personal loan can be used for any legitimate expense, including legal retainers, court costs, and related fees." },
      { q: "Is legal aid available in Canada for those who can't afford a lawyer?", a: "Each province operates its own legal aid program with its own eligibility rules, generally based on income and the type of legal matter — worth checking before covering costs privately." },
    ],
  },
  {
    slug: "insurance-premiums",
    title: "Insurance Premiums",
    description: "Struggling to pay insurance premiums? Compare personal loans to cover auto, home, or health insurance costs in Canada.",
    intro: "Falling behind on auto, home, or health insurance premiums risks a lapse in coverage right when you need it most. A personal loan can cover a premium payment to keep your policy active while you get back on track financially.",
    covers: ["Auto insurance premiums", "Home or tenant insurance premiums", "Health or life insurance premiums", "Annual lump-sum premium payments"],
    considerations: [
      "Ask your insurer about switching to monthly payments, which can prevent this issue going forward.",
      "A lapse in coverage can raise your future premiums significantly — covering the payment on time is often worth the loan's cost.",
      "Shop your policy at renewal — you may find a lower premium elsewhere that reduces future strain.",
    ],
    suggestedAmountSlug: "800",
    faqs: [
      { q: "What happens if my insurance lapses?", a: "A lapse can leave you uninsured against major losses and often results in higher premiums going forward, since insurers view a lapse as increased risk." },
      { q: "Can I get funded fast enough to avoid a policy cancellation?", a: "Most applicants get a decision within minutes and funds within 24 hours, which is usually fast enough to make a payment before a policy is cancelled — contact your insurer immediately if you're at risk of lapsing." },
    ],
  },
  {
    slug: "immigration-fees",
    title: "Immigration Fees",
    description: "Need help with immigration application costs? Compare personal loans for visa, PR, and citizenship fees in Canada.",
    intro: "Visa applications, permanent residency, and citizenship all come with government fees, and often legal or consultant costs on top. A personal loan can help you meet application deadlines without delaying your immigration timeline.",
    covers: ["Visa and permit application fees", "Permanent residency and citizenship fees", "Immigration consultant or lawyer fees", "Biometrics, medical exams, and document costs"],
    considerations: [
      "Confirm current government fee amounts directly on the IRCC website, since these change periodically.",
      "Be cautious of unlicensed immigration consultants — verify credentials before paying for advice.",
      "Some fees are refundable if an application is withdrawn before processing — check the specific rules for your application type.",
    ],
    suggestedAmountSlug: "1500",
    faqs: [
      { q: "How much are permanent residency fees in Canada?", a: "Government fees for permanent residency applications change periodically — check the current amounts directly on the IRCC (Immigration, Refugees and Citizenship Canada) website before applying." },
      { q: "Can a personal loan cover consultant or lawyer fees for immigration?", a: "Yes — a personal loan can be used for any legitimate cost related to your immigration application, including professional fees." },
    ],
  },
  {
    slug: "pet-expenses",
    title: "Pet Expenses",
    description: "Unexpected vet bills or pet care costs stressing you out? Learn how a personal loan can help Canadian pet owners manage pet expenses responsibly.",
    intro: "An unexpected vet bill, surgery, or ongoing treatment for a pet can run into the thousands with little warning. A personal loan lets you get your pet the care it needs right away rather than delaying treatment while you save.",
    covers: ["Emergency vet visits and surgery", "Ongoing treatment or medication", "Diagnostic tests and imaging", "Adoption fees and initial pet setup costs"],
    considerations: [
      "Ask your vet about payment plans directly — some clinics offer their own financing for larger procedures.",
      "Pet insurance can reduce future emergency costs significantly if you don't already have a policy.",
      "Get a cost estimate before major procedures, since emergency vet costs can vary widely between clinics.",
    ],
    suggestedAmountSlug: "1200",
    faqs: [
      { q: "How much do emergency vet bills typically cost in Canada?", a: "Costs vary by procedure, but emergency surgery or extended treatment can easily run $1,500 to $5,000 or more, especially at emergency or specialty clinics." },
      { q: "How fast can I get funded for an emergency vet bill?", a: "Most applicants receive a decision within minutes and funds within 24 hours, and some lenders offer same-day funding for urgent situations." },
    ],
  },
  {
    slug: "wedding-expenses",
    title: "Wedding Expenses",
    description: "Considering a personal loan for your wedding in Canada? Learn about typical costs, pros & cons, and how to apply for wedding financing that fits your budget.",
    intro: "Weddings in Canada often cost more than couples initially budget for, once venue, catering, attire, and photography are all added up. A personal loan lets you fund the wedding you want on your timeline, with a fixed monthly payment you can plan around.",
    covers: ["Venue rental and catering", "Photography and videography", "Attire, rings, and beauty services", "Flowers, decor, and entertainment"],
    considerations: [
      "Build your budget around your top 2-3 priorities first, then allocate what's left to everything else.",
      "Off-season or weekday weddings can meaningfully lower venue and vendor costs.",
      "Compare this loan's total cost against putting the same expenses on a credit card you might not pay off quickly.",
    ],
    suggestedAmountSlug: "5000",
    faqs: [
      { q: "What's the average cost of a wedding in Canada?", a: "Estimates vary by region and guest count, but many Canadian weddings range from $20,000 to $30,000 total — a personal loan is typically used to cover a portion of that, not the full cost." },
      { q: "Is it common to finance part of a wedding?", a: "Yes, many couples use a personal loan to cover specific costs like a venue deposit or photography, alongside savings and contributions from family." },
    ],
  },
  {
    slug: "vacation",
    title: "Vacation",
    description: "Dreaming of a Canadian getaway? Explore personal loans for vacations in Canada, and how to apply responsibly.",
    intro: "Sometimes the right trip comes up on a timeline that doesn't match your savings — a flight sale, a milestone anniversary, or a friend's destination wedding. A personal loan lets you book now and repay over a few months instead of missing the trip.",
    covers: ["Flights and accommodation", "Travel insurance", "Activities and excursions", "Spending money for the trip"],
    considerations: [
      "Book flights and accommodation early — prices typically rise closer to the travel date, increasing how much you need to borrow.",
      "Always get travel insurance, especially if you're financing the trip — an unexpected cancellation shouldn't leave you repaying a loan for a trip you didn't take.",
      "Set a repayment plan that finishes before you're tempted to book your next trip.",
    ],
    suggestedAmountSlug: "2000",
    faqs: [
      { q: "Is it a good idea to finance a vacation?", a: "It depends on your priorities — some prefer to save specifically for travel, while others use a personal loan to book a time-sensitive trip and repay it on a fixed schedule. Compare the loan's cost against the value you place on the trip." },
      { q: "Can I get approved for a vacation loan quickly?", a: "Yes — most applicants get a decision within minutes, which works well for time-sensitive flight sales or deposits." },
    ],
  },
  {
    slug: "utility-bills",
    title: "Utility Bills",
    description: "Canadians facing high utility bills can explore personal loans as a solution. Learn about typical costs, loan amounts, and responsible borrowing tips.",
    intro: "A spike in heating costs during a cold winter, or falling behind after an unexpected expense, can leave utility bills piling up fast. A personal loan can bring your account current and prevent a disconnection while you get back on track.",
    covers: ["Overdue electricity or gas bills", "Heating costs during peak season", "Water and municipal utility bills", "Reconnection fees after a disconnection"],
    considerations: [
      "Contact your utility provider first — many offer payment plans or arrears programs before you need to borrow.",
      "Check for provincial energy assistance programs, which can help low-income households with heating costs specifically.",
      "A reconnection fee is often avoidable if you arrange payment before service is actually cut off.",
    ],
    suggestedAmountSlug: "600",
    faqs: [
      { q: "Do utility companies in Canada offer payment plans?", a: "Most major utility providers offer arrears or equal-payment plans — it's worth contacting them directly before taking on a loan, as this may resolve the issue at no extra cost." },
      { q: "How fast can a loan help me avoid a utility disconnection?", a: "Most applicants get a decision within minutes and funds within 24 hours — contact your utility provider immediately to confirm the deadline before you're disconnected." },
    ],
  },
  {
    slug: "tuition",
    title: "Tuition",
    description: "Explore using personal loans for tuition in Canada. Learn about costs, pros & cons, and how to apply for student financing.",
    intro: "Tuition deadlines don't always align with when student loan disbursements or family contributions arrive. A personal loan can bridge that gap so you don't risk a late fee or a hold on registration while other funding is still in process.",
    covers: ["College or university tuition", "Textbooks and course materials", "Program or lab fees", "Professional development courses"],
    considerations: [
      "Check with your school's financial aid office about deadlines and installment plans before assuming you need to borrow the full amount.",
      "Compare this loan's rate against a government student loan, which is typically the lower-cost option if you're eligible.",
      "A personal loan can be a bridge for a single term, but isn't usually the best tool for funding a full multi-year program.",
    ],
    suggestedAmountSlug: "2000",
    faqs: [
      { q: "Should I use a personal loan or a student loan for tuition?", a: "A government student loan is generally the lower-cost option if you qualify — a personal loan is better suited as a short-term bridge for a specific gap, like a late disbursement." },
      { q: "Can a personal loan cover a single semester's tuition?", a: "Yes — many students use a personal loan to bridge a single term's costs rather than fund an entire program." },
    ],
  },
  {
    slug: "travel-emergency",
    title: "Travel Emergency",
    description: "Need to travel urgently for a family emergency? Compare emergency travel loans in Canada. Fast approval when you need it most.",
    intro: "A family emergency, a medical situation abroad, or a sudden need to travel doesn't come with advance notice or a flexible budget. A personal loan can get you on a flight fast, with funding that's typically available within a day.",
    covers: ["Last-minute flights", "Emergency accommodation", "Ground transportation and visas", "Costs related to the emergency itself (medical, funeral, etc.)"],
    considerations: [
      "Check your existing travel or credit card insurance — some policies cover emergency travel costs you may not realize you have.",
      "Last-minute flights are expensive; book through the airline directly where possible to avoid third-party booking fees.",
      "Keep all receipts if the trip is related to a family medical emergency — some costs may be tax-deductible.",
    ],
    suggestedAmountSlug: "1500",
    faqs: [
      { q: "How fast can I get a loan for emergency travel?", a: "Most applicants receive a decision within minutes, and funds are typically deposited within 24 hours — some lenders offer same-day funding for urgent situations." },
      { q: "Does travel insurance cover emergency trip costs?", a: "Some credit cards and travel policies include emergency travel benefits — check your existing coverage before assuming you need to cover the full cost yourself." },
    ],
  },
  {
    slug: "tax-bills",
    title: "Tax Bills",
    description: "Don't let tax season stress you out! Learn how personal loans can help you manage your tax bill in Canada, with pros, cons, and application tips.",
    intro: "Owing more than expected at tax time can be stressful, especially with penalties and interest accruing on any unpaid balance. A personal loan can cover your tax bill in full, often at a lower rate than the CRA charges on an unpaid balance.",
    covers: ["Outstanding personal income tax owed", "CRA interest and penalty charges", "Self-employment or freelance tax bills", "Provincial tax balances"],
    considerations: [
      "Compare this loan's APR against the CRA's current prescribed interest rate on unpaid balances — a lower-rate loan can save money.",
      "The CRA does offer payment arrangements directly — worth calling before assuming a loan is your only option.",
      "If this happens annually, consider setting aside a percentage of income throughout the year to avoid repeat borrowing.",
    ],
    suggestedAmountSlug: "2000",
    faqs: [
      { q: "Is it worth borrowing to pay a tax bill instead of using a CRA payment plan?", a: "It depends on the rates involved — compare the loan's APR against the CRA's current interest rate on unpaid balances, and factor in that a loan gives you one predictable monthly payment." },
      { q: "Can I get funded fast enough to meet a tax deadline?", a: "Most applicants get a decision within minutes and funds within 24 hours, which is typically fast enough to meet a payment deadline once you know your balance owing." },
    ],
  },
  {
    slug: "rent-payment",
    title: "Rent Payment",
    description: "Unexpected rent due? Explore personal loans for rent payment in Canada. Learn about costs, options, pros & cons, and how to apply responsibly.",
    intro: "Missing a rent payment risks late fees, a strained relationship with your landlord, or worse. If an unexpected expense has left you short, a personal loan can cover rent on time while you recover financially.",
    covers: ["Current or overdue rent", "Last month's rent deposit on a new unit", "Late fees already accrued", "Moving costs if you need to relocate"],
    considerations: [
      "Talk to your landlord before the due date — many are willing to work out a short extension, which costs nothing.",
      "Check if your province or municipality offers a rent bank or emergency housing assistance program.",
      "Borrow only enough to cover the shortfall, not a full month if you only need to bridge a partial gap.",
    ],
    suggestedAmountSlug: "1200",
    faqs: [
      { q: "What is a rent bank and is it available in my province?", a: "Rent banks are short-term, often interest-free loan programs run by municipalities or non-profits to help tenants avoid eviction — availability varies by city and province, so it's worth checking before taking a personal loan." },
      { q: "How fast can I get funded to make a rent payment?", a: "Most applicants get a decision within minutes and funds within 24 hours, which can help you pay rent before late fees apply." },
    ],
  },
  {
    slug: "prescription-medication",
    title: "Prescription Medication",
    description: "Need help paying for prescriptions? Compare personal loans for medication costs in Canada. Cover drug expenses until fully insured.",
    intro: "Medications not fully covered by insurance can be a genuine barrier to starting or continuing necessary treatment. A personal loan can cover the cost upfront so a gap in coverage doesn't mean a gap in care.",
    covers: ["Prescription costs not covered by insurance", "Specialty or long-term medications", "Medical supplies related to treatment", "Costs while waiting for insurance approval"],
    considerations: [
      "Ask your pharmacist about generic alternatives, which can cost significantly less with the same active ingredient.",
      "Check manufacturer patient assistance programs, which sometimes offer free or reduced-cost medication for eligible patients.",
      "If cost is a barrier to an ongoing prescription, talk to your doctor — there may be a comparable, lower-cost option.",
    ],
    suggestedAmountSlug: "600",
    faqs: [
      { q: "Can a personal loan cover ongoing prescription costs?", a: "Yes, though for recurring medication costs it's worth also exploring insurance appeals, generic alternatives, or manufacturer assistance programs, since a loan is better suited to a one-time gap than an ongoing expense." },
      { q: "How quickly can I get funded to start a necessary medication?", a: "Most applicants receive a decision within minutes and funds within 24 hours, which can help avoid a delay in starting necessary treatment." },
    ],
  },
  {
    slug: "phone-electronics-repair",
    title: "Phone & Electronics Repair",
    description: "Need to fix your phone or laptop? Compare personal loans for electronics repair costs in Canada. Quick approval for device repairs.",
    intro: "A cracked phone screen, a laptop that won't turn on, or a broken tablet can disrupt work and daily life fast. A personal loan covers the repair or replacement cost immediately so you're not without an essential device for long.",
    covers: ["Phone screen and battery repairs", "Laptop and computer repairs", "Tablet and device replacement", "Data recovery services"],
    considerations: [
      "Compare repair costs against replacement — sometimes a used or refurbished device costs about the same as a major repair.",
      "Check if the device is still under manufacturer or retailer warranty before paying out of pocket.",
      "Back up your data regularly; a repair sometimes requires a factory reset that can lose unsaved files.",
    ],
    suggestedAmountSlug: "500",
    faqs: [
      { q: "Is it cheaper to repair or replace a broken phone?", a: "It depends on the device and damage — a screen repair is often $100-$300, while major damage can approach the cost of a refurbished replacement device. Get a repair quote before deciding." },
      { q: "How fast can I get funded for an urgent device repair?", a: "Most applicants get a decision within minutes and funds within 24 hours, which usually fits within the timeline of getting a device repaired." },
    ],
  },
];

export function getLoanPurpose(slug: string): LoanPurpose | undefined {
  return LOAN_PURPOSES.find((p) => p.slug === slug);
}
