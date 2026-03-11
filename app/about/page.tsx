import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { ArrowRight, Heart, Shield, Brain, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Finpersona | AI-First Personal Finance for Malaysians",
  description: "Learn about Finpersona — why we built Malaysia's first AI-powered personal finance and tax compliance app, our mission, and the team behind it.",
  openGraph: {
    title: "About Finpersona",
    description: "Why we built Malaysia's first AI-powered personal finance and tax compliance app.",
    url: "https://finpersona.com/about",
  },
};

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com";

const values = [
  {
    icon: Brain,
    title: "AI-first, not AI-gimmick",
    desc: "We use AI where it genuinely saves time — scanning receipts, categorizing expenses, flagging tax opportunities. Not as a feature checkbox.",
    bg: "bg-violet-50",
    color: "text-violet-600",
  },
  {
    icon: Shield,
    title: "Privacy by design",
    desc: "Your financial data is yours. We don't sell it. We don't run ads against it. We encrypt it in transit and at rest.",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: Heart,
    title: "Built for everyday Malaysians",
    desc: "Not for CFOs and accountants. For the salaried employee, the freelancer, the young family trying to save more and stress less.",
    bg: "bg-pink-50",
    color: "text-pink-600",
  },
  {
    icon: Target,
    title: "Honest about what we are",
    desc: "Finpersona is a tracking and compliance tool, not a licensed tax advisor. We always tell you when you should talk to a professional.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
];

const stats = [
  { v: "10,000+", l: "Malaysians using Finpersona" },
  { v: "RM 2M+", l: "in tax savings tracked" },
  { v: "11", l: "LHDN categories covered" },
  { v: "2024", l: "Year founded" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <div className="bg-white">
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(124,58,237,0.06),transparent)]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              We built Finpersona because<br />
              <span className="gradient-text">Malaysians deserve better.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Every year, millions of Malaysians overpay taxes, lose receipts, and stress about finances they could actually control. We wanted to fix that.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-gray-100 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="text-3xl font-bold gradient-text mb-1">{s.v}</p>
                <p className="text-sm text-gray-500">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900">Our story</h2>
            <p>
              Finpersona started with a simple frustration: tax season in Malaysia was unnecessarily painful. Receipts everywhere, no idea which ones counted, and a sinking feeling that you&apos;d missed RM 2,000 in deductions.
            </p>
            <p>
              The tools that existed were either built for businesses, required hiring an accountant, or were so complex that most people gave up. Nothing was designed for the everyday Malaysian: the salaried employee, the freelancer, the young couple figuring out their finances together.
            </p>
            <p>
              So we built Finpersona. Starting with tax tracking because that&apos;s where the money loss was most visible, and expanding into budgeting, split bills, and expense management because personal finance doesn&apos;t live in silos.
            </p>
            <p>
              Today Finpersona is used by over 10,000 Malaysians who&apos;ve collectively saved more than RM 2 million in taxes they would have otherwise missed. We&apos;re just getting started.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">What we believe</h2>
              <p className="text-gray-500">The principles that guide every decision we make.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-7">
                  <div className={`w-11 h-11 rounded-xl ${v.bg} flex items-center justify-center mb-5`}>
                    <v.icon className={`w-5 h-5 ${v.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built in Malaysia */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-4xl mb-5">🇲🇾</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Proudly built in Malaysia</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Finpersona is developed by Aexlora Sdn Bhd, a Malaysian technology company. Our team understands LHDN, knows how PCB works, and has lived through the same tax-season stress our users face. We&apos;re building for a problem we personally experienced.
            </p>
            <p className="text-sm text-gray-400">Registered in Malaysia. PDPA compliant.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-950">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join us in changing how Malaysians manage money.</h2>
            <p className="text-white/50 mb-8">Free to use. No credit card. No catch.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`${appUrl}?auth=register`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl transition-colors">
                Get started free <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-white/15 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium rounded-xl transition-colors">
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
