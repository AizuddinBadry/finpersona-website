import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { Mail, MessageSquare, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Finpersona | Get in Touch",
  description: "Have a question, feedback, or need support? Get in touch with the Finpersona team. We're based in Malaysia and happy to help.",
  openGraph: {
    title: "Contact Finpersona",
    description: "Get in touch with the Finpersona team for support, feedback, or general enquiries.",
    url: "https://finpersona.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Finpersona | Get in Touch",
    description: "Get in touch with the Finpersona team for support, feedback, or general enquiries.",
  },
  alternates: {
    canonical: "https://finpersona.com/contact",
  },
};

const contacts = [
  {
    icon: MessageSquare,
    title: "General enquiries",
    desc: "Questions about Finpersona, partnerships, or anything else.",
    action: "hello@finpersona.com",
    href: "mailto:hello@finpersona.com",
    bg: "bg-violet-50",
    color: "text-violet-600",
  },
  {
    icon: Mail,
    title: "Support",
    desc: "Having trouble with the app? Our support team responds within 1 business day.",
    action: "support@finpersona.com",
    href: "mailto:support@finpersona.com",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: FileText,
    title: "Legal & privacy",
    desc: "Data requests, PDPA inquiries, or legal matters.",
    action: "privacy@finpersona.com",
    href: "mailto:privacy@finpersona.com",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
];

const faqs = [
  {
    q: "How do I delete my account?",
    a: "You can delete your account from within the Finpersona app under Settings. Your data will be removed within 30 days in line with our Privacy Policy.",
  },
  {
    q: "I found a bug. How do I report it?",
    a: "Email support@finpersona.com with a description of the issue and your device type. Screenshots help. We investigate all reports.",
  },
  {
    q: "Can I suggest a new feature?",
    a: "Yes, please. Email hello@finpersona.com with your idea. We read every message and many features in Finpersona came from user suggestions.",
  },
  {
    q: "Is Finpersona available for businesses?",
    a: "Finpersona is currently designed for individual users and personal tax (Borang BE). Business tax and corporate features are on our roadmap.",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <div className="bg-white">
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(124,58,237,0.05),transparent)]" />
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Get in touch
            </h1>
            <p className="text-lg text-gray-500">
              We&apos;re a small team based in Malaysia. We read every message and genuinely try to respond within one business day.
            </p>
          </div>
        </section>

        {/* Contact options */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-5">
              {contacts.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  className="group border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
                    <c.icon className={`w-5 h-5 ${c.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{c.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{c.desc}</p>
                  <span className={`text-xs font-medium ${c.color} group-hover:underline`}>{c.action}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Response time note */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="text-4xl shrink-0">⏱️</div>
              <div>
                <h2 className="font-semibold text-gray-900 mb-1">Response time</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We aim to respond to all enquiries within 1 business day (Monday to Friday, Malaysia time GMT+8). Support requests are prioritized for active app users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Common questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-gray-100 pb-6">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal links */}
        <section className="pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-gray-400 mb-4">Looking for our legal documents?</p>
            <div className="flex justify-center gap-6">
              <Link href="/privacy-policy" className="text-sm text-violet-600 hover:text-violet-700 font-medium inline-flex items-center gap-1">
                Privacy Policy <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/terms" className="text-sm text-violet-600 hover:text-violet-700 font-medium inline-flex items-center gap-1">
                Terms of Service <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
