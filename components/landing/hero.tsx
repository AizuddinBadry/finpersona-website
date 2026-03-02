"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface HeroProps {
  onGetStarted: () => void;
  dict: ReturnType<typeof getDictionary>;
}

export function Hero({ onGetStarted, dict }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 shadow-sm">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-indigo-700 font-medium">
                {dict.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              {dict.hero.headline}{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{dict.hero.headlineHighlight}</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-xl text-gray-600 max-w-xl leading-relaxed">
              {dict.hero.subtext}
            </p>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{dict.hero.savedAmount}</span>
                <span className="text-gray-600 text-sm sm:text-base">{dict.hero.savedLabel}</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{dict.hero.receiptsAmount}</span>
                <span className="text-gray-600 text-sm sm:text-base">{dict.hero.receiptsLabel}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" onClick={onGetStarted} className="w-full sm:w-auto group bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-lg shadow-indigo-500/30">
                {dict.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="xl" variant="outline" asChild className="w-full sm:w-auto border-gray-300 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                <a href="#how-it-works">{dict.hero.ctaSecondary}</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <p className="text-xs text-gray-500">
              {dict.hero.trustLine}
            </p>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative lg:pl-8 mt-8 lg:mt-0">
            <div className="relative">
              {/* Subtle Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200/40 via-blue-200/40 to-purple-200/40 rounded-3xl blur-3xl opacity-60" />

              {/* Dashboard Mockup - Glassmorphism */}
              <div className="relative backdrop-blur-xl bg-white/70 border border-gray-200/50 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-gray-900/10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Good morning</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900">Your Tax Dashboard</p>
                  </div>
                  <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100/80 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-gray-700 font-medium">
                    {new Date().getFullYear()}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="backdrop-blur-sm bg-gradient-to-br from-gray-50/80 to-gray-100/50 rounded-xl p-2 sm:p-4 border border-gray-200/50">
                    <p className="text-[10px] sm:text-xs text-gray-500 mb-1 truncate">{dict.hero.annualIncome}</p>
                    <p className="text-sm sm:text-xl font-bold text-gray-900 truncate">RM 84,000</p>
                  </div>
                  <div className="backdrop-blur-sm bg-gradient-to-br from-orange-50/80 to-orange-100/50 rounded-xl p-2 sm:p-4 border border-orange-200/50">
                    <p className="text-[10px] sm:text-xs text-orange-600 mb-1 truncate">{dict.hero.taxPayable}</p>
                    <p className="text-sm sm:text-xl font-bold text-orange-600 truncate">RM 3,450</p>
                  </div>
                  <div className="backdrop-blur-sm bg-gradient-to-br from-indigo-50/80 to-blue-100/50 rounded-xl p-2 sm:p-4 border border-indigo-200/50">
                    <p className="text-[10px] sm:text-xs text-indigo-600 mb-1 truncate">{dict.hero.taxSavings}</p>
                    <p className="text-sm sm:text-xl font-bold text-indigo-600 truncate">RM 1,240</p>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-2 gap-2">
                      <span className="text-gray-600 font-medium truncate">{dict.hero.medicalHealth}</span>
                      <span className="text-gray-900 font-semibold whitespace-nowrap text-xs sm:text-sm">RM 4,200 / RM 10,000</span>
                    </div>
                    <div className="h-2.5 bg-gray-200/60 rounded-full overflow-hidden backdrop-blur-sm">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full shadow-sm" style={{ width: "42%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-2 gap-2">
                      <span className="text-gray-600 font-medium truncate">{dict.hero.lifestyle}</span>
                      <span className="text-gray-900 font-semibold whitespace-nowrap text-xs sm:text-sm">RM 2,100 / RM 2,500</span>
                    </div>
                    <div className="h-2.5 bg-gray-200/60 rounded-full overflow-hidden backdrop-blur-sm">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-sm" style={{ width: "84%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-2 gap-2">
                      <span className="text-gray-600 font-medium truncate">{dict.hero.education}</span>
                      <span className="text-gray-900 font-semibold whitespace-nowrap text-xs sm:text-sm">RM 1,500 / RM 7,000</span>
                    </div>
                    <div className="h-2.5 bg-gray-200/60 rounded-full overflow-hidden backdrop-blur-sm">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-sm" style={{ width: "21%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-500/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}