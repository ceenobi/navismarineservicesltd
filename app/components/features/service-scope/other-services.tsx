import { RiArrowRightFill } from "@remixicon/react";
import { useRef } from "react";
import { Link } from "react-router";
import { Badge } from "~/components/ui/badge";
import { useHoverTilt, useReveal, useSplitWords } from "~/lib/animations";
import { type ServiceScope, services } from "~/lib/constants";

export default function OtherServices({ service }: { service: ServiceScope }) {
  const scope = useRef<HTMLDivElement>(null);
  useReveal(scope, { target: "[data-reveal]" });
  useSplitWords(scope, "[data-split]");
  const cardRef = useRef<HTMLDivElement>(null);
  useHoverTilt(cardRef, 6);

  const filteredServices = services.filter((s) => s.id !== service.id);

  return (
    <div ref={scope} className="relative z-10 bg-paleWhite py-10">
      <div className="max-w-6xl mx-auto py-10 px-4 md:px-8 space-y-10">
        <Badge data-reveal className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal">
         other services
        </Badge>
        <div className="flex flex-wrap gap-4 items-center">
          {filteredServices.map((service) => (
            <Link key={service.id} to={service.href}>
            <Badge
              data-reveal
              className="bg-mainWhite rounded-none uppercase text-deepBlue p-6 text-base font-normal transition-colors duration-300 ease-in-out hover:bg-deepOrange hover:text-mainWhite"
            >
              {service.title} <RiArrowRightFill className="text-deepOrange"/>
            </Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
