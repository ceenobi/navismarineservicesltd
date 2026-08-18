import { useRef } from "react";
import { Badge } from "~/components/ui/badge";
import { useReveal, useSplitWords } from "~/lib/animations";

export default function WhyChoose() {
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
        why choose Navis
      </Badge>
      <div className="space-y-2 w-full max-w-210.75">
        <h1
          data-split
          className="font-heading text-deepBlue text-balance font-semibold text-[34px] sm:text-[42px] xl:text-[38px] leading-tight"
        >
          Your trusted partner in{" "}
          <span className="text-deepOrange">maritime excellence.</span>
        </h1>
        <p data-reveal className="text-lightGray text-lg">
          We combine industry expertise, operational efficiency, and
          international standards to deliver dependable maritime services that
          exceed expectations.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div
          data-reveal
          data-reveal-from="left"
          className="col-span-12 md:col-span-5 bg-palePink px-6 py-12 rounded-xl"
        >
          <img
            data-reveal
            data-reveal-scale="0.8"
            src="/award.svg"
            alt="award"
            loading="lazy"
            className="size-14.5"
          />
          <h2 className="font-heading text-deepBlue font-semibold text-2xl mt-4">
            Master Mariner Leadership
          </h2>
          <p className="mt-4 text-lightGray text-base">
            Led by experienced maritime professionals with proven international
            expertise and industry knowledge. We combine practical experience
            with strategic insight to deliver dependable solutions across every
            stage of your maritime operations.
          </p>
        </div>
        <div className="col-span-12 md:col-span-7 space-y-6">
          <div
            data-reveal
            data-reveal-from="right"
            className="p-6 bg-lightPink rounded-xl flex gap-4 items-center"
          >
            <img
              data-reveal
              data-reveal-scale="0.8"
              src="/globe.svg"
              alt="globe"
              loading="lazy"
              className="size-11"
            />
            <div className="space-y-2">
              <h2 className="font-heading text-deepBlue font-semibold text-2xl">
                International Experience
              </h2>
              <p className="text-lightGray text-base">
                Delivering trusted solutions across global maritime operations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-fit">
            <div
              data-reveal
              data-reveal-from="left"
              className="p-6 bg-paleYellow rounded-xl flex gap-4 items-center h-full"
            >
              <img
                data-reveal
                data-reveal-scale="0.8"
                src="/headset.svg"
                alt="headset"
                loading="lazy"
                className="size-11"
              />
              <div className="space-y-4">
                <h2 className="font-heading text-deepBlue font-semibold text-2xl">
                  24/7 Operations
                </h2>
                <p className="text-lightGray text-base">
                  Round-the-clock support whenever you need it. We're ready
                  whenever your business needs us.
                </p>
              </div>
            </div>
            <div
              data-reveal
              data-reveal-from="right"
              className="p-6 bg-paleGreen rounded-xl flex gap-4 items-center h-full"
            >
              <img
                data-reveal
                data-reveal-scale="0.8"
                src="/scale.svg"
                alt="scale"
                loading="lazy"
                className="size-11"
              />
              <div className="space-y-4">
                <h2 className="font-heading text-deepBlue font-semibold text-2xl">
                  Integrity And Transparency
                </h2>
                <p className="text-lightGray text-base">
                  Transparent disbursements and honest reporting, always.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          data-reveal
          data-reveal-from="left"
          className="p-6 bg-lightBrown rounded-xl flex gap-4 items-center h-full"
        >
          <img
            data-reveal
            data-reveal-scale="0.8"
            src="/shield.svg"
            alt="shield"
            loading="lazy"
            className="size-11"
          />
          <div className="space-y-4">
            <h2 className="font-heading text-deepBlue font-semibold text-2xl">
              Compliance
            </h2>
            <p className="text-lightGray text-base">
              We operate in line with international maritime regulations. Every
              service follows recognized HSSEQ standards and industry best
              practices. Compliance and quality remain central to our
              operations.
            </p>
          </div>
        </div>
        <div
          data-reveal
          data-reveal-from="right"
          className="p-6 bg-paleWhite rounded-xl flex gap-4 items-center h-full"
        >
          <img
            data-reveal
            data-reveal-scale="0.8"
            src="/anchor.svg"
            alt="anchor"
            loading="lazy"
            className="size-11"
          />
          <div className="space-y-4">
            <h2 className="font-heading text-deepBlue font-semibold text-2xl">
              Operational Excellence
            </h2>
            <p className="text-lightGray text-base">
              We deliver efficient solutions that keep your operations running
              smoothly. Every project is executed with precision and
              reliability. Our focus is on safety and performance
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}