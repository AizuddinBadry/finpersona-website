"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Receipt, Users } from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface HeroProps {
  dict: ReturnType<typeof getDictionary>;
}

export function Hero({ dict }: HeroProps) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-[#07081A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,58,237,0.25),transparent)]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">{dict.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              {dict.hero.headline}{" "}
              <span className="italic gradient-text">{dict.hero.headlineHighlight}</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/60 max-w-lg leading-relaxed">
              {dict.hero.subtext}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-2xl font-bold text-white">{dict.hero.stat1Amount}</p>
                <p className="text-sm text-white/50">{dict.hero.stat1Label}</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">{dict.hero.stat2Amount}</p>
                <p className="text-sm text-white/50">{dict.hero.stat2Label}</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">{dict.hero.stat3Amount}</p>
                <p className="text-sm text-white/50">{dict.hero.stat3Label}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="group bg-violet-600 hover:bg-violet-700 text-white border-0 h-11 px-6 text-sm font-medium"
              >
                <a href={`${appUrl}?auth=register`}>
                  {dict.hero.ctaPrimary}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/15 bg-white/5 hover:bg-white/10 text-white hover:text-white h-12 px-6 text-base backdrop-blur-sm"
              >
                <a href="#how-it-works">{dict.hero.ctaSecondary}</a>
              </Button>
            </div>

            <p className="text-xs text-white/35">{dict.hero.trustLine}</p>
          </div>

          {/* Right Column — App Mockup */}
          <div className="relative lg:pl-4">
            <div className="relative">
              {/* Glow behind mockup */}
              <div className="absolute -inset-6 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-3xl blur-3xl" />

              {/* Phone frame */}
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative bg-[#0F1030] border border-white/10 rounded-[2.5rem] p-1.5 shadow-2xl shadow-violet-900/30">
                  {/* Screen */}
                  <div className="bg-[#0A0B25] rounded-[2rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-6 py-3 bg-[#0A0B25]">
                      <span className="text-white/60 text-xs font-medium">9:41</span>
                      <div className="w-24 h-5 bg-black rounded-full" />
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-5 pt-1 pb-4 bg-gradient-to-b from-[#0A0B25] to-[#0D0E30]">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-white/50 text-xs">{dict.hero.goodMorning}</p>
                          <p className="text-white font-semibold text-base">{dict.hero.dashboardTitle}</p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">FP</span>
                        </div>
                      </div>

                      {/* Balance card */}
                      <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-4 mb-4">
                        <p className="text-white/70 text-xs mb-1">{dict.hero.annualIncome}</p>
                        <p className="text-white text-2xl font-bold mb-3">RM 84,000</p>
                        <div className="flex gap-4">
                          <div>
                            <p className="text-white/60 text-[10px]">{dict.hero.taxPayable}</p>
                            <p className="text-white/90 text-sm font-semibold">RM 3,450</p>
                          </div>
                          <div className="w-px bg-white/20" />
                          <div>
                            <p className="text-white/60 text-[10px]">{dict.hero.taxSavings}</p>
                            <p className="text-emerald-300 text-sm font-semibold">RM 1,240</p>
                          </div>
                        </div>
                      </div>

                      {/* Feature chips */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-white/5 border border-white/8 rounded-xl p-2.5 text-center">
                          <Receipt className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                          <p className="text-white/60 text-[9px]">{dict.hero.medicalHealth}</p>
                          <p className="text-white text-xs font-semibold">RM 4,200</p>
                        </div>
                        <div className="bg-white/5 border border-white/8 rounded-xl p-2.5 text-center">
                          <TrendingUp className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                          <p className="text-white/60 text-[9px]">{dict.hero.budgetUsed}</p>
                          <p className="text-white text-xs font-semibold">78%</p>
                        </div>
                        <div className="bg-white/5 border border-white/8 rounded-xl p-2.5 text-center">
                          <Users className="w-4 h-4 text-pink-400 mx-auto mb-1" />
                          <p className="text-white/60 text-[9px]">{dict.hero.splitBill}</p>
                          <p className="text-white text-xs font-semibold">RM 120</p>
                        </div>
                      </div>

                      {/* Relief bars */}
                      <div className="space-y-2.5">
                        {[
                          { label: dict.hero.medicalHealth, value: 42, amount: "RM 4,200", max: "RM 10,000", color: "from-emerald-500 to-teal-500" },
                          { label: dict.hero.lifestyle, value: 84, amount: "RM 2,100", max: "RM 2,500", color: "from-amber-500 to-orange-400" },
                          { label: dict.hero.education, value: 21, amount: "RM 1,500", max: "RM 7,000", color: "from-violet-500 to-purple-500" },
                        ].map((item) => (
                          <div key={item.label}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-white/60 text-[10px] truncate">{item.label}</span>
                              <span className="text-white/80 text-[10px] shrink-0 ml-2">{item.amount} / {item.max}</span>
                            </div>
                            <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                                style={{ width: `${item.value}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl px-3 py-2 backdrop-blur-sm">
                  <p className="text-emerald-400 text-xs font-semibold">+RM 1,240 saved</p>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-violet-500/10 border border-violet-500/30 rounded-2xl px-3 py-2 backdrop-blur-sm">
                  <p className="text-violet-300 text-xs font-semibold">LHDN Compliant ✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
