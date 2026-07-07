export interface Province {
  slug: string;
  name: string;
  communityCount: string;
  majorCities: string[];
  intro: string;
  regulationNote: string;
  hasPaydaySpecificLaw: boolean;
  faqs: { q: string; a: string }[];
}

export const PROVINCES: Province[] = [
  {
    slug: "alberta",
    name: "Alberta",
    communityCount: "76+",
    majorCities: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert"],
    intro: "Alberta is home to two of Canada's largest cities, Calgary and Edmonton, alongside dozens of smaller communities across the province. Whether you're in a major centre or a smaller town, our online lender network serves Albertans the same way — approval is based on your income and credit profile, not your postal code.",
    regulationNote: "Alberta regulates payday lending provincially, setting a maximum cost of borrowing per $100 for short-term payday loans specifically. Personal installment loans like the ones in our network are governed instead by Canada's federal criminal rate of interest, capped at 35% APR as of January 2025.",
    hasPaydaySpecificLaw: true,
    faqs: [
      { q: "Are online personal loans legal in Alberta?", a: "Yes — personal installment loans are legal across Alberta and every Canadian province, subject to the federal criminal rate of interest cap of 35% APR." },
      { q: "Do I need to visit a branch to get a loan in Alberta?", a: "No — our lender network operates entirely online, so Albertans in Calgary, Edmonton, or smaller communities can apply, get approved, and receive funds without visiting a physical location." },
    ],
  },
  {
    slug: "british-columbia",
    name: "British Columbia",
    communityCount: "111+",
    majorCities: ["Vancouver", "Victoria", "Surrey", "Kelowna", "Kamloops"],
    intro: "From Vancouver's Lower Mainland to Interior communities like Kamloops and Kelowna, British Columbia's geography means many residents are far from a physical bank branch. Consumer Protection BC oversees payday lending in the province, while our network's installment loans fall under the federal criminal rate framework.",
    regulationNote: "Consumer Protection BC licenses and oversees payday lenders operating in the province, setting cost-of-borrowing limits specific to payday loans. Personal installment loans are instead governed by the federal criminal rate of interest, capped at 35% APR since January 2025.",
    hasPaydaySpecificLaw: true,
    faqs: [
      { q: "Who regulates payday and consumer lending in BC?", a: "Consumer Protection BC oversees payday lending specifically. Personal installment loans, like those in our network, are governed by the federal criminal rate of interest rather than provincial payday loan rules." },
      { q: "Can I apply from a smaller BC community, not just Vancouver or Victoria?", a: "Yes — our lender network is entirely online, so location within BC doesn't affect your ability to apply, only your provincial consumer protections." },
    ],
  },
  {
    slug: "manitoba",
    name: "Manitoba",
    communityCount: "23+",
    majorCities: ["Winnipeg", "Brandon", "Steinbach", "Thompson"],
    intro: "Winnipeg is home to well over half of Manitoba's population, but our lender network reaches communities across the province, from Brandon to Thompson in the north. Manitoba was among the first provinces to regulate payday lending, and personal installment loans here follow the same federal interest rate framework as the rest of Canada.",
    regulationNote: "Manitoba regulates payday loans provincially with its own licensing and cost-of-borrowing rules. Personal installment loans, including those in our network, instead follow the federal criminal rate of interest cap of 35% APR that applies nationwide.",
    hasPaydaySpecificLaw: true,
    faqs: [
      { q: "Does Manitoba have different loan rules than other provinces?", a: "Manitoba regulates payday loans provincially with its own cost-of-borrowing cap, but personal installment loans follow the same federal criminal rate of interest cap (35% APR) that applies nationwide." },
      { q: "Is a personal loan available in northern Manitoba communities like Thompson?", a: "Yes — since our lenders operate online, applicants throughout Manitoba can apply regardless of how far they are from Winnipeg." },
    ],
  },
  {
    slug: "new-brunswick",
    name: "New Brunswick",
    communityCount: "17+",
    majorCities: ["Saint John", "Moncton", "Fredericton", "Dieppe"],
    intro: "New Brunswick's Financial and Consumer Services Commission (FCNB) licenses and oversees payday lenders under the province's Cost of Credit Disclosure and Payday Loans Act. Personal installment loans, including those offered through our network, fall instead under the federal criminal rate of interest.",
    regulationNote: "The Financial and Consumer Services Commission (FCNB) licenses payday lenders and sets cost-of-borrowing limits under New Brunswick's Cost of Credit Disclosure and Payday Loans Act. Personal installment loans are governed separately by the federal criminal rate of interest, capped at 35% APR.",
    hasPaydaySpecificLaw: true,
    faqs: [
      { q: "What agency regulates lending in New Brunswick?", a: "The Financial and Consumer Services Commission (FCNB) licenses payday lenders and oversees consumer credit disclosure requirements in New Brunswick." },
      { q: "Is New Brunswick bilingual for loan documentation?", a: "Many lenders serving New Brunswick offer documentation in both English and French, reflecting the province's official bilingual status, though this varies by individual lender." },
    ],
  },
  {
    slug: "newfoundland-and-labrador",
    name: "Newfoundland and Labrador",
    communityCount: "22+",
    majorCities: ["St. John's", "Corner Brook", "Mount Pearl", "Grand Falls-Windsor"],
    intro: "Newfoundland and Labrador's payday lending framework is among the more recently established in Canada, with licensing and cost-of-borrowing rules overseen provincially. Beyond St. John's, our lender network reaches communities across the island and into Labrador.",
    regulationNote: "The province licenses payday lenders and sets cost-of-borrowing limits through its consumer affairs division. Personal installment loans are governed separately by the federal criminal rate of interest, capped at 35% APR since January 2025.",
    hasPaydaySpecificLaw: true,
    faqs: [
      { q: "Is payday lending regulated in Newfoundland and Labrador?", a: "Yes — the province licenses payday lenders and sets cost-of-borrowing limits, with oversight through its consumer affairs division." },
      { q: "Can residents of Labrador apply for an online loan the same as those on the island?", a: "Yes — application and approval don't depend on which part of the province you're in, since the process is entirely online." },
    ],
  },
  {
    slug: "nova-scotia",
    name: "Nova Scotia",
    communityCount: "29+",
    majorCities: ["Halifax", "Sydney", "Dartmouth", "Truro"],
    intro: "Nova Scotia's Payday Lenders Regulations, made under the Consumer Protection Act, set out licensing and cost requirements for payday lenders specifically. Halifax anchors the province's population, but our network serves communities from Cape Breton to the Annapolis Valley.",
    regulationNote: "The Payday Lenders Regulations, under Nova Scotia's Consumer Protection Act, set licensing requirements and cost limits for payday lenders in the province. Personal installment loans instead follow the federal criminal rate of interest cap of 35% APR.",
    hasPaydaySpecificLaw: true,
    faqs: [
      { q: "What law governs payday loans in Nova Scotia?", a: "The Payday Lenders Regulations, made under Nova Scotia's Consumer Protection Act, set licensing requirements and cost limits for payday lenders in the province." },
      { q: "Are personal installment loans regulated the same way as payday loans in Nova Scotia?", a: "No — personal installment loans are governed by the federal criminal rate of interest (35% APR), while payday loans specifically follow Nova Scotia's separate provincial cost caps." },
    ],
  },
  {
    slug: "nunavut",
    name: "Nunavut",
    communityCount: "7+",
    majorCities: ["Iqaluit", "Rankin Inlet", "Arviat"],
    intro: "Nunavut has no payday-loan-specific territorial legislation, and most communities are accessible only by air, with no physical bank branches in many locations. For Nunavummiut, an online personal loan can be one of the more practical borrowing options available, since approval and funding don't depend on visiting a branch.",
    regulationNote: "Without payday-loan-specific legislation in Nunavut, short-term lending falls under the same federal criminal rate of interest that governs personal installment loans, capped at 35% APR since January 2025.",
    hasPaydaySpecificLaw: false,
    faqs: [
      { q: "Are there payday loan stores in Nunavut?", a: "Traditional storefront payday lending is uncommon in Nunavut given the territory's remote, fly-in communities and lack of payday-specific legislation — online personal loans are a more commonly available option." },
      { q: "Does living in a remote Nunavut community affect loan approval?", a: "Approval is based on your income and credit profile, not your specific community, though options may be more limited than in southern Canada simply due to fewer lenders actively serving the territory." },
    ],
  },
  {
    slug: "ontario",
    name: "Ontario",
    communityCount: "130+",
    majorCities: ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London"],
    intro: "Ontario is Canada's most populous province, and our lender network reflects that scale — from Toronto and Ottawa to smaller communities across the province. Ontario's Payday Loans Act, 2008 regulates payday lenders specifically, while personal installment loans fall under the federal criminal rate framework.",
    regulationNote: "The Payday Loans Act, 2008 sets licensing requirements and cost-of-borrowing limits for payday lenders operating in Ontario. Personal installment loans are governed separately by the federal criminal rate of interest, capped at 35% APR since January 2025.",
    hasPaydaySpecificLaw: true,
    faqs: [
      { q: "What law regulates payday loans in Ontario?", a: "The Payday Loans Act, 2008 sets licensing requirements and cost-of-borrowing limits for payday lenders operating in Ontario." },
      { q: "Is a 130-community reach unusual for a lender network?", a: "Ontario's size and population density mean lender networks typically reach far more communities here than in smaller provinces, though approval criteria don't change based on which Ontario community you're in." },
    ],
  },
  {
    slug: "prince-edward-island",
    name: "Prince Edward Island",
    communityCount: "17+",
    majorCities: ["Charlottetown", "Summerside", "Stratford"],
    intro: "Prince Edward Island is Canada's smallest province by population, but our lender network still reaches 17+ communities beyond Charlottetown and Summerside. PEI's payday lending rules are overseen by the province's Consumer, Corporate and Insurance Division.",
    regulationNote: "PEI's Consumer, Corporate and Insurance Division oversees payday lender licensing and cost disclosure requirements. Personal installment loans are governed separately by the federal criminal rate of interest, capped at 35% APR since January 2025.",
    hasPaydaySpecificLaw: true,
    faqs: [
      { q: "Does PEI have its own consumer protection rules for loans?", a: "Yes — PEI's Consumer, Corporate and Insurance Division oversees payday lender licensing and cost disclosure requirements, alongside the federal criminal rate that applies to personal installment loans." },
      { q: "Is it harder to find a lender in a smaller province like PEI?", a: "Not with an online network — since applications and funding happen digitally, PEI residents have access to the same lenders as larger provinces." },
    ],
  },
  {
    slug: "quebec",
    name: "Quebec",
    communityCount: "75+",
    majorCities: ["Montreal", "Quebec City", "Laval", "Gatineau"],
    intro: "Quebec takes a stricter approach to consumer credit than any other province, capping the annual interest rate on all consumer loans — not just payday loans — well below what's permitted elsewhere in Canada, which has effectively eliminated traditional payday lending in the province. Personal installment loans remain available, priced within Quebec's stricter rate limits.",
    regulationNote: "Quebec caps interest rates on all consumer credit at a stricter rate than the federal criminal rate applied elsewhere in Canada, administered through the province's consumer protection framework. This has made traditional payday lending largely unviable in the province, though personal installment loans remain available within Quebec's limits.",
    hasPaydaySpecificLaw: false,
    faqs: [
      { q: "Why don't payday loans operate in Quebec?", a: "Quebec caps interest rates on all consumer credit at a stricter rate than the federal criminal rate applied elsewhere, which effectively makes traditional payday lending economically unviable in the province." },
      { q: "Are loan documents available in French in Quebec?", a: "Yes — Quebec's consumer protection and language laws generally require credit agreements to be available in French for Quebec consumers." },
    ],
  },
  {
    slug: "saskatchewan",
    name: "Saskatchewan",
    communityCount: "38+",
    majorCities: ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw"],
    intro: "Saskatchewan's Financial and Consumer Affairs Authority oversees payday lender licensing and cost limits in the province. Beyond Saskatoon and Regina, our network reaches 38+ communities across Saskatchewan's more rural and dispersed population.",
    regulationNote: "The Financial and Consumer Affairs Authority of Saskatchewan licenses payday lenders and sets cost-of-borrowing limits in the province. Personal installment loans are governed separately by the federal criminal rate of interest, capped at 35% APR since January 2025.",
    hasPaydaySpecificLaw: true,
    faqs: [
      { q: "What agency regulates payday lending in Saskatchewan?", a: "The Financial and Consumer Affairs Authority of Saskatchewan licenses payday lenders and sets cost-of-borrowing limits in the province." },
      { q: "Is an online lender a good option in rural Saskatchewan?", a: "Often yes — with a more dispersed population and fewer physical branches per community outside Saskatoon and Regina, an online application can be more convenient than travelling to a storefront lender." },
    ],
  },
  {
    slug: "northwest-territories",
    name: "Northwest Territories",
    communityCount: "7+",
    majorCities: ["Yellowknife", "Hay River", "Inuvik"],
    intro: "The Northwest Territories has no payday-loan-specific legislation, so short-term lending here falls under the same federal criminal rate framework as personal installment loans elsewhere in Canada. With many communities accessible only by air or seasonal ice roads, online lending removes a real logistical barrier for NWT residents.",
    regulationNote: "Without territorial payday-loan-specific legislation, lending in the Northwest Territories is governed by the federal criminal rate of interest, capped at 35% APR since January 2025 — the same framework that applies to personal installment loans across Canada.",
    hasPaydaySpecificLaw: false,
    faqs: [
      { q: "Are there physical loan storefronts in most NWT communities?", a: "Few — outside Yellowknife, most NWT communities have limited financial services on the ground, making online personal loans a practical option for many residents." },
      { q: "Does the NWT have different loan interest rate rules?", a: "No provincial-style payday loan legislation exists in the NWT, so personal loans are governed by the same federal criminal rate of interest (35% APR) as the rest of Canada." },
    ],
  },
  {
    slug: "yukon",
    name: "Yukon",
    communityCount: "6+",
    majorCities: ["Whitehorse", "Dawson City", "Watson Lake"],
    intro: "Whitehorse is home to the large majority of Yukon's population, with the remaining communities spread across a vast, sparsely populated territory. Yukon has no payday-loan-specific legislation, so personal loans here are governed by the same federal criminal rate framework that applies nationwide.",
    regulationNote: "Yukon has no territorial payday-loan-specific legislation, so lending is governed by the federal criminal rate of interest, capped at 35% APR since January 2025 — the same framework that applies to personal installment loans across Canada.",
    hasPaydaySpecificLaw: false,
    faqs: [
      { q: "How many Yukon communities does your lender network reach?", a: "Our network serves 6+ Yukon communities, including Whitehorse and smaller communities across the territory, entirely through online applications." },
      { q: "Is it harder to get a loan approved in a small territory like Yukon?", a: "No — approval is based on your income and credit profile, the same criteria used across Canada, not on the size of your territory or community." },
    ],
  },
];

export function getProvince(slug: string): Province | undefined {
  return PROVINCES.find((p) => p.slug === slug);
}
