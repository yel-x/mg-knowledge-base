import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mockCategories } from "@/data";
import CategoryCard from "@/components/knowledge/CategoryCard";
export default function KnowledgePage() { return <div className="space-y-8"><div><p className="eyebrow">Mary Grace library</p><h1 className="mt-2 text-3xl font-semibold">Knowledge</h1><p className="mt-3 max-w-2xl text-[#687981]">Browse sample process guides, quick references, troubleshooting entries, and video tutorials.</p></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{mockCategories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div><Link href="/search" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e6870]">Search all knowledge <ArrowRight size={16} /></Link></div>; }
