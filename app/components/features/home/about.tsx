import { useRef } from "react";
import { Link } from "react-router";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { useReveal, useSplitWords } from "~/lib/animations";

export default function About() {
  const scope = useRef<HTMLDivElement>(null);

  useReveal(scope, { target: "[data-reveal]" });
  useSplitWords(scope, "[data-split]");

  return (
    <div className="relative z-10 bg-mainWhite">
      <div
        ref={scope}
        className="max-w-6xl mx-auto py-20 px-4 md:px-8 space-y-10"
      >
      <Badge data-reveal className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal">
        About Navis
      </Badge>
      <div className="grid grid-cols-12 items-end gap-6">
        <div className="col-span-12 md:col-span-9 xl:col-span-10 space-y-4">
          <h2
            data-split
            className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] xl:text-[38px] text-balance leading-tight"
          >
            Navigating Excellence Across{" "}
            <span className="text-deepOrange">Maritime Services</span>
          </h2>
          <p data-reveal className="text-lightGray text-lg">
            Navis Marine Services Ltd is a Nigerian maritime company with an
            international outlook, established to deliver premium Ship Agency,
            Marine Consultancy, HSSEQ, Marine Procurement, Marine Logistics, and
            integrated maritime support services to the global shipping
            industry.
          </p>
        </div>
        <div data-reveal className="col-span-12 md:col-span-2 text-end">
          <Link to="/about" prefetch="intent">
            <Button className="bg-deepOrange hover:bg-deepOrange/80 text-mainWhite w-full sm:w-38 py-6 px-6 rounded-full transition-[background-color,opacity] duration-300 ease-in-out">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 space-y-4">
          <img
            data-reveal
            data-reveal-from="left"
            src="https://res.cloudinary.com/ceenobi/image/upload/q_auto:best/v1786799205/clientproject/navis/ship1_ey3euh.webp"
            alt="ship"
            loading="lazy"
            decoding="async"
            className="h-51.25 w-full rounded-2xl"
          />
          <img
            data-reveal
            data-reveal-from="left"
            src="https://res.cloudinary.com/ceenobi/image/upload/q_auto:best/v1786799207/clientproject/navis/ship2_cw5iqp.webp"
            alt="ship"
            loading="lazy"
            decoding="async"
            className="h-51.25 w-full rounded-2xl"
          />
        </div>
        <div className="col-span-12 md:col-span-7">
          <img
            data-reveal
            data-reveal-from="right"
            src="https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto:best/v1786799195/clientproject/navis/ship3_yx7s6d.svg"
            alt="ship"
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-2xl"
          />
        </div>
      </div>
      </div>
    </div>
  );
}