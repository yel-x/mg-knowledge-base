import { mockArticles } from "@/data/mockArticles";
import type { KnowledgeArticle } from "@/types/knowledge";

export function searchKnowledge(query: string, articles: KnowledgeArticle[] = mockArticles) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return articles;
  return articles.filter((article) => [article.title, article.description, article.category, article.contentType, ...article.tags, ...article.keywords].join(" ").toLowerCase().includes(normalizedQuery));
}
