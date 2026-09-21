import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { KnowledgeArticle } from "@/types/knowledge";

export default function ArticleCard({ article, compact = false }: { article: KnowledgeArticle; compact?: boolean }) {
  return <Link href={`/articles/${article.slug}`} className={`group block rounded-xl border border-[#dbe2e7] bg-white p-5 shadow-[0_2px_8px_rgba(20,45,58,0.03)] transition hover:-translate-y-0.5 hover:border-[#8bbec0] hover:shadow-md ${compact ? "p-4" : ""}`}><div className="mb-4 flex items-start justify-between gap-3"><span className="rounded-md bg-[#e8f3f1] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1e6870]">{article.contentType}</span><ArrowUpRight size={17} className="text-[#9aaab1] transition group-hover:text-[#1e6870]" /></div><h3 className="text-base font-semibold leading-snug text-[#16212b]">{article.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-[#687981]">{article.description}</p><div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[#71818a]"><span className="font-semibold capitalize text-[#1e6870]">{article.category.replace("-", " ")}</span><span className="text-[#c4ced2]">•</span><span className="flex items-center gap-1"><CalendarDays size={13} />{article.lastUpdated}</span></div></Link>;
}
