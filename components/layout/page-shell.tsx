import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { getDictionary } from "@/lib/i18n/get-dictionary";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  const dict = getDictionary("en");
  return (
    <>
      <Navbar dict={dict} />
      <main>{children}</main>
      <Footer dict={dict} />
    </>
  );
}
