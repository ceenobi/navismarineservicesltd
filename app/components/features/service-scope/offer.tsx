
import { useRef } from "react";
import { Badge } from "~/components/ui/badge";
import { useHoverTilt, useReveal, useSplitWords } from "~/lib/animations";
import type { ServiceScope } from "~/lib/constants";
import { cn } from "~/lib/utils";

export default function Offer({ service }: { service: ServiceScope }) {
  const scope = useRef<HTMLDivElement>(null);
  useReveal(scope, { target: "[data-reveal]" });
  useSplitWords(scope, "[data-split]");
  const cardRef = useRef<HTMLDivElement>(null);
  useHoverTilt(cardRef, 6);

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {service.scope.map((item, index) => (
        <div
          ref={cardRef}
          data-reveal
            data-reveal-scale="0.96"
            key={item.id}
          className={cn("border-l-4 border-deepOrange bg-white p-4 rounded-lg shadow text-center md:text-left overflow-hidden flex flex-col justify-between items-center md:items-start animate-in fade-in slide-in-from-bottom-4 transition-[box-shadow,transform] duration-300 ease-out hover:shadow-lg")}
           style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="size-13 object-cover rounded-md"
            />
            <div>
              <h2 className="font-heading text-deepBlue font-semibold text-xl mt-4">
                {service.title}
              </h2>
              <p className="text-lightGray text-sm mt-2 text-balance">
                {service.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
