"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AlertTriangle, Boxes, ChevronLeft, Database, FileText, Home, Menu, Package, PlayCircle, Search, Settings, Wallet, X, Zap } from "lucide-react";
import { mockCategories } from "@/data/mockCategories";

const icons = { package: Package, boxes: Boxes, database: Database, wallet: Wallet, alert: AlertTriangle, zap: Zap, play: PlayCircle };

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const navigation = [{ href: "/", label: "Home", icon: Home }, { href: "/knowledge", label: "Knowledge", icon: FileText }, ...mockCategories.map((category) => ({ href: category.slug === "troubleshooting" ? "/troubleshooting" : category.slug === "videos" ? "/videos" : `/knowledge/${category.slug}`, label: category.name, icon: icons[category.icon as keyof typeof icons] }))];
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return <div className="min-h-screen bg-[#f5f7f9] text-[#16212b]">
    <aside className={`${collapsed ? "w-[76px]" : "w-[264px]"} fixed inset-y-0 left-0 z-40 hidden border-r border-[#dbe2e7] bg-[#102733] text-white transition-[width] duration-200 lg:flex lg:flex-col`}>
      <div className={`flex h-[86px] items-center border-b border-white/10 ${collapsed ? "justify-center" : "px-6"}`}>
        <Link href="/" className="flex items-center gap-3" aria-label="Mary Grace home"><span className="grid size-10 place-items-center rounded-xl bg-[#f1c75b] text-sm font-black text-[#102733]">MG</span>{!collapsed && <span><strong className="block text-[15px] tracking-[0.2em]">MARY GRACE</strong><small className="text-xs text-[#b7c7ce]">SAP Knowledge Base</small></span>}</Link>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-6" aria-label="Primary navigation">{navigation.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${isActive(href) ? "bg-[#1e5361] text-white" : "text-[#c3d1d6] hover:bg-white/10 hover:text-white"}`} onClick={() => setMobileOpen(false)}><Icon size={18} strokeWidth={1.8} />{!collapsed && <span>{label}</span>}</Link>)}</nav>
      <div className="border-t border-white/10 p-3"><Link href="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#c3d1d6] hover:bg-white/10 hover:text-white"><Settings size={18} />{!collapsed && "Settings"}</Link><button onClick={() => setCollapsed(!collapsed)} className="mt-2 hidden w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs text-[#9fb4bc] hover:bg-white/10 lg:flex" aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>{collapsed ? <ChevronLeft className="rotate-180" size={16} /> : <><ChevronLeft size={16} /> Collapse</>}</button></div>
    </aside>
    {mobileOpen && <div className="fixed inset-0 z-50 bg-[#102733]/50 lg:hidden" onClick={() => setMobileOpen(false)}><aside className="h-full w-[280px] bg-[#102733] p-5 text-white" onClick={(event) => event.stopPropagation()}><div className="mb-8 flex items-center justify-between"><span className="text-sm font-bold tracking-[0.2em]">MARY GRACE</span><button onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X size={20} /></button></div><nav className="space-y-1" aria-label="Mobile navigation">{navigation.concat([{ href: "/settings", label: "Settings", icon: Settings }]).map(({ href, label, icon: Icon }) => <Link key={href} href={href} className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#c3d1d6] hover:bg-white/10"><Icon size={18} />{label}</Link>)}</nav></aside></div>}
    <main className={`${collapsed ? "lg:pl-[76px]" : "lg:pl-[264px]"} min-h-screen transition-[padding] duration-200`}><header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-[#dbe2e7] bg-[#f5f7f9]/95 px-5 backdrop-blur md:px-8"><div className="flex items-center gap-3"><button className="rounded-lg p-2 hover:bg-white lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu size={22} /></button><div className="hidden items-center gap-2 text-sm text-[#65757e] sm:flex"><Search size={16} /><span>Knowledge workspace</span></div></div><div className="flex items-center gap-3"><div className="hidden text-right sm:block"><p className="text-sm font-semibold">ERP Support User</p><p className="text-xs text-[#71818a]">Demo profile</p></div><div className="grid size-9 place-items-center rounded-full bg-[#d9e9e7] text-sm font-bold text-[#1e5361]">ES</div></div></header><div className="border-b border-[#ead9a9] bg-[#fff8df] px-5 py-2.5 text-center text-xs font-medium text-[#725b16] md:px-8">DEMO MODE - All knowledge articles use sample content. Verify SAP procedures before production use.</div><div className="mx-auto max-w-[1440px] px-5 py-8 md:px-8 lg:px-10">{children}</div></main>
  </div>;
}
