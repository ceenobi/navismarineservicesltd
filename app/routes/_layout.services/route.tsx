import { Outlet, useLocation } from "react-router";
import HeroServices from "~/components/features/services/hero";
import ServiceList from "~/components/features/services/service-list";
import { breadcrumbJsonLd, SERVICES_DESCRIPTION, seoMeta } from "~/lib/seo";
import type { Route } from "./+types/route";

export function meta(_args: Route.MetaArgs) {
  return seoMeta({
    title: "Services | Navis Marine Services, Ship Agency in Nigeria",
    description: SERVICES_DESCRIPTION,
    path: "/services",
  });
}


export default function Services() {
  const location = useLocation()
  const isServicePage =
    location.pathname === "/services" || location.pathname === "/services/";
  return (
    <>
      {isServicePage ?
      <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]),
          ),
        }}
      />
      <HeroServices />
      <ServiceList />
       </>
        :
        <Outlet />
      }
    </>
  );
}
