import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Hero() {
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
      });

      return () => mm.revert();
    },
    { scope },
  );
  return (
    <section
      ref={scope}
      aria-label="Hero"
      className="relative isolate min-h-[60svh] lg:min-h-svh flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://res.cloudinary.com/ceenobi/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/f_webp/e_trim/clientproject/navis/image_10_ulq3xs.png"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#2D3238]/90 via-black/80 to-[#001630] opacity-70" />
      <div className="relative max-w-5xl mx-auto px-4 xl:px-8 py-40 md:py-30 lg:py-20">
        <div className="text-center space-y-8">
          <h1
            data-hero="fade"
            className="font-heading text-4xl sm:text-[54px] font-bold text-mainWhite leading-tight"
          >
            Navigating Excellence Across Maritime Services
          </h1>
        </div>
      </div>
    </section>
  );
}