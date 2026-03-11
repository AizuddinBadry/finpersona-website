"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface CTAProps {
  dict: ReturnType<typeof getDictionary>;
}

export function CTA({ dict }: CTAProps) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com";

  return (
    <section className="py-24 relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(124,58,237,0.08),transparent)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {dict.cta.title}{" "}
          <span className="text-violet-400">{dict.cta.titleHighlight}</span>
        </h2>
        <p className="text-base text-white/50 mb-10 max-w-xl mx-auto">
          {dict.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            size="lg"
            asChild
            className="group bg-violet-600 hover:bg-violet-700 text-white border-0 h-11 px-7 text-sm font-medium"
          >
            <a href={`${appUrl}?auth=register`}>
              {dict.cta.button}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            asChild
            className="text-white/60 hover:text-white hover:bg-white/5 h-11 px-7 text-sm"
          >
            <a href="#how-it-works">{dict.cta.secondary}</a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/25">
          {dict.cta.freeForever}
        </p>
      </div>
    </section>
  );
}
