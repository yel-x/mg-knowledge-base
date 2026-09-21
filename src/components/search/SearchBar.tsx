"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ initialValue = "", large = false }: { initialValue?: string; large?: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState(initialValue);
  const submit = (event: React.FormEvent) => { event.preventDefault(); router.push(`/search${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`); };
  return <form onSubmit={submit} className="relative w-full"><Search className={`absolute left-4 top-1/2 -translate-y-1/2 text-[#80919a] ${large ? "size-5" : "size-4"}`} /><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search SAP knowledge" placeholder="Try: Create PR, Profit Center, PID, approved PR..." className={`w-full rounded-xl border border-[#cbd7dc] bg-white pl-12 pr-4 text-[#16212b] shadow-sm outline-none transition focus:border-[#287782] focus:ring-4 focus:ring-[#287782]/10 ${large ? "h-16 text-base" : "h-11 text-sm"}`} /></form>;
}
