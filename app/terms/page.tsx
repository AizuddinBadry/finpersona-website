import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Finpersona",
  description: "Terms and conditions for using Finpersona personal finance and tax compliance app.",
};

export default function TermsPage() {
  const lastUpdated = "1 March 2026";

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: `By accessing or using Finpersona (the "Service"), operated by Aexlora Sdn Bhd ("Company", "we", "us", "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.

These Terms apply to all users of the Service, including visitors, registered users, and anyone who accesses any part of the Service. We reserve the right to update these Terms at any time. We will notify you of material changes via email or in-app notification at least 14 days before they take effect.`,
    },
    {
      id: "eligibility",
      title: "2. Eligibility",
      content: `To use Finpersona, you must:

- Be at least 18 years of age
- Be a legal resident of Malaysia or have Malaysian tax obligations
- Have the legal capacity to enter into a binding agreement
- Not have been previously suspended or removed from the Service

By using the Service, you represent and warrant that you meet all eligibility requirements.`,
    },
    {
      id: "account",
      title: "3. Account Registration and Security",
      content: `**Registration**: You must create an account to access most features of the Service. You agree to provide accurate, current, and complete information during registration and to keep it updated.

**Account Security**: You are responsible for maintaining the confidentiality of your password and for all activities that occur under your account. You agree to immediately notify us at support@finpersona.com if you suspect unauthorized access to your account.

**One Account Per Person**: You may not create multiple accounts for fraudulent purposes. Corporate or shared accounts must be registered under the responsible individual's details.

**Account Termination**: You may delete your account at any time from within the app. We may suspend or terminate accounts that violate these Terms.`,
    },
    {
      id: "service-description",
      title: "4. Description of Service",
      content: `Finpersona provides the following features (collectively, the "Service"):

- **Expense Tracking**: Manual and receipt-based expense logging with automatic categorization
- **Split Bill**: Tools to split and track shared expenses between individuals
- **Budgeting**: Monthly budget planning and overspend alerts
- **Tax Relief Tracking**: Automatic identification and tracking of LHDN (Lembaga Hasil Dalam Negeri) tax relief categories
- **Tax Estimation**: Real-time estimates of Malaysian income tax liability based on progressive tax rates
- **AI Financial Insights**: AI-powered analysis of spending patterns and savings recommendations
- **Income & EPF Tracking**: Monitoring of salary, freelance income, and EPF contributions

We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice.`,
    },
    {
      id: "tax-disclaimer",
      title: "5. Tax Information Disclaimer",
      content: `IMPORTANT: PLEASE READ THIS SECTION CAREFULLY.

**Not Professional Tax Advice**: Finpersona is a technology tool designed to help you organize financial data and estimate tax relief based on publicly available LHDN guidelines. The information, calculations, and suggestions provided by Finpersona do NOT constitute professional tax advice, legal advice, or accounting advice.

**Accuracy Not Guaranteed**: While we strive to keep our tax calculations and LHDN relief categories current and accurate, tax laws in Malaysia change regularly. We cannot guarantee that the information is always complete, accurate, or up to date. Do not rely solely on Finpersona for your official tax filing obligations.

**Consult a Professional**: For complex tax situations (rental income, foreign-source income, business income, or significant life changes), we strongly recommend consulting a licensed tax agent, accountant, or the LHDN directly.

**Official Filing**: Your official tax return must be filed through LHDN's ezHASiL portal or approved channels. Finpersona is a preparation and tracking tool, not an official tax filing system.

**No Liability for Tax Matters**: The Company is not liable for any tax penalties, underpayments, audit results, or other tax-related consequences arising from your reliance on information provided by the Service.`,
    },
    {
      id: "acceptable-use",
      title: "6. Acceptable Use",
      content: `You agree to use the Service only for lawful purposes. You must NOT:

- Upload false, fraudulent, or misleading financial data
- Attempt to gain unauthorized access to other users' accounts or our systems
- Reverse engineer, decompile, or extract source code from the app
- Use the Service to engage in money laundering, tax fraud, or any other illegal financial activity
- Sell, resell, or commercialize access to the Service without written permission
- Interfere with or disrupt the integrity or performance of the Service
- Use automated scripts or bots to access the Service
- Impersonate another person or entity

Violation of this section may result in immediate account termination and, where applicable, referral to law enforcement.`,
    },
    {
      id: "intellectual-property",
      title: "7. Intellectual Property",
      content: `**Our IP**: The Service, including its design, code, features, logos, and content, is owned by Aexlora Sdn Bhd and is protected by Malaysian and international intellectual property laws. You may not copy, modify, distribute, or create derivative works from any part of the Service without our written consent.

**Your Data**: You retain ownership of all personal financial data you input into the Service. By using the Service, you grant us a limited, non-exclusive license to process your data solely to provide the Service to you.

**Feedback**: If you submit suggestions, feedback, or ideas about the Service, you grant us the right to use them without obligation or compensation.`,
    },
    {
      id: "privacy",
      title: "8. Privacy",
      content: `Your use of the Service is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you consent to the collection, use, and disclosure of your information as described in our Privacy Policy.

Please review our Privacy Policy at finpersona.com/privacy-policy to understand our practices.`,
    },
    {
      id: "third-party",
      title: "9. Third-Party Services",
      content: `The Service may integrate with or link to third-party services, including:

- Bank account connectivity services
- LHDN e-Filing portal (ezHASiL)
- Cloud infrastructure providers (Supabase)

Your use of third-party services is governed by their respective terms and privacy policies. We are not responsible for the content, privacy practices, or availability of third-party services. We do not endorse any third-party services.`,
    },
    {
      id: "limitation",
      title: "10. Limitation of Liability",
      content: `TO THE MAXIMUM EXTENT PERMITTED BY MALAYSIAN LAW:

The Service is provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.

In no event shall Aexlora Sdn Bhd, its directors, employees, or agents be liable for:

- Any indirect, incidental, special, consequential, or punitive damages
- Any loss of profits, data, goodwill, or other intangible losses
- Any tax penalties, filing errors, or financial losses arising from reliance on our tax calculations
- Any unauthorized access to or alteration of your data
- Any interruption or cessation of the Service

Our total liability to you for any claims arising from use of the Service shall not exceed the amount you paid us in the 12 months preceding the claim (or RM 100 if you have not made any payments).`,
    },
    {
      id: "indemnification",
      title: "11. Indemnification",
      content: `You agree to indemnify, defend, and hold harmless Aexlora Sdn Bhd and its officers, directors, employees, agents, and partners from any claims, damages, losses, liabilities, costs, and expenses (including legal fees) arising from:

- Your use of or inability to use the Service
- Your violation of these Terms
- Your violation of any applicable law or third-party rights
- Any financial data you provide to the Service that is false, inaccurate, or misleading`,
    },
    {
      id: "governing-law",
      title: "12. Governing Law and Dispute Resolution",
      content: `These Terms are governed by and construed in accordance with the laws of Malaysia, without regard to conflict of law principles.

**Dispute Resolution**: Any disputes arising from these Terms or your use of the Service shall first be attempted to be resolved through good-faith negotiation. If not resolved within 30 days, disputes shall be submitted to the exclusive jurisdiction of the courts of Malaysia, specifically the courts in Kuala Lumpur.

**Consumer Rights**: Nothing in these Terms limits your rights under the Consumer Protection Act 1999 (Malaysia) or other applicable Malaysian consumer protection laws.`,
    },
    {
      id: "changes",
      title: "13. Changes to Terms",
      content: `We may revise these Terms at any time. For material changes, we will provide at least 14 days' notice via:

- Email to your registered address
- In-app notification
- A notice on our website

Your continued use of the Service after the effective date of revised Terms constitutes your acceptance of the changes. If you do not agree to the new Terms, you must stop using the Service and may delete your account.`,
    },
    {
      id: "contact",
      title: "14. Contact",
      content: `For questions about these Terms, please contact us:

**Email**: legal@finpersona.com
**Support**: support@finpersona.com
**Company**: Aexlora Sdn Bhd, Malaysia

Response time: We aim to respond to all legal inquiries within 5 business days.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative overflow-hidden bg-[#0D0B26] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(124,58,237,0.2),transparent)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Link href="/" className="inline-block mb-8">
            <Image src="/logo-light.svg" alt="Finpersona" width={120} height={32} className="h-8 w-auto mx-auto" />
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/50 text-base">Last updated: {lastUpdated}</p>
          <p className="text-white/40 text-sm mt-2">Governing Law: Malaysia</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
          <h2 className="text-amber-700 font-semibold text-sm mb-2">Important Notice</h2>
          <p className="text-amber-700/80 text-sm leading-relaxed">
            Finpersona provides financial organization tools and tax estimation features. It does <strong>not</strong> provide professional tax advice. Always consult a licensed tax agent for complex tax situations. See Section 5 for full tax disclaimer.
          </p>
        </div>

        {/* Table of contents */}
        <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 mb-12">
          <h2 className="text-sm font-semibold text-violet-700 uppercase tracking-wider mb-4">Contents</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-gray-500 hover:text-violet-600 transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                    {paragraph.replace(/\*\*(.*?)\*\*/g, "$1").trim()}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link
            href="/privacy-policy"
            className="text-violet-600 hover:text-violet-700 transition-colors"
          >
            View Privacy Policy →
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            ← Back to Finpersona
          </Link>
        </div>
      </div>
    </div>
  );
}
