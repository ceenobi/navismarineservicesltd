
import { useRef } from "react";
import { Badge } from "~/components/ui/badge";
import { useReveal, useSplitWords } from "~/lib/animations";
import type { ServiceScope } from "~/lib/constants";

export default function Offer({ service }: { service: ServiceScope }) {
  const scope = useRef<HTMLDivElement>(null);

  useReveal(scope, { target: "[data-reveal]" });
  useSplitWords(scope, "[data-split]");
  return (
    <div ref={scope} className="relative z-10 bg-paleWhite py-10">
      <div className="max-w-6xl mx-auto py-10 px-4 md:px-8 space-y-10 text-center">
        <Badge data-reveal className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal">
         what we offer
        </Badge>
        <h1
          data-split
          className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] xl:text-[38px] text-balance leading-tight"
        >
          Scope of {" "}
          <span className="text-deepOrange">Service</span>
        </h1>
      </div>
    </div>
  );
}
