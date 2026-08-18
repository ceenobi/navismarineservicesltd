import About from "~/components/features/home/about";
import Hero from "~/components/features/home/hero";
import Industries from "~/components/features/home/industries";
import Services from "~/components/features/home/services";
import WhyChoose from "~/components/features/home/why-choose";
import NavisWay from "~/components/ui/navis-way";
import { HOME_DESCRIPTION, seoMeta } from "~/lib/seo";
import type { Route } from "./+types/route";

export function meta(_args: Route.MetaArgs) {
  return seoMeta({
    title: "Ship Agency & Maritime Solutions in Nigeria | Navis Marine",
    description: HOME_DESCRIPTION,
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
