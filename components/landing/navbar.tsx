"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Divide, PieChart, Calculator, TrendingUp, Tag, ShieldCheck } from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface NavbarProps {
  dict: ReturnType<typeof getDictionary>;
  lang?: string;
}

const productLinks = [
  { label: "Split Bill", href: "/features/split-bill", icon: Divide, desc: "Split expenses with anyone, instantly" },
  { label: "Budgeting", href: "/features/budgeting", icon: PieChart, desc: "Monthly limits that keep you on track" },
  { label: "Tax Tracking", href: "/features/tax-tracking", icon: Calculator, desc: "Auto-track all 11 LHDN categories" },
];

const taxLinks = [
  { label: "Tax Return", href: "/tax-return", icon: TrendingUp, desc: "Maximize your LHDN refund" },
  { label: "Tax Relief", href: "/tax-relief", icon: Tag, desc: "Complete guide to all relief categories" },
  { label: "Avoid Overpaying", href: "/avoid-overpaying-tax", icon: ShieldCheck, desc: "Strategies to reduce your tax bill" },
];

function DropdownMenu({
  items,
  scrolled,
}: {
  items: { label: string; href: string; icon: React.ElementType; desc: string }[];
  scrolled: boolean;
}) {
  return (
    <div className={cn(
      "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl border shadow-lg py-2 z-50",
      scrolled ? "bg-white border-gray-100" : "bg-[#0D0B2A]/95 border-white/10 backdrop-blur-xl"
    )}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-start gap-3 px-4 py-3 transition-colors",
            scrolled ? "hover:bg-gray-50" : "hover:bg-white/5"
          )}
        >
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5",
            scrolled ? "bg-violet-50" : "bg-violet-600/20"
          )}>
            <item.icon className="w-4 h-4 text-violet-500" />
          </div>
          <div>
            <p className={cn("text-sm font-medium", scrolled ? "text-gray-900" : "text-white")}>{item.label}</p>
            <p className={cn("text-xs mt-0.5", scrolled ? "text-gray-500" : "text-white/50")}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function Navbar({ dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"product" | "tax" | null>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const taxRef = useRef<HTMLDivElement>(null);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        productRef.current && !productRef.current.contains(e.target as Node) &&
        taxRef.current && !taxRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = cn(
    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
    scrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" : "text-white/80 hover:text-white hover:bg-white/10"
  );

  const mobileLinkClass = cn(
    "block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
    scrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" : "text-white/70 hover:text-white hover:bg-white/5"
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-light.svg"
              alt="Finpersona"
              width={120}
              height={32}
              className={cn("h-48 w-auto transition-all duration-300", scrolled ? "brightness-0" : "brightness-0 invert")}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Product dropdown */}
            <div ref={productRef} className="relative">
              <button
                className={cn(linkClass, "inline-flex items-center gap-1")}
                onClick={() => setActiveDropdown(activeDropdown === "product" ? null : "product")}
                onMouseEnter={() => setActiveDropdown("product")}
              >
                Product
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", activeDropdown === "product" && "rotate-180")} />
              </button>
              {activeDropdown === "product" && (
                <div onMouseLeave={() => setActiveDropdown(null)}>
                  <DropdownMenu items={productLinks} scrolled={scrolled} />
                </div>
              )}
            </div>

            {/* Tax dropdown */}
            <div ref={taxRef} className="relative">
              <button
                className={cn(linkClass, "inline-flex items-center gap-1")}
                onClick={() => setActiveDropdown(activeDropdown === "tax" ? null : "tax")}
                onMouseEnter={() => setActiveDropdown("tax")}
              >
                Tax
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", activeDropdown === "tax" && "rotate-180")} />
              </button>
              {activeDropdown === "tax" && (
                <div onMouseLeave={() => setActiveDropdown(null)}>
                  <DropdownMenu items={taxLinks} scrolled={scrolled} />
                </div>
              )}
            </div>

            <Link href="/events" className={linkClass}>
              Events
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "hidden sm:inline-flex",
                scrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              <a href={`${appUrl}?auth=login`}>{dict.navbar.signin}</a>
            </Button>
            <Button asChild size="sm" className="bg-violet-600 hover:bg-violet-700 text-white border-0">
              <a href={`${appUrl}?auth=register`}>{dict.navbar.getStarted}</a>
            </Button>

            <button
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                scrolled ? "hover:bg-gray-100 text-gray-600" : "hover:bg-white/10 text-white/70"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={cn(
          "md:hidden backdrop-blur-xl border-b",
          scrolled ? "bg-white/95 border-gray-200" : "bg-[#0D0B2A]/95 border-purple-900/30"
        )}>
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <p className={cn("px-4 pt-2 pb-1 text-xs font-semibold uppercase tracking-widest", scrolled ? "text-gray-400" : "text-white/30")}>
              Product
            </p>
            {productLinks.map((link) => (
              <Link key={link.href} href={link.href} className={mobileLinkClass} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <p className={cn("px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-widest", scrolled ? "text-gray-400" : "text-white/30")}>
              Tax
            </p>
            {taxLinks.map((link) => (
              <Link key={link.href} href={link.href} className={mobileLinkClass} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/events" className={mobileLinkClass} onClick={() => setMobileOpen(false)}>
              Events
            </Link>
            <div className="pt-2 pb-1">
              <a href={`${appUrl}?auth=login`} className={mobileLinkClass}>
                {dict.navbar.signin}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
