import { useRef } from "react";
import { ServiceCard } from "~/components/ui/service-card";
import { servicelist } from "~/lib/constants";


export default function ServiceList() {
    const mainScope = useRef<HTMLDivElement>(null);
  return (
    <div className="relative z-10 bg-mainWhite">
    <div
      ref={mainScope}
      className="max-w-6xl mx-auto py-20 px-4 md:px-8 space-y-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicelist.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
