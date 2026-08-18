import AboutNavis from "~/components/features/about-navis/about";
import Hero from "~/components/features/about-navis/hero";
import { ABOUT_DESCRIPTION, seoMeta } from "~/lib/seo";
import type { Route } from "./+types/route";

export function meta(_args: Route.MetaArgs) {
  return seoMeta({
    title: "About Navis Marine Services | Ship Agency in Nigeria",
    description: ABOUT_DESCRIPTION,
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
