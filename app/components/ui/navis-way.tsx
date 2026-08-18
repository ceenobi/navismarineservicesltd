import { useRef } from "react";
import { Badge } from "~/components/ui/badge";
import { navisWay } from "~/lib/constants";
import { useCountUp, useReveal, useSplitWords } from "~/lib/animations";

export default function NavisWay() {
  const scope = useRef<HTMLDivElement>(null);

  useReveal(scope, { target: "[data-reveal]" });
  useSplitWords(scope, "[data-split]");
  useCountUp(scope, "[data-count]");

  return (
    <div ref={scope} className="relative z-10 bg-deepBlue py-10">
      <div className="max-w-6xl mx-auto py-10 px-4 md:px-8 space-y-10 text-center">
        <Badge data-reveal className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal">
          The navis way
        </Badge>
        <h2
          data-split
          className="font-heading text-mainWhite font-semibold text-[34px] sm:text-[42px] xl:text-[38px] text-balance leading-tight"
        >
          A philosophy that defines every decision, every relationship and every
          vessel call
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:hidden">
          {navisWay.map((item) => (
            <div
              key={item.id}
              data-reveal
              className="bg-paleBlue rounded-xl p-4 text-center"
            >
              <h3 className="font-heading text-deepOrange font-bold text-[34px]">
                <span data-count={item.tag}>{item.tag}</span>
                {item.title.slice(1)}
              </h3>
              <p className="font-body text-deepBlue text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden md:grid grid-cols-12 gap-4 items-center">
          {navisWay.map((item) => (
            <div key={item.id} className="contents">
              <div data-reveal className="col-span-1 lg:col-span-2">
                <h3 className="font-heading text-deepOrange font-bold text-[48px]">
                  <span data-count={item.tag}>{item.tag}</span>
                </h3>
              </div>
              <div data-reveal className="col-span-4 lg:col-span-3">
                <h3 className="font-heading text-mainWhite font-medium text-[32px] text-start">
                  {item.title}
                </h3>
              </div>
              <div data-reveal className="col-span-7 lg:col-span-7">
                <p className="text-softWhite text-base lg:text-lg text-start">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/*<h1
          data-split
          className="mt-10 font-heading text-deepOrange font-semibold text-3xl sm:text-[34px] text-balance leading-tight"
        >
          Navigating Excellence Across Maritime Services
        </h1>*/}
      </div>
    </div>
  );
}