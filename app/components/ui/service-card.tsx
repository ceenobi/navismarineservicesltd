import { RiArrowRightLine } from "@remixicon/react";
import { useRef } from "react";
import { Link, useLocation } from "react-router";
import { useHoverTilt } from "~/lib/animations";
import type { services } from "~/lib/constants";
import { cn } from "~/lib/utils";

export function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  useHoverTilt(cardRef, 6);
  const location = useLocation()
  const isHome = location.pathname === "/";

  return (
    <div
      ref={cardRef}
      data-reveal
      data-reveal-scale="0.96"
      className={cn("bg-white p-4 rounded-lg shadow text-center md:text-left overflow-hidden flex flex-col justify-between items-center md:items-start animate-in fade-in slide-in-from-bottom-4 transition-[box-shadow,transform] duration-300 ease-out hover:shadow-lg", !isHome && "border border-deepBlue/20")}
       style={{ animationDelay: `${index * 100}ms` }}
    >
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        decoding="async"
        className="size-13 object-cover rounded-md"
      />
      <div>
        <h3 className="font-heading text-deepBlue font-semibold text-xl mt-4">
          {service.title}
        </h3>
        <p className="text-lightGray text-sm mt-2 text-balance">
          {service.description}
        </p>
      </div>
      <Link
        to={service.href}
        prefetch="intent"
        className="group mt-4 inline-flex gap-2 items-center text-deepBlue hover:text-deepOrange transition-colors duration-300 ease-in font-medium"
      >
        Explore {service.title}{" "}
        <RiArrowRightLine
          size={18}
          className="transition-transform duration-300 ease-in group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
