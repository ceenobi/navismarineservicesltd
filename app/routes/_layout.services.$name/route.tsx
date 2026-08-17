import Details from "~/components/features/service-scope/details";
import HeroScope from "~/components/features/service-scope/hero-scope";
import { serviceScope } from "~/lib/constants";
import { SITE_DESCRIPTION, seoMeta } from "~/lib/seo";
import type { Route } from "./+types/route";


export function meta({params}: Route.MetaArgs) {
  return seoMeta({
    title: `Navis Marine Services Ltd | ${params.name}`,
    description: SITE_DESCRIPTION,
    path: `/services/${params.name}`,
  });
}

export default function ServiceScope({params}: Route.ComponentProps) {
  const { name } = params;
  const service = serviceScope.find((s) => s.slug === name);

  if (!service) {
    return (
      <section className="h-svh flex items-center justify-center bg-mainWhite px-4">
        <div className="text-center space-y-4">
          <h1 className="font-heading text-deepBlue font-semibold text-3xl sm:text-4xl">
            Service not found
          </h1>
          <p className="text-lightGray text-lg text-balance">
            The service you are looking for does not exist or is not yet available.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <HeroScope service={service} />
      <Details service={service}/>
    </>
  );
}
