import { Outlet, useLocation } from "react-router";
import HeroServices from "~/components/features/services/hero";
import ServiceList from "~/components/features/services/service-list";
import { SERVICES_DESCRIPTION, seoMeta } from "~/lib/seo";
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
  const isServicePage = location.pathname === "/services";
  return (
    <>
      {isServicePage ?
      <>
      <HeroServices />
      <ServiceList />
       </>
        :
        <Outlet />
      }
    </>
  );
}
