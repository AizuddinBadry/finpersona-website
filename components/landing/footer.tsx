import Image from "next/image";
import Link from "next/link";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface FooterProps {
  dict: ReturnType<typeof getDictionary>;
}

export function Footer({ dict }: FooterProps) {
  const columns = [
    {
      heading: dict.footer.product,
      links: [
        { label: dict.footer.splitBill, href: "/features/split-bill" },
        { label: dict.footer.budgeting, href: "/features/budgeting" },
        { label: dict.footer.taxTracking, href: "/features/tax-tracking" },
      ],
    },
    {
      heading: dict.footer.taxSection,
      links: [
        { label: dict.footer.taxReturn, href: "/tax-return" },
        { label: dict.footer.taxRelief, href: "/tax-relief" },
        { label: dict.footer.avoidOverpaying, href: "/avoid-overpaying-tax" },
      ],
    },
    {
      heading: dict.footer.company,
      links: [
        { label: dict.footer.about, href: "/about" },
        { label: dict.footer.contact, href: "/contact" },
      ],
    },
    {
      heading: "Get Started",
      links: [
        { label: "Create an account", href: "https://app.finpersona.com?auth=register" },
        { label: dict.navbar.signin, href: "https://app.finpersona.com?auth=login" },
        { label: dict.footer.privacy, href: "/privacy-policy" },
        { label: dict.footer.terms, href: "/terms" },
      ],
    },
  ];

  const socials = [
    { label: "X", href: "https://x.com/finpersonaai" },
    { label: "IG", href: "https://instagram.com/finpersonaai" },
    { label: "FB", href: "https://facebook.com/finpersonaai" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Top row: logo + tagline + app store buttons */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div className="max-w-xs">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/logo-light.svg"
                alt="Finpersona"
                width={144}
                height={144}
                className="h-36 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              {dict.footer.tagline}
            </p>
          </div>

          {/* App store buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://apps.apple.com"
              className="inline-flex items-center gap-3 px-4 py-2.5 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[9px] leading-none text-white/70">Download on the</p>
                <p className="text-sm font-semibold leading-tight">App Store</p>
              </div>
            </a>
            <a
              href="https://play.google.com"
              className="inline-flex items-center gap-3 px-4 py-2.5 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.19l12.6-7.27-2.79-2.78-10.8 9.86zm-1.5-20.4C1.45 3.7 1.33 4.1 1.33 4.55v14.9c0 .45.12.86.35 1.19l.06.06 8.35-8.35v-.2L1.62 3.3l.06.06zm17.1 7.55-2.77-1.6-3.11 3.11 3.11 3.12 2.79-1.61c.8-.46.8-1.56-.02-2.02zm-17.5 8.4 10.8-6.22-2.78-2.78-8.02 9z"/>
              </svg>
              <div className="text-left">
                <p className="text-[9px] leading-none text-white/70">Get it on</p>
                <p className="text-sm font-semibold leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-gray-900 text-sm font-semibold mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-violet-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Finpersona.com.
            </p>
            <span className="text-gray-200">|</span>
            <p className="text-sm text-gray-400">{dict.footer.madeIn}</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-semibold hover:bg-violet-100 hover:text-violet-600 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant brand name */}
      <div className="overflow-hidden select-none px-4 sm:px-6 lg:px-8 pb-2">
        <p
          className="text-[clamp(4rem,18vw,16rem)] font-black leading-none tracking-tighter gradient-text opacity-[0.07] -mb-[0.15em]"
          aria-hidden="true"
        >
          Finpersona
        </p>
      </div>
    </footer>
  );
}
