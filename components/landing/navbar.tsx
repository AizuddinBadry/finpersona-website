"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface NavbarProps {
  dict: ReturnType<typeof getDictionary>;
  lang?: string;
}

export function Navbar({ dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: dict.navbar.features, href: "#features" },
    { label: dict.navbar.tax, href: "#tax" },
    { label: dict.navbar.howItWorks, href: "#how-it-works" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-light.svg"
              alt="Finpersona"
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  scrolled
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "hidden sm:inline-flex",
                scrolled
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              <a href={`${appUrl}?auth=login`}>{dict.navbar.signin}</a>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-violet-600 hover:bg-violet-700 text-white border-0"
            >
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

      {mobileOpen && (
        <div className={cn(
          "md:hidden backdrop-blur-xl border-b",
          scrolled ? "bg-white/95 border-gray-200" : "bg-[#0D0B2A]/95 border-purple-900/30"
        )}>
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                  scrolled
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <a
                href={`${appUrl}?auth=login`}
                className={cn(
                  "block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                  scrolled
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {dict.navbar.signin}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
