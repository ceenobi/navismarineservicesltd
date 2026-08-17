import { useRef } from "react";
import { Badge } from "~/components/ui/badge";
import { useReveal, useSplitWords } from "~/lib/animations";
import type { ServiceScope } from "~/lib/constants";

export default function Details({ service }: { service: ServiceScope }) {
  const scope = useRef<HTMLDivElement>(null);
  useReveal(scope, { target: "[data-reveal]" });
  useSplitWords(scope, "[data-split]");

  return (
    <div  className="bg-paleWhite py-20 z-20">
      <div
        ref={scope}
        className="max-w-6xl mx-auto py-20 px-4 md:px-8 space-y-10"
      >
        <Badge data-reveal className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal">
          overview
        </Badge>
        <h1
          data-split
          className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] xl:text-[38px] text-balance leading-tight"
        >
          Service{" "}
          <span className="text-deepOrange">Overview</span>
        </h1>
        <div>
          {service.detail.map((item: string, i: number) => (
            <p key={i} data-hero="fade" className="text-balance text-xl text-softWhite">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
