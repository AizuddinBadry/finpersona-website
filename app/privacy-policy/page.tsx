import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Finpersona",
  description: "How Finpersona collects, uses, and protects your personal financial data. PDPA (Malaysia) compliant.",
  openGraph: {
    title: "Privacy Policy | Finpersona",
    description: "How Finpersona collects, uses, and protects your personal financial data. PDPA compliant.",
    url: "https://finpersona.com/privacy-policy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Finpersona",
    description: "How Finpersona collects, uses, and protects your personal financial data. PDPA compliant.",
  },
  alternates: {
    canonical: "https://finpersona.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "1 March 2026";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: `Finpersona ("we", "us", or "our") is operated by Aexlora Sdn Bhd, a company incorporated in Malaysia. We are committed to protecting your personal data in accordance with the Personal Data Protection Act 2010 (PDPA) of Malaysia.

This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Finpersona mobile application and website (collectively, the "Service"). Please read this policy carefully. By using our Service, you agree to the collection and use of information in accordance with this policy.`,
    },
    {
      id: "data-collected",
      title: "2. Information We Collect",
      content: `We collect the following categories of personal data:

**2.1 Account Information**
When you register, we collect your name, email address, and password (stored as a secure hash). You may optionally provide your phone number and profile photo.

**2.2 Financial Information**
To provide our core services, we collect income details you enter (salary, allowances, freelance income), expense data from receipts you scan or transactions you log, bank transaction data if you connect a bank account via our secure integration, EPF and insurance contribution information you provide, and LHDN tax relief category data.

**2.3 Usage Data**
We automatically collect device information (device type, OS version, unique device ID), app usage logs (features accessed, session duration), IP address and approximate location, and crash reports and performance data.

**2.4 Receipt Images**
When you use the receipt scanning feature, we temporarily process receipt images using OCR technology to extract merchant name, date, amount, and items. Images are not permanently stored after extraction unless you explicitly save them.`,
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      content: `We use your personal data for the following purposes:

**Core Service Delivery**: To provide expense tracking, tax relief calculation, split bill functionality, and budgeting features. To calculate your estimated LHDN tax liability and identify eligible tax relief. To generate financial summaries and insights.

**Service Improvement**: To analyze usage patterns and improve app features. To debug errors and enhance performance. To develop new features based on user behavior.

**Communications**: To send important service notifications (account security, policy updates). To respond to your support inquiries. With your consent, to send product updates and tips.

**Legal Compliance**: To comply with applicable Malaysian laws and regulations. To respond to lawful requests from government authorities when required.

We do NOT sell, rent, or trade your personal data to third parties for marketing purposes. We do NOT use your financial data for advertising profiling.`,
    },
    {
      id: "data-sharing",
      title: "4. Data Sharing and Disclosure",
      content: `We share your data only in the following limited circumstances:

**Service Providers**: We engage trusted third-party providers to operate our infrastructure, including cloud hosting (Supabase/AWS), OCR processing, and analytics. These providers are contractually bound to protect your data and may only use it to provide services to us.

**Legal Requirements**: We may disclose your data if required by Malaysian law, court order, or government authority, including LHDN (Lembaga Hasil Dalam Negeri) if legally compelled.

**Business Transfer**: If Finpersona is acquired or merged, your data may be transferred as part of that transaction. We will notify you before your data becomes subject to a different privacy policy.

**With Your Consent**: We may share data with third parties when you explicitly authorize us to do so (e.g., exporting your tax data to a licensed tax agent).

We never share your data with advertisers or data brokers.`,
    },
    {
      id: "data-security",
      title: "5. Data Security",
      content: `We implement industry-standard security measures to protect your personal data:

- **Encryption in Transit**: All data transmitted between the app and our servers uses TLS 1.3 encryption.
- **Encryption at Rest**: Sensitive financial data is encrypted at rest using AES-256 encryption.
- **Access Controls**: Strict role-based access controls limit who within our team can access user data.
- **Security Audits**: We conduct regular security assessments and vulnerability testing.
- **No Plain-Text Passwords**: Passwords are hashed using bcrypt and are never stored in readable form.

While we take all reasonable precautions, no method of electronic transmission or storage is 100% secure. We encourage you to use a strong, unique password and enable two-factor authentication.`,
    },
    {
      id: "data-retention",
      title: "6. Data Retention",
      content: `We retain your personal data for as long as your account is active or as needed to provide the Service. 

If you delete your account, we will delete or anonymize your personal data within 30 days, except where retention is required by Malaysian law (e.g., financial records may be retained for up to 7 years for tax compliance purposes).

Receipt images are processed in memory and not retained beyond the OCR extraction session unless you explicitly save a receipt to your account.`,
    },
    {
      id: "your-rights",
      title: "7. Your Rights Under PDPA",
      content: `Under the Personal Data Protection Act 2010 (Malaysia), you have the following rights:

**Right of Access**: You may request a copy of the personal data we hold about you.

**Right of Correction**: You may request that we correct inaccurate or incomplete personal data.

**Right to Withdraw Consent**: Where processing is based on consent, you may withdraw consent at any time (this will not affect the lawfulness of processing before withdrawal).

**Right to Limit Processing**: You may request that we limit how we use your data in certain circumstances.

**Right to Data Portability**: You may request an export of your data in a machine-readable format (CSV/JSON).

**Right to Erasure**: You may request deletion of your account and associated personal data, subject to legal retention obligations.

To exercise any of these rights, contact us at privacy@finpersona.com. We will respond within 21 days.`,
    },
    {
      id: "cookies",
      title: "8. Cookies and Tracking",
      content: `Our website uses cookies and similar technologies to:

- Maintain your login session
- Remember your language and display preferences
- Analyze website traffic (using anonymized analytics)
- Detect and prevent fraudulent activity

You can control cookies through your browser settings. Disabling cookies may affect the functionality of certain features. We do not use third-party advertising cookies.`,
    },
    {
      id: "children",
      title: "9. Children's Privacy",
      content: `Finpersona is not directed at individuals under 18 years of age. We do not knowingly collect personal data from minors. If you believe a minor has provided us with personal data, please contact us immediately at privacy@finpersona.com and we will take steps to delete such information.`,
    },
    {
      id: "third-party",
      title: "10. Third-Party Links",
      content: `Our Service may contain links to third-party websites or services (such as LHDN's e-Filing portal or bank websites). We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any personal information.`,
    },
    {
      id: "changes",
      title: "11. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes via:

- Email to your registered address (at least 14 days before the change takes effect)
- An in-app notification
- A prominent notice on our website

Your continued use of the Service after the effective date constitutes acceptance of the revised policy. If you disagree with any changes, you may delete your account.`,
    },
    {
      id: "contact",
      title: "12. Contact Us",
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our Data Protection Officer:

**Email**: privacy@finpersona.com
**Address**: Aexlora Sdn Bhd, Malaysia

For PDPA complaints that we cannot resolve to your satisfaction, you may lodge a complaint with the Personal Data Protection Department (JPDP) of Malaysia.`,
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/50 text-base">Last updated: {lastUpdated}</p>
          <p className="text-white/40 text-sm mt-2">PDPA (Malaysia) Compliant</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <Link
            href="/"
            className="text-sm text-violet-600 hover:text-violet-700 transition-colors"
          >
            ← Back to Finpersona
          </Link>
        </div>
      </div>
    </div>
  );
}
