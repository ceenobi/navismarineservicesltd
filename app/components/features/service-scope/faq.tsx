import { useRef } from "react";
import { Badge } from "~/components/ui/badge";
import { useReveal, useSplitWords } from "~/lib/animations";
import { serviceFaqs } from "~/lib/constants";

export default function FAQ({ slug }: { slug: string }) {
  const scope = useRef<HTMLDivElement>(null);
  const faqs = serviceFaqs[slug] ?? [];

  useReveal(scope, { target: "[data-reveal]" });
  useSplitWords(scope, "[data-split]");

  if (faqs.length === 0) {
    return null;
  }

  return (
    <div className="relative z-10 bg-mainWhite">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <div
        ref={scope}
        className="max-w-6xl mx-auto py-20 px-4 md:px-8 space-y-10"
      >
        <Badge data-reveal className="bg-paleBlue uppercase text-deepBlue p-4 text-base font-normal">
          faq
        </Badge>
        <h2
          data-split
          className="font-heading text-deepBlue font-semibold text-[34px] sm:text-[42px] xl:text-[38px] text-balance leading-tight"
        >
          Frequently Asked <span className="text-deepOrange">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              data-reveal
              className="group bg-paleWhite rounded-lg overflow-hidden border border-deepBlue/10"
            >
              <summary className="flex justify-between gap-4 items-center cursor-pointer list-none p-5 font-heading text-deepBlue font-semibold text-lg select-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="shrink-0 text-deepOrange text-2xl font-light leading-none transition-transform duration-300 ease-out group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-lightGray text-base text-balance">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
