import SearchResults from "@/components/search/SearchResults";
import { mockArticles } from "@/data";
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) { const { q = "" } = await searchParams; return <div className="space-y-8"><div><p className="eyebrow">Knowledge discovery</p><h1 className="mt-2 text-3xl font-semibold">Search results</h1><p className="mt-3 text-[#687981]">Search titles, descriptions, categories, content types, tags, and SAP keywords.</p></div><SearchResults initialQuery={q} articles={mockArticles} /></div>; }
