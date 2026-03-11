import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { Calculator, ArrowRight, Check, Camera, Brain, FileCheck, Shield, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "LHDN Tax Tracking App Malaysia | Finpersona",
  description: "Automatically track all 11 LHDN tax relief categories year-round. Snap receipts, let AI categorize them, and arrive at tax season fully prepared. Never miss a deduction.",
  keywords: ["lhdn tax relief tracker", "malaysia tax tracking app", "income tax tracker malaysia", "borang be tracker", "finpersona tax"],
  openGraph: {
    title: "LHDN Tax Tracking App Malaysia | Finpersona",
    description: "Automatically track all 11 LHDN tax relief categories. Snap receipts, let AI categorize them, never miss a deduction.",
    url: "https://finpersona.com/features/tax-tracking",
  },
};

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com";

const features = [
  { icon: Camera, title: "Receipt scanning", desc: "Point your camera at any receipt. Our AI extracts merchant, amount, date, and category in seconds." },
  { icon: Brain, title: "AI categorization", desc: "Every receipt is automatically matched to the correct LHDN tax relief category. No guesswork needed." },
  { icon: BarChart3, title: "Real-time tax estimate", desc: "See your estimated tax payable and projected savings update live as you track more receipts." },
  { icon: FileCheck, title: "ezHASiL-ready export", desc: "When filing time comes, export a clean summary ready to enter into MyTax or Borang BE." },
  { icon: Shield, title: "Always LHDN-compliant", desc: "Our tax rules are updated every time LHDN publishes changes. You're always working with the latest." },
  { icon: Check, title: "Covers all 11 categories", desc: "Medical, education, lifestyle, EPF, SSPN, EV charging, breastfeeding — every category tracked." },
];

const reliefCategories = [
  { name: "Medical & Health", limit: "RM 10,000" },
  { name: "Lifestyle", limit: "RM 2,500" },
  { name: "Education Fees", limit: "RM 7,000" },
  { name: "Sports Equipment", limit: "RM 1,000" },
  { name: "Childcare Fees", limit: "RM 3,000" },
  { name: "SSPN Savings", limit: "RM 8,000" },
  { name: "Life Insurance & EPF", limit: "RM 7,000" },
  { name: "Domestic Tourism", limit: "RM 1,000" },
  { name: "EV Charging", limit: "RM 2,500" },
  { name: "Breastfeeding Equipment", limit: "RM 1,000" },
  { name: "Supporting Equipment", limit: "RM 6,000" },
];

const steps = [
  { n: "1", title: "Snap your receipts", desc: "Pharmacy? Laptop? Gym? Just take a photo after every qualifying purchase throughout the year." },
  { n: "2", title: "AI handles the rest", desc: "Finpersona reads and categorizes your receipt instantly, matching it to the right LHDN relief category." },
  { n: "3", title: "File with confidence", desc: "Your full year of deductions is organized and ready. No last-minute scrambling at tax time." },
];

export default function TaxTrackingPage() {
  return (
    <PageShell>
      <div className="bg-white">
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(124,58,237,0.06),transparent)]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Tax Tracking
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              Never miss a<br />
              <span className="gradient-text">tax deduction again.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Finpersona tracks all 11 LHDN tax relief categories automatically throughout the year. Snap a receipt and we handle everything else.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`${appUrl}?auth=register`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl transition-colors">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/tax-relief" className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium rounded-xl transition-colors">
                See all relief categories
              </Link>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-10 border-y border-gray-100 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-6 text-center">
            {[
              { v: "11", l: "LHDN categories tracked" },
              { v: "RM 1,000–3,000", l: "average savings per user" },
              { v: "100%", l: "LHDN compliant" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl sm:text-3xl font-bold gradient-text">{s.v}</p>
                <p className="text-sm text-gray-500 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">How tax tracking works</h2>
              <p className="text-gray-500">Designed so you never have to think about it.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.n} className="bg-gray-50 rounded-2xl p-7">
                  <div className="w-9 h-9 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center mb-5">
                    {s.n}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">What's included</h2>
              <p className="text-gray-500">Everything you need to track taxes without being a tax expert.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Relief categories grid */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">All 11 LHDN relief categories</h2>
              <p className="text-gray-500">Finpersona tracks every single one automatically.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {reliefCategories.map((c) => (
                <div key={c.name} className="border border-gray-100 rounded-xl p-4 hover:border-violet-100 transition-colors">
                  <p className="text-sm font-medium text-gray-900 mb-0.5">{c.name}</p>
                  <p className="text-xs text-violet-600 font-semibold">Up to {c.limit}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/tax-relief" className="text-sm text-violet-600 hover:text-violet-700 font-medium inline-flex items-center gap-1">
                Full guide to LHDN tax relief <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-950">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start tracking your taxes today.</h2>
            <p className="text-white/50 mb-8">Free to use. No credit card required.</p>
            <a href={`${appUrl}?auth=register`} className="inline-flex items-center gap-2 px-7 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl transition-colors">
              Create your account <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
