import { useRef } from "react";
import { Link } from "react-router";
import type { ServiceScope } from "~/lib/constants";
import { gsap, useGSAP } from "~/lib/gsap";

export default function HeroScope({ service }: { service: ServiceScope }) {
  const scope = useRef<HTMLElement>(null);
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
    <section
      ref={scope}
      aria-label="Hero"
      className="sticky top-0 z-0 min-h-svh flex items-center justify-center overflow-hidden"
    >
      <div
        data-hero="parallax"
        aria-hidden="true"
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <img
          data-hero="bg"
          src={service.cover}
          alt={service.title}
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 w-full h-full object-cover will-change-transform"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-linear-to-l from-[#02152D] via-deepBlue to-[#2D3238] opacity-70" />
      <div className="relative max-w-6xl mx-auto px-4 xl:px-8 py-34 md:py-30 lg:py-20">
        <div className="text-start space-y-4">
          <div className="inline-flex gap-2 items-center">
            <Link to="/services">
              <p
                data-hero="fade"
                className="hover:text-mainWhite text-balance text-xl text-softWhite"
              >
                Service /
              </p>
            </Link>
            <span data-hero="fade" className="text-deepOrange text-xl">
              {service.title}
            </span>
          </div>
          <img
            src={service.logo}
            alt={service.title}
            loading="lazy"
            decoding="async"
            className="size-13"
            data-reveal
            data-hero="fade"
          />
          <div className="space-y-4 w-full max-w-200">
            <h1
              data-hero="fade"
              className="font-heading text-3xl sm:text-[54px] font-bold text-mainWhite leading-tight"
            >
              {service.title}
            </h1>
            <p data-hero="fade" className="text-balance text-xl text-softWhite">
              {service.subTitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
