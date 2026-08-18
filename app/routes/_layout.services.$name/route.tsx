import HeroScope from "~/components/features/service-scope/hero-scope";
import Offer from "~/components/features/service-scope/offer";
import OtherServices from "~/components/features/service-scope/other-services";
import OurProcess from "~/components/features/service-scope/our-process";
import Overview from "~/components/features/service-scope/overview";
import FAQ from "~/components/features/service-scope/faq";
import { serviceScope } from "~/lib/constants";
import { breadcrumbJsonLd, seoMeta, serviceJsonLd } from "~/lib/seo";
import type { Route } from "./+types/route";

export function meta({ params }: Route.MetaArgs) {
  const service = serviceScope.find((s) => s.slug === params.name);

  return seoMeta({
    title: service
      ? `${service.title} in Nigeria | Navis Marine Services Ltd`
      : `Service not found | Navis Marine Services Ltd`,
    description:
      service?.subTitle ??
      "Navis Marine Services Ltd delivers premium Ship Agency, Marine Consultancy, HSSEQ, Marine Procurement and Integrated Maritime Solutions to shipowners, operators, charterers and offshore industries across Nigeria and the global shipping community.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: `${service.title} in Nigeria`,
              description: service.subTitle,
              path: `/services/${service.slug}`,
              image: service.cover,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title, path: `/services/${service.slug}` },
            ]),
          ),
        }}
      />
      <HeroScope service={service} />
      <Overview service={service} />
      <Offer service={service} />
      <OurProcess />
      <FAQ slug={service.slug} />
      <OtherServices service={service}/>
    </>
  );
}
