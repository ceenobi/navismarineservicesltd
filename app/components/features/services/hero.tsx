import { useRef } from "react";
import { gsap, useGSAP } from "~/lib/gsap";

export default function HeroServices() {
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
          src="https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1786985830/clientproject/navis/photo-1590497008432-598f04441de8_vqol5e.avif"
          alt="Photo by Timelab on Unsplash"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 w-full h-full object-cover will-change-transform"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#2D3238]/90 via-black/80 to-[#001630] opacity-70" />
      <div className="relative max-w-5xl mx-auto px-4 xl:px-8 py-40 md:py-30 lg:py-20">
        <div className="text-center space-y-8">
          <h1
            data-hero="fade"
            className="font-heading text-4xl sm:text-[54px] font-bold text-mainWhite leading-tight"
          >
            Comprehensive maritime services under one roof.
          </h1>
          <p data-hero="fade"
          className="text-balance text-lg text-softWhite">From vessel agency and port operations to consultancy, HSSEQ, procurement and logistics, NAVIS provides integrated maritime support designed around the operational needs of shipowners, managers, operators, charterers and offshore businesses.</p>
        </div>
      </div>
    </section>
  );
}
