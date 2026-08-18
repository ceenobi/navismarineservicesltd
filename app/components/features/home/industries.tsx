import { useRef } from "react";
import { Badge } from "~/components/ui/badge";
import { useReveal, useSplitWords } from "~/lib/animations";
import { industries } from "~/lib/constants";

export default function Industries() {
  const scope = useRef<HTMLDivElement>(null);

  useReveal(scope, { target: "[data-reveal]" });
  useSplitWords(scope, "[data-split]");

  return (
    <div ref={scope} className="relative z-10 bg-paleWhite py-10">
      <div className="max-w-6xl mx-auto py-10 px-4 md:px-8 space-y-10">
        <Badge data-reveal className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal">
          industries we serve
        </Badge>
        <div className="space-y-4">
          <h2
            data-split
            className="font-heading text-deepBlue font-semibold text-[42px] xl:text-[38px] text-balance leading-tight"
          >
            Trusted across the maritime and {" "}
            <span className="text-deepOrange">energy value chain.</span>
          </h2>
          <p
            data-reveal
            className="text-lightGray text-lg w-full max-w-187.5"
          >
            From shipping companies to offshore energy operators, we provide
            specialized services that meet the unique demands of every client.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          {industries.map((industry) => (
            <Badge
              key={industry}
              data-reveal
              className="bg-mainWhite rounded-none uppercase text-deepBlue p-6 text-base font-normal transition-colors duration-300 ease-in-out hover:bg-deepOrange hover:text-mainWhite"
            >
              {industry}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
