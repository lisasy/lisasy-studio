/**
 * Product / Software project data
 * Grouped by year range with company and individual projects
 */

const productGroups = [
  {
    year: "2026",
    company: null,
    projects: [
      { name: "Dots", tag: "personal", slug: "dots" },
    ]
  },
  {
    year: "2025-26",
    company: "Coinbase",
    companyDetail: "Coinbase · Staff Product Designer (IC6) on Foundations & Onchain",
    thumbnail: "/images/product/coinbase.png",
    projects: [
      { name: "Prime Onchain Wallet", tag: "work", slug: "prime-onchain-wallet" },
      { name: "Coinbase Research & AI Tooling", tag: "work", slug: "coinbase-research-ai-tooling" },
    ]
  },
  {
    year: "2023-25",
    company: "Instagram",
    companyDetail: "Instagram · Staff Product Designer (IC6) on Creators Team",
    thumbnail: "/images/home/instagram.png",
    projects: [
      { name: "Creator Bonuses", tag: "work", slug: "creator-bonuses" },
      { name: "Creator Fandom", tag: "work", slug: "creator-fandom" },
      { name: "Collaborative Posts", tag: "work", slug: "collaborative-posts" },
      { name: "Creator AI Tooling Concepts", tag: "work", slug: "creator-ai-tooling-concepts" },
    ]
  },
  {
    year: "2021-22",
    company: "Meta: New Product Experimentation",
    companyDetail: "Meta · Staff Product Designer (IC6) on New Product Experimentation",
    thumbnail: "/images/home/meta.png",
    projects: [
      { name: "Actus", tag: "work", slug: "actus" },
    ]
  },
];

export function getProductGroups() {
  return productGroups;
}

export function getFilteredProductGroups(filter = "all") {
  if (filter === "all") return productGroups;

  return productGroups
    .map(group => ({
      ...group,
      projects: group.projects.filter(p => p.tag === filter),
    }))
    .filter(group => group.projects.length > 0);
}

export function getTotalProjectCount(filter = "all") {
  const groups = getFilteredProductGroups(filter);
  return groups.reduce((sum, group) => sum + group.projects.length, 0);
}
