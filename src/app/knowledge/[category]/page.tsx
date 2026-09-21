import { notFound } from "next/navigation";
import SearchBar from "@/components/search/SearchBar";
import CategoryBrowser from "@/components/knowledge/CategoryBrowser";
import { getCategory } from "@/data/mockCategories";
import { getArticlesByCategory } from "@/data/mockArticles";
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) { const { category: slug } = await params; const category = getCategory(slug); if (!category || slug === "videos") notFound(); const articles = getArticlesByCategory(category.slug); return <div className="space-y-8"><div><p className="eyebrow">Knowledge category</p><h1 className="mt-2 text-3xl font-semibold">{category.name}</h1><p className="mt-3 max-w-2xl text-[#687981]">{category.description}</p></div><div className="max-w-2xl"><SearchBar /></div><CategoryBrowser articles={articles} /></div>; }
