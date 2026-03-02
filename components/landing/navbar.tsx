"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface NavbarProps {
  dict: ReturnType<typeof getDictionary>;
  lang: Locale;
}

export function Navbar({ dict, lang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-light.svg"
              alt="FinPersona Logo"
              className="h-52 w-auto"
            />
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-6">
            {/* Navigation items can be added here */}
          </div>

          {/* Language Switcher & Auth Buttons */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-100/80 backdrop-blur-sm">
              <Link
                href="/"
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  lang === "en"
                    ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                EN
              </Link>
              <Link
                href="/ms"
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  lang === "ms"
                    ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                MS
              </Link>
            </div>

            {/* Mobile Language Switcher */}
            <Link
              href={lang === "en" ? "/ms" : "/"}
              className="sm:hidden p-2 rounded-lg hover:bg-gray-100/80 transition-colors"
              aria-label="Switch language"
            >
              <Languages className="w-5 h-5 text-gray-700" />
            </Link>

            <Button
              asChild
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 hidden sm:inline-flex"
            >
              <a href={`${appUrl}?auth=login`}>{dict.navbar.signin}</a>
            </Button>
            <Button asChild className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-sm">
              <a href={`${appUrl}?auth=register`}>{dict.navbar.getStarted}</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

