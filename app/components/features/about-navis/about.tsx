import { useRef } from "react";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { useReveal, useSplitWords } from "~/lib/animations";
import { leadership } from "~/lib/constants";
import { cn } from "~/lib/utils";
import NavisWay from "../navis-way";

const stats = [
  { value: "16", suffix: "+", label: "Years of maritime experience" },
  { value: "24", suffix: "/7", label: "Operational support" },
  { value: "LNG", suffix: "/LPG", label: "Specialized expertise" },
  { value: "Global", suffix: "", label: "International reach" },
];

export default function AboutNavis() {
  const mainScope = useRef<HTMLDivElement>(null);
  const missionScope = useRef<HTMLDivElement>(null);
  const leadershipScope = useRef<HTMLDivElement>(null);
  const governanceScope = useRef<HTMLDivElement>(null);

  useReveal(mainScope, { target: "[data-reveal]" });
  useSplitWords(mainScope, "[data-split]");
  useReveal(missionScope, { target: "[data-reveal]" });
  useSplitWords(missionScope, "[data-split]");
  useReveal(leadershipScope, { target: "[data-reveal]" });
  useSplitWords(leadershipScope, "[data-split]");
  useReveal(governanceScope, { target: "[data-reveal]" });
  useSplitWords(governanceScope, "[data-split]");

  return (
    <>
      <div
        ref={mainScope}
        className="max-w-6xl mx-auto py-20 px-4 md:px-8 space-y-12"
      >
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
          <div className="col-span-12 md:col-span-6 space-y-6">
            <Badge
              data-reveal
              className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal"
            >
              About Navis
            </Badge>
            <h2
              data-split
              className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] xl:text-[38px] leading-tight text-balance"
            >
              Founded on{" "}
              <span className="text-deepOrange">watchkeeping discipline.</span>
            </h2>
            <div className="mt-20 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  data-reveal
                  className={cn(
                    "space-y-2 border-r border-r-gray-300",
                    (index === 1 || index === 3) && "border-r-0",
                  )}
                >
                  <p className="font-heading font-bold text-deepOrange text-3xl text-balance">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="text-deepBlue text-sm sm:text-lg text-balance leading-none">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 space-y-6">
            <p
              data-reveal
              className="mt-10 md:mt-0 text-lightGray text-base sm:text-lg text-balance"
            >
              Navis Marine Services Ltd is a Nigerian maritime company with an
              international outlook, established to deliver premium Ship Agency,
              Marine Consultancy, HSSEQ, Marine Procurement, Marine Logistics,
              and integrated maritime support services to the global shipping
              industry.{" "}
            </p>
            <p
              data-reveal
              className="text-lightGray text-base sm:text-lg text-balance"
            >
              Headquartered in Lagos, Nigeria, we combine international maritime
              expertise with deep local knowledge to provide seamless,
              efficient, and compliant support for shipowners, ship managers,
              operators, charterers, offshore energy companies, marine insurers,
              and other maritime stakeholders.
            </p>
            <p
              data-reveal
              className="text-lightGray text-base sm:text-lg text-balance"
            >
              Founded by a UK-certified Master Mariner with more than 16 years
              of international maritime experience, Navis was created with a
              simple purpose to redefine the standard of maritime services
              through professionalism, integrity, operational excellence, and
              trusted partnerships.
            </p>
            <p
              data-reveal
              className="text-lightGray text-base sm:text-lg text-balance"
            >
              At Navis, we recognize that every vessel call is critical. Every
              decision has commercial implications. Every delay has a cost. That
              is why we approach every assignment with the discipline,
              responsiveness, and attention to detail expected by the world’s
              leading shipping companies.
            </p>
            <p
              data-reveal
              className="text-lightGray text-base sm:text-lg text-balance"
            >
              Whether coordinating port calls, providing marine consultancy,
              supporting regulatory compliance, sourcing critical marine
              supplies, or delivering specialized operational support, our
              objective remains the same.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5 space-y-4">
            <img
              data-reveal
              data-reveal-from="left"
              src="https://res.cloudinary.com/ceenobi/image/upload/q_auto:best/v1786799205/clientproject/navis/ship1_ey3euh.webp"
              alt="Tug assisting a vessel in Lagos port"
              width="434"
              height="205"
              loading="lazy"
              decoding="async"
              className="h-51.25 w-full rounded-2xl"
            />
            <img
              data-reveal
              data-reveal-from="left"
              src="https://res.cloudinary.com/ceenobi/image/upload/q_auto:best/v1786799207/clientproject/navis/ship2_cw5iqp.webp"
              alt="Commercial vessel alongside at anchor"
              width="434"
              height="205"
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
              alt="Map of the West African coastline"
              width="773"
              height="442"
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-2xl"
            />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-12 items-center gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-7 space-y-8">
            <Badge
              data-reveal
              className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal"
            >
              our story
            </Badge>
            <h2
              data-split
              className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] xl:text-[38px] leading-tight text-balance"
            >
              The Story behind <span className="text-deepOrange">NAVIS</span>
            </h2>
            <div className="space-y-4">
              <p
                data-reveal
                className="text-lightGray text-base sm:text-lg text-balance"
              >
                Throughout my career at sea, I worked with ship agents across
                the world. The best agencies didn’t just handle port formalities
                they became trusted partners who anticipated challenges,
                communicated proactively and protected their clients’ interests.
              </p>

              <p
                data-reveal
                className="text-lightGray text-base sm:text-lg text-balance"
              >
                Those experiences inspired me to establish Navis Marine Services
                Ltd.
              </p>

              <p
                data-reveal
                className="text-lightGray text-base sm:text-lg text-balance"
              >
                Navis was founded to bridge the gap between traditional agency
                services and the level of professionalism, responsiveness and
                operational excellence that international shipowners deserve.
                Our goal is simple: to provide reliable maritime solutions built
                on trust, transparency and global best practice.
              </p>

              <p
                data-reveal
                className="text-lightGray text-base sm:text-lg text-balance"
              >
                Today, Navis is committed to connecting global shipping with
                dependable local expertise, creating long-term partnerships and
                delivering excellence across every maritime service we provide.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <img
              data-reveal
              data-reveal-from="right"
              src="https://res.cloudinary.com/ceenobi/image/upload/f_webp/e_trim/f_webp/q_auto:best/dpr_auto/clientproject/navis/NavisMarine_bwmed7.png"
              alt="Navis Marine vessel and mariner"
              width="427"
              height="542"
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-paleWhite py-20">
        <div
          ref={missionScope}
          className="max-w-6xl mx-auto py-10 px-4 md:px-8 space-y-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="space-y-3 col-span-12 md:col-span-7">
              <Badge
                data-reveal
                className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal"
              >
                our mission
              </Badge>
              <h2
                data-split
                className="w-full max-w-159.5 font-heading text-deepBlue font-semibold text-balance text-[34px] sm:text-[42px] xl:text-[38px] leading-tight"
              >
                Creating lasting value{" "}
                <span className="text-deepOrange">at every call</span>
              </h2>
            </div>
            <div className="space-y-4 col-span-12 md:col-span-5">
              <p
                data-reveal
                className="text-lightGray text-base sm:text-lg text-balance"
              >
                To deliver world-class ship agency, marine consultancy and
                integrated maritime solutions through professionalism,
                integrity, innovation and operational excellence, creating
                lasting value for our clients, partners and the global maritime
                industry.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="space-y-3 col-span-12 md:col-span-7">
              <Badge
                data-reveal
                className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal"
              >
                our vision
              </Badge>
              <h2
                data-split
                className="w-full max-w-159.5 font-heading text-deepBlue font-semibold text-balance text-[34px] sm:text-[42px] xl:text-[38px] leading-tight"
              >
                Africa's most trusted{" "}
                <span className="text-deepOrange">
                  maritime services company
                </span>
              </h2>
            </div>
            <div className="space-y-4 col-span-12 md:col-span-5">
              <p
                data-reveal
                className="text-lightGray text-base sm:text-lg text-balance tracking-[1%]"
              >
                To become Africa's most trusted and internationally respected
                maritime services company, recognised for excellence,
                innovation, integrity and enduring partnerships across the
                global shipping industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NavisWay />
      <div
        ref={leadershipScope}
        className="max-w-6xl mx-auto py-20 px-4 md:px-8 space-y-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 xl:gap-16">
          <div className="col-span-12 md:col-span-5">
            <div className="w-full max-w-90 mx-auto relative rounded-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/ceenobi/image/upload/v1786888724/clientproject/navis/bro-emeka_vpojld.webp"
                alt="Captain Michael C. Nwajiaku, Managing Director of Navis"
                width="441"
                height="730"
                data-reveal
                data-reveal-from="left"
                loading="lazy"
                decoding="async"
                className="w-full h-full"
              />
              <div
                data-reveal
                data-reveal-from="bottom"
                className="bg-deepBlue px-4 py-6 rounded-b-xl flex gap-2 items-start"
              >
                <img src="/iconsax-quote-up.svg" alt="" aria-hidden="true" />
                <div>
                  <p className="font-light text-sm text-mainWhite text-balance">
                    "Leadership is about earning trust through professionalism,
                    integrity and delivering on every commitment."
                  </p>
                  <Separator className="my-4 bg-gray-200/50" />
                  <div>
                    <h3 className="font-semibold text-base text-mainWhite">
                      CAPT. Michael C. Nwajiaku, AFNI
                    </h3>
                    <p className="mt-2 font-light text-sm text-deepOrange">
                      Managing Director
                    </p>
                    <p className="font-light text-sm text-mainWhite">
                      NAVIS MARINE SERVICES LTD.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 col-span-12 md:col-span-7 space-y-6">
            <Badge
              data-reveal
              className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal"
            >
              leadership
            </Badge>
            <h2
              data-split
              className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] xl:text-[38px] leading-tight text-balance"
            >
              Master Mariner{" "}
              <span className="text-deepOrange">at the helm.</span>
            </h2>
            <p
              data-reveal
              className="text-lightGray text-base sm:text-lg tracking-[1%]"
            >
              The Managing Director holds a Master Mariner certificate of
              competency and brings command experience across international
              trades together with senior shoreside leadership in operational,
              commercial and technical management.
            </p>
            <p
              data-reveal
              className="text-lightGray text-base sm:text-lg tracking-[1%]"
            >
              He leads the company's strategy, upholds the highest standards of
              professional conduct, and builds strong, long-term relationships
              with clients partners.
            </p>
            {leadership.map((item) => (
              <div
                key={item.id}
                data-reveal
                className="flex md:hidden lg:flex gap-3 items-start"
              >
                <img src={item.img} alt={item.title} width="52" height="52" />
                <div>
                  <h3 className="text-deepBlue font-semibold text-lg tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-lightGray text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-6">
          {leadership.map((item) => (
            <div key={item.id} data-reveal className="flex flex-col gap-3">
              <img src={item.img} alt={item.title} width="40" height="40" className="size-10" />
              <div>
                <h3 className="text-deepBlue font-semibold text-lg tracking-tight">
                  {item.title}
                </h3>
                <p className="text-lightGray text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-paleWhite py-20">
        <div ref={governanceScope} className="max-w-6xl mx-auto py-10 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="space-y-3">
              <Badge
                data-reveal
                className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal"
              >
                corporate governance
              </Badge>
              <h2
                data-split
                className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] xl:text-[38px] leading-tight text-balance"
              >
                Clear lines,{" "}
                <span className="text-deepOrange">clean books.</span>
              </h2>
            </div>
            <p
              data-reveal
              className="text-lightGray text-base sm:text-lg tracking-[1%]"
            >
              We uphold ethical business practices, transparency,
              accountability, and sound governance to build lasting trust with
              our stakeholders.
            </p>
          </div>
          <Separator className="my-8 bg-lightGray/30" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="space-y-3">
              <Badge
                data-reveal
                className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal"
              >
                HSSEQ Commitment
              </Badge>
              <h2
                data-split
                className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] xl:text-[38px] leading-tight text-balance"
              >
                Safety is <span className="text-deepOrange">the service.</span>
              </h2>
            </div>
            <p
              data-reveal
              className="text-lightGray text-base sm:text-lg tracking-[1%]"
            >
              Safety, quality, security, and environmental responsibility are
              embedded in every operation, ensuring compliance with
              international maritime standards.
            </p>
          </div>
          <Separator className="my-8 bg-lightGray/30" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="space-y-3">
              <Badge
                data-reveal
                className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal"
              >
                Sustainability
              </Badge>
              <h2
                data-split
                className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] xl:text-[38px] leading-tight text-balance"
              >
                Protecting the{" "}
                <span className="text-deepOrange">waters we work in.</span>
              </h2>
            </div>
            <p
              data-reveal
              className="text-lightGray text-base sm:text-lg tracking-[1%]"
            >
              We are committed to responsible maritime practices that protect
              the environment, support communities, and promote sustainable
              growth.
            </p>
          </div>
          <Separator className="my-8 bg-lightGray/30" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="space-y-3">
              <Badge
                data-reveal
                className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal"
              >
                Memberships
              </Badge>
              <h2
                data-split
                className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] xl:text-[38px] leading-tight text-balance"
              >
                Professional{" "}
                <span className="text-deepOrange">Memberships</span>
              </h2>
            </div>
            <div className="space-y-3">
              <p
                data-reveal
                className="text-lightGray text-base sm:text-lg tracking-[1%]"
              >
                Part of our commitment to professional development and
                professional memberships.
              </p>
              <Badge
                data-reveal
                className="bg-mainWhite rounded-none uppercase text-deepBlue p-6 text-base font-normal transition-colors duration-300 ease-in-out hover:bg-deepOrange hover:text-mainWhite"
              >
                The Nautical Institute
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
