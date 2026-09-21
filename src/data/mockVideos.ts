import type { DemoVideo } from "@/types/knowledge";

export const mockVideos: DemoVideo[] = [
  { id: "video-create-pr", title: "Create PR Tutorial", description: "Demo video placeholder for a purchase requisition walkthrough.", category: "procurement", duration: "04:32", relatedArticleId: "create-pr" },
  { id: "video-create-po", title: "Create PO Tutorial", description: "Demo video placeholder for a purchase order walkthrough.", category: "procurement", duration: "05:18", relatedArticleId: "create-po" },
  { id: "video-inventory", title: "Physical Inventory Tutorial", description: "Demo video placeholder for an inventory process walkthrough.", category: "inventory", duration: "06:11", relatedArticleId: "physical-inventory" },
  { id: "video-profit-center", title: "Profit Center Tutorial", description: "Demo video placeholder for a profit center walkthrough.", category: "master-data", duration: "03:45", relatedArticleId: "profit-center-extension" },
  { id: "video-material", title: "Material Extension Tutorial", description: "Demo video placeholder for material master maintenance.", category: "master-data", duration: "04:06", relatedArticleId: "material-extension" },
];
