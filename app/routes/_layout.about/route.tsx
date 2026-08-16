import AboutNavis from "~/components/features/about-navis/about";
import Hero from "~/components/features/about-navis/hero";
import { SITE_DESCRIPTION, seoMeta } from "~/lib/seo";
import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return seoMeta({
    title:
      "About Navis Marine Services Ltd | Ship Agency & Maritime Solutions in Nigeria",
    description: SITE_DESCRIPTION,
    path: "/about",
  });
}

export default function About() {
  return (
    <>
      <Hero />
      <AboutNavis />
    </>
  );
}
