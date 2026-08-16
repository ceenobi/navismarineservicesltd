import About from "~/components/features/home/about";
import Hero from "~/components/features/home/hero";
import Industries from "~/components/features/home/industries";
import NavisWay from "~/components/features/navis-way";
import Services from "~/components/features/home/services";
import WhyChoose from "~/components/features/home/why-choose";
import { SITE_DESCRIPTION, seoMeta } from "~/lib/seo";
import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return seoMeta({
    title:
      "Navis Marine Services Ltd | Ship Agency & Maritime Solutions in Nigeria",
    description: SITE_DESCRIPTION,
    path: "/",
  });
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <NavisWay />
      <Industries />
    </>
  );
}
