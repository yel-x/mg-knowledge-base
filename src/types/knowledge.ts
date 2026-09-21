export type CategorySlug = "procurement" | "inventory" | "master-data" | "finance" | "troubleshooting" | "quick-guides" | "videos";
export type ContentType = "Process Guide" | "Quick Guide" | "Troubleshooting" | "Reference" | "Video";
export type ArticleStep = { title: string; description: string; tip?: string; warning?: string };
export type KnowledgeArticle = {
  id: string; title: string; slug: string; description: string; category: CategorySlug; contentType: ContentType;
  status: "DEMO CONTENT"; lastUpdated: string; tags: string[]; keywords: string[];
  purpose?: string; prerequisites?: string[]; steps?: ArticleStep[];
  commonErrors?: { title: string; description: string }[]; relatedArticleIds?: string[]; videoId?: string;
};
export type KnowledgeCategory = { slug: CategorySlug; name: string; description: string; icon: string };
export type DemoVideo = { id: string; title: string; description: string; category: CategorySlug; duration: string; relatedArticleId?: string };
