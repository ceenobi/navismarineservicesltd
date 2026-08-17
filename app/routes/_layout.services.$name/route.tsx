import { useRef } from "react";
import { serviceScope } from "~/lib/constants";
import { gsap, useGSAP } from "~/lib/gsap";
import { seoMeta, SITE_DESCRIPTION } from "~/lib/seo";
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
  const scope = useRef<HTMLElement>(null);

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
  useGSAP(
    () => {
      gsap.set("[data-hero='bg']", { scale: 1.2, transformOrigin: "center" });

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-hero='bg']",
          { scale: 1.32 },
          {
            scale: 1.2,
            transformOrigin: "center",
            duration: 2.4,
            ease: "power3.out",
          },
        );

        gsap.fromTo(
          "[data-hero='fade']",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15,
          },
        );

        gsap.fromTo(
          "[data-hero='parallax']",
          { scale: 1.08 },
          {
            scale: 1.3,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope },
  );
  return (
    <>

          <section ref={scope}
          aria-label="Hero"
            className="sticky top-0 z-0 h-svh flex items-center justify-center overflow-hidden">
              <div
                data-hero="parallax"
                aria-hidden="true"
                className="absolute inset-0 -z-10 will-change-transform"
              >
                <img
                  data-hero="bg"
                  src={service.cover}
                  alt="Photo by Timelab on Unsplash"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 -z-10 w-full h-full object-cover will-change-transform"
                />
            </div>
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#2D3238]/90 via-black/80 to-[#001630] opacity-70" />
        <div className="relative max-w-5xl mx-auto px-4 xl:px-8 py-40 md:py-30 lg:py-20">
          <div className="w-full text-start space-y-8">
            <p data-hero="fade"
              className="w-full max-w-full text-balance text-xl text-softWhite">Service / <span className="text-deepOrange">{service.title}</span></p>
        </div>
        </div>
          </section>
    </>
  );
}
