import { useRef, useState } from "react";
import { Link } from "react-router";
import { gsap, useGSAP } from "~/lib/gsap";
import { Button } from "~/components/ui/button";

const VIDEO_HLS =
  "https://res.cloudinary.com/ceenobi/video/upload/sp_auto/v1786887919/image-to-video/i2v_c04f2f4bd8ee4baf92a608d7727bbc87.m3u8";
const VIDEO_MP4 =
  "https://res.cloudinary.com/ceenobi/video/upload/q_auto,w_1280/v1786887919/image-to-video/i2v_c04f2f4bd8ee4baf92a608d7727bbc87.mp4";
const POSTER_IMAGE =
  "https://res.cloudinary.com/ceenobi/image/upload/q_auto,f_auto,w_1920/v1786799802/clientproject/navis/hero1_x2p0sz.jpg";

function HeroBackground() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <>
      <img
        data-hero="bg"
        src={POSTER_IMAGE}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover will-change-transform"
      />
      {!videoFailed && (
        <video
          data-hero="bg"
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover will-change-transform"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload noremoteplayback"
          poster={POSTER_IMAGE}
          onError={() => setVideoFailed(true)}
        >
          <source src={VIDEO_HLS} type="application/x-mpegURL" />
          <source src={VIDEO_MP4} type="video/mp4" />
        </video>
      )}
    </>
  );
}

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
          }
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
          }
        );
      });

      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      aria-label="Hero"
      className="relative isolate min-h-[60svh] lg:min-h-svh flex items-center justify-center overflow-hidden"
    >
      <HeroBackground />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#2D3238]/90 via-black/80 to-[#001630] opacity-70" />
      <div className="relative max-w-5xl mx-auto px-4 xl:px-8 py-40 md:py-30 lg:py-20">
        <div className="text-center space-y-8">
          <h1
            data-hero="fade"
            className="font-heading text-4xl sm:text-[54px] font-bold text-mainWhite leading-tight"
          >
            Supporting Global Shipping. Delivering Local Excellence.
          </h1>
          <p
            data-hero="fade"
            className="text-balance text-lg text-softWhite"
          >
            Navis Marine Services Ltd delivers premium Ship Agency, Marine
            Consultancy, HSSEQ, Marine Procurement and Integrated Maritime
            Solutions to shipowners, operators, charterers and offshore
            industries—connecting global shipping with trusted local expertise.
          </p>
          <div
            data-hero="fade"
            className="inline-flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link to="/services">
              <Button className="bg-deepOrange hover:bg-deepOrange/80 text-mainWhite w-full sm:w-40 py-5 px-6 rounded-full transition-[background-color,opacity] duration-300 ease-in-out">
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="bg-transparent text-mainWhite border w-full sm:w-40 py-5 px-6 rounded-full transition-[background-color,color,border-color] duration-300 ease-in-out"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}