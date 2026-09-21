import type { KnowledgeCategory } from "@/types/knowledge";

export const mockCategories: KnowledgeCategory[] = [
  { slug: "procurement", name: "Procurement", description: "Purchase requisitions, purchase orders, approvals, and purchasing processes.", icon: "package" },
  { slug: "inventory", name: "Inventory", description: "Physical inventory, stock, goods movements, and inventory processes.", icon: "boxes" },
  { slug: "master-data", name: "Master Data", description: "Material, supplier, profit center, and other master data.", icon: "database" },
  { slug: "finance", name: "Finance", description: "Financial and accounting-related procedures.", icon: "wallet" },
  { slug: "troubleshooting", name: "Troubleshooting", description: "Common SAP issues and sample troubleshooting solutions.", icon: "alert" },
  { slug: "quick-guides", name: "Quick Guides", description: "Short guides for frequently performed tasks.", icon: "zap" },
  { slug: "videos", name: "Video Tutorials", description: "Step-by-step SAP tutorial video placeholders.", icon: "play" },
];
export function getCategory(slug: string) { return mockCategories.find((category) => category.slug === slug); }
