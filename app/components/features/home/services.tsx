import { useRef } from "react";
import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { services } from "~/lib/constants";
import { useHoverTilt, useReveal, useSplitWords } from "~/lib/animations";

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  useHoverTilt(cardRef, 6);

  return (
    <div
      ref={cardRef}
      data-reveal
      data-reveal-scale="0.96"
      className="bg-white p-4 rounded-lg shadow text-center md:text-left overflow-hidden flex flex-col justify-between items-center md:items-start transition-[box-shadow,transform] duration-300 ease-out hover:shadow-lg"
    >
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        decoding="async"
        className="size-13 object-cover rounded-md"
      />
      <div>
        <h2 className="font-heading text-deepBlue font-semibold text-xl mt-4">
          {service.title}
        </h2>
        <p className="text-lightGray text-sm mt-2 text-balance">
          {service.description}
        </p>
      </div>
      <Link
        to={service.href}
        prefetch="intent"
        className="group mt-4 inline-flex gap-2 items-center text-deepBlue hover:text-deepOrange transition-colors duration-300 ease-in font-medium"
      >
        Learn More{" "}
        <RiArrowRightLine
          size={18}
          className="transition-transform duration-300 ease-in group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}

export default function Services() {
  const scope = useRef<HTMLDivElement>(null);

  useReveal(scope, { target: "[data-reveal]" });
  useSplitWords(scope, "[data-split]");

  return (
    <div ref={scope} className="bg-paleWhite py-10">
      <div className="max-w-6xl mx-auto py-10 px-4 md:px-8 space-y-10 text-center">
        <Badge data-reveal className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal">
          Our services
        </Badge>
        <div className="space-y-4">
          <h1
            data-split
            className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] xl:text-[38px] text-balance leading-tight"
          >
            Comprehensive maritime services{" "}
            <span className="text-deepOrange">under one roof.</span>
          </h1>
          <p data-reveal className="text-lightGray text-lg text-balance">
            From vessel agency and port operations to consultancy, HSSEQ,
            procurement and logistics, NAVIS provides integrated maritime
            support designed around the operational needs of shipowners,
            managers, operators, charterers and offshore businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <Link to="/services">
          <Button
            data-reveal
            className="md:mt-6 bg-deepOrange hover:bg-deepOrange/80 text-mainWhite w-full sm:w-42 py-6 px-6 rounded-full transition-[background-color,opacity] duration-300 ease-in-out"
          >
            View more services
          </Button>
        </Link>
      </div>
    </div>
  );
}