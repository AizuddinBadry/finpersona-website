import {
  Navbar,
  Hero,
  Features,
  HowItWorks,
  Categories,
  Trust,
  CTA,
  Footer,
} from "@/components/landing";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default function Home() {
  const dict = getDictionary('en');

  return (
    <main className="min-h-screen bg-white">
      <Navbar dict={dict} lang="en" />
      <Hero dict={dict} />
      <Features dict={dict} />
      <HowItWorks dict={dict} />
      <Categories dict={dict} />
      <Trust dict={dict} />
      <CTA dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}
