import { useRef } from "react";
import { Badge } from "~/components/ui/badge";
import { useHoverTilt, useReveal, useSplitWords } from "~/lib/animations";
import { processSteps } from "~/lib/constants";
import { cn } from "~/lib/utils";

export default function OurProcess() {
  const scope = useRef<HTMLDivElement>(null);
  useReveal(scope, { target: "[data-reveal]" });
  useSplitWords(scope, "[data-split]");
  const cardRef = useRef<HTMLDivElement>(null);
  useHoverTilt(cardRef, 6);

  return (
    <div ref={scope} className="relative z-10 bg-deepBlue py-10">
      <div className="max-w-6xl mx-auto py-10 px-4 md:px-8 space-y-10 text-center md:text-start">
        <Badge data-reveal className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal">
         our process
        </Badge>
        <h2
          data-split
          className="font-heading text-paleWhite font-semibold text-[34px] sm:text-[42px] xl:text-[38px] text-balance leading-tight"
        >
         How the work runs.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {processSteps.map((stat, index) => (
            <div
              key={stat.id}
              data-reveal
              className={cn(
                "space-y-2 md:border-r md:border-r-gray-300/50",
                (index === 4) && "md:border-r-0",
              )}
            >
              <h3 className="font-heading font-bold text-deepOrange text-3xl text-balance">
                {stat.title}
              </h3>
              <p className="text-softWhite text-sm sm:text-lg text-balance leading-none">
                {stat.subTitle}
              </p>
            </div>
          ))}
         </div>
      </div>
    </div>
  );
}
