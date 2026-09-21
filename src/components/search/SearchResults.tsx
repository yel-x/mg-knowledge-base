"use client";
import { useState } from "react";
import SearchBar from "@/components/search/SearchBar";
import ArticleCard from "@/components/knowledge/ArticleCard";
import EmptyState from "@/components/ui/EmptyState";
import { searchKnowledge } from "@/lib/search/searchService";
import type { KnowledgeArticle } from "@/types/knowledge";
export default function SearchResults({ initialQuery, articles }: { initialQuery: string; articles: KnowledgeArticle[] }) { const [type, setType] = useState("All types"); const results = searchKnowledge(initialQuery, articles).filter((article) => type === "All types" || article.contentType === type); return <div className="space-y-6"><SearchBar initialValue={initialQuery} /><div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-[#687981]">{results.length} result{results.length === 1 ? "" : "s"} found</p><select value={type} onChange={(event) => setType(event.target.value)} className="h-10 rounded-lg border border-[#cbd7dc] bg-white px-3 text-sm outline-none"><option>All types</option><option>Process Guide</option><option>Quick Guide</option><option>Troubleshooting</option><option>Reference</option></select></div>{results.length ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{results.map((article) => <ArticleCard key={article.id} article={article} />)}</div> : <EmptyState title="No knowledge articles found." description="Try searching for PR, PO, Inventory, Profit Center, or Supplier." />}</div>; }
