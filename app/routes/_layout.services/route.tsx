import { seoMeta, SITE_DESCRIPTION } from "~/lib/seo";
import type { Route } from "./+types/route";
import HeroServices from "~/components/features/services/hero";
import ServiceList from "~/components/features/services/service-list";

export function meta({}: Route.MetaArgs) {
  return seoMeta({
    title:
      "Navis Marine Services Ltd | Ship Agency & Maritime Solutions in Nigeria",
    description: SITE_DESCRIPTION,
    path: "/services",
  });
}


export default function Services() {
  return (
    <>
      <HeroServices />
      <ServiceList/>
    </>
  );
}