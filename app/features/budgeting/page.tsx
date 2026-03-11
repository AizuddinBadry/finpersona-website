import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { PieChart, ArrowRight, Check, Bell, TrendingDown, Layers, RefreshCw, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Budgeting App Malaysia | Finpersona",
  description: "Set monthly budgets, track spending by category, and get AI alerts before you overspend. Finpersona's smart budgeting keeps your finances on track effortlessly.",
  keywords: ["budgeting app malaysia", "personal budget tracker", "smart budgeting", "finpersona budgeting", "monthly budget malaysia"],
  openGraph: {
    title: "Smart Budgeting App Malaysia | Finpersona",
    description: "Set monthly budgets, track spending by category, and get AI alerts before you overspend.",
    url: "https://finpersona.com/features/budgeting",
  },
};

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com";

const features = [
  { icon: Layers, title: "Category budgets", desc: "Set separate monthly limits for food, transport, entertainment, health, and more." },
  { icon: Bell, title: "AI overspend alerts", desc: "Get notified the moment you're trending over budget — before the month ends." },
  { icon: TrendingDown, title: "Spend trends", desc: "See how your spending changes month to month with clear visual charts." },
  { icon: Target, title: "Budget goals", desc: "Set a savings target and watch your progress in real time throughout the month." },
  { icon: RefreshCw, title: "Auto carry-over", desc: "Unspent budget rolls over (or resets) based on your preference each month." },
  { icon: Check, title: "Instant categorization", desc: "Every transaction is auto-categorized the moment it's added. No manual tagging." },
];

const steps = [
  { n: "1", title: "Set your budget", desc: "Enter monthly limits per category. Takes two minutes to set up." },
  { n: "2", title: "Track automatically", desc: "Every expense you log or scan is matched against your budget in real time." },
  { n: "3", title: "Adjust and improve", desc: "See where you're overspending and shift limits. Get smarter every month." },
];

const categories = ["Food & Dining", "Transport", "Groceries", "Entertainment", "Health", "Shopping", "Education", "Travel", "Utilities", "Personal Care"];

export default function BudgetingPage() {
  return (
    <PageShell>
      <div className="bg-white">
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(59,130,246,0.05),transparent)]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              <PieChart className="w-4 h-4" />
              Smart Budgeting
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              A budget that<br />
              <span className="gradient-text">actually sticks.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Set monthly limits, track every ringgit as it's spent, and get smart alerts before you go over. Finpersona turns good intentions into real habits.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`${appUrl}?auth=register`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl transition-colors">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/#features" className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium rounded-xl transition-colors">
                See all features
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">How budgeting works</h2>
              <p className="text-gray-500">Set up once. Runs automatically after that.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.n} className="bg-white rounded-2xl p-7 border border-gray-100">
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
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Built for real life</h2>
              <p className="text-gray-500">Not a spreadsheet. A system that keeps up with you.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget categories */}
        <section className="py-20 bg-violet-50/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">10+ spending categories, ready to go</h2>
            <p className="text-gray-500 mb-10">Pre-built categories tailored to Malaysian spending habits.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((c) => (
                <span key={c} className="px-4 py-2 bg-white border border-gray-100 rounded-full text-sm text-gray-600 font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-950">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start budgeting smarter today.</h2>
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
