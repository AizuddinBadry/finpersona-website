"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface CTAProps {
  onGetStarted: () => void;
  dict: ReturnType<typeof getDictionary>;
}

export function CTA({ onGetStarted, dict }: CTAProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 via-blue-50/30 to-purple-50/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-[128px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
          {dict.cta.title}
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          {dict.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="xl" onClick={onGetStarted} className="group bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-xl shadow-indigo-500/30">
            {dict.cta.button}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          {dict.cta.freeForever}
        </p>
      </div>
    </section>
  );
}
