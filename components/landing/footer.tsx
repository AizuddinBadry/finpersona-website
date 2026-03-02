import Link from "next/link";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface FooterProps {
  dict: ReturnType<typeof getDictionary>;
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="py-12 border-t border-gray-200 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <img
              src="/logo-light.svg"
              alt="FinPersona Logo"
              className="h-10 w-auto"
            />
            <span className="text-gray-600 text-sm ml-2">
              — {dict.footer.tagline}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="#features" className="hover:text-gray-900 transition-colors">
              {dict.footer.features}
            </Link>
            <Link href="#how-it-works" className="hover:text-gray-900 transition-colors">
              How It Works
            </Link>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">
              {dict.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">
              {dict.footer.terms}
            </Link>
          </div>

          {/* Made in Malaysia */}
          <p className="text-sm text-gray-600">
            Made with ♥ in Malaysia
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} FinPersona. {dict.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
