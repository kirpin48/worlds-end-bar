"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
const nav = [
  { href: "/", label: { en: "Home", ka: "მთავარი" } },
  { href: "/menu", label: { en: "Menu", ka: "მენიუ" } },
  { href: "/events", label: { en: "Events", ka: "ღონისძიებები" } },
  { href: "/gallery", label: { en: "Gallery", ka: "გალერეა" } },
  { href: "/about", label: { en: "About Us", ka: "ჩვენს შესახებ" } }
];
export default function Header() {
  const pathname = usePathname();
  const search = useSearchParams();
  const lang = (search.get("lang") || "en");
  const [open, setOpen] = useState(false);
  const withLang = (href) => `${href}${href.includes("?") ? "&" : "?"}lang=${lang}`;
  const switchLangHref = (l) => {
    const params = new URLSearchParams(search.toString());
    params.set("lang", l);
    return `${pathname}?${params.toString()}`;
  };
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur border-b border-white/10">
      <div className="container flex items-center justify-between h-14">
        <Link href={withLang("/")} className="font-bold text-lg flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-6 w-6" />
          World&apos;s End Bar
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <Link key={item.href} href={withLang(item.href)} className={`nav-link ${pathname === item.href ? "text-brand-yellow" : ""}`}>
              {item.label[lang]}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <Link href={switchLangHref("en")} className={`nav-link ${lang==="en"?"text-brand-yellow":""}`}>EN</Link>
            <span className="opacity-50">/</span>
            <Link href={switchLangHref("ka")} className={`nav-link ${lang==="ka"?"text-brand-yellow":""}`}>KA</Link>
          </div>
          <Link href={withLang("/#reserve")} className="btn btn-primary">Reserve</Link>
        </nav>
        <button className="md:hidden btn btn-ghost" onClick={()=>setOpen(!open)} aria-label="Menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-brand-dark/95">
          <div className="container py-3 flex flex-col gap-3">
            {nav.map(item => (
              <Link key={item.href} href={withLang(item.href)} className="nav-link" onClick={()=>setOpen(false)}>
                {item.label[lang]}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <Link href={switchLangHref("en")} className={`nav-link ${lang==="en"?"text-brand-yellow":""}`}>EN</Link>
              <Link href={switchLangHref("ka")} className={`nav-link ${lang==="ka"?"text-brand-yellow":""}`}>KA</Link>
            </div>
            <Link href={withLang("/#reserve")} className="btn btn-primary">Reserve</Link>
          </div>
        </div>
      )}
    </header>
  );
}
