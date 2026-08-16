import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

let scrollTriggerReady: Promise<void> | null = null;

async function ensureScrollTrigger(): Promise<void> {
  if (typeof window === "undefined") return;
  if (!scrollTriggerReady) {
    scrollTriggerReady = import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);
    });
  }
  await scrollTriggerReady;
}

const MOTION_QUERY = "(prefers-reduced-motion: no-preference)";

export const prefersMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia(MOTION_QUERY).matches;

export interface RevealOptions {
  target?: string;
  y?: number;
  scale?: number;
  stagger?: number;
  duration?: number;
  delay?: number;
  scrub?: boolean;
  start?: string;
  toggleActions?: string;
}

export function useReveal(
  scopeRef: React.RefObject<HTMLElement | null>,
  options: RevealOptions = {}
) {
  const {
    target = "[data-reveal]",
    y = 28,
    scale,
    stagger = 0.12,
    duration = 0.55,
    delay = 0,
    scrub = false,
    start = "top 85%",
    toggleActions = "play none none reverse",
  } = options;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      void ensureScrollTrigger().then(() => mm.add(MOTION_QUERY, () => {
        const targets = gsap.utils.toArray(target) as HTMLElement[];

        const perElFrom = (): gsap.TweenVars => {
          const fromX: gsap.TweenValue = (i: number, el: Element) => {
            const dir = (el as HTMLElement).dataset.revealFrom;
            if (dir === "left") return -48;
            if (dir === "right") return 48;
            return 0;
          };
          const fromY: gsap.TweenValue = (i: number, el: Element) => {
            const dir = (el as HTMLElement).dataset.revealFrom;
            if (dir === "left" || dir === "right") return 0;
            return y;
          };
          const fromScale: gsap.TweenValue = (i: number, el: Element) => {
            const elScale = (el as HTMLElement).dataset.revealScale;
            if (elScale !== undefined) return Number(elScale);
            return scale ?? 1;
          };
          return { opacity: 0, x: fromX, y: fromY, scale: fromScale };
        };

        const toVars: gsap.TweenVars = {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transformOrigin: "center",
          duration,
          delay,
          ease: "power3.out",
          clearProps: "transform,opacity",
        };

        if (scrub) {
          targets.forEach((el) => {
            gsap.fromTo(
              el,
              { y: y * 0.4, opacity: 0.6 },
              {
                y: 0,
                opacity: 1,
                ease: "none",
                scrollTrigger: { trigger: el, start, scrub: true },
              }
            );
          });
        } else if (targets.length > 1 && stagger > 0) {
          gsap.fromTo(targets, perElFrom(), {
            ...toVars,
            stagger,
            scrollTrigger: { trigger: targets[0], start, toggleActions },
          });
        } else {
          targets.forEach((el) => {
            gsap.fromTo(el, perElFrom(), {
              ...toVars,
              scrollTrigger: { trigger: el, start, toggleActions },
            });
          });
        }
      }));
      return () => mm.revert();
    },
    { scope: scopeRef, dependencies: [stagger, duration, delay, y, scale, scrub, start, toggleActions] }
  );
}

export function useSplitWords(
  scopeRef: React.RefObject<HTMLElement | null>,
  selector = "[data-split]"
) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope || !prefersMotion()) return;

    const headings = gsap.utils.toArray<HTMLElement>(selector, scope);
    let cancelled = false;

    void ensureScrollTrigger().then(() => {
      if (cancelled) return;

    interface WordToken {
      word: string;
      className?: string;
    }

    const tokenize = (nodes: Node[], inheritClass?: string): WordToken[] => {
      const tokens: WordToken[] = [];
      nodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const words = (node.textContent ?? "").split(/\s+/).filter(Boolean);
          words.forEach((w) =>
            tokens.push({ word: w, className: inheritClass })
          );
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement;
          const cls = [inheritClass, el.className]
            .filter(Boolean)
            .join(" ");
          tokens.push(...tokenize(Array.from(el.childNodes), cls));
        }
      });
      return tokens;
    };

    headings.forEach((heading) => {
      const originalNodes = Array.from(heading.childNodes);
      const fullText = heading.textContent ?? "";
      heading.setAttribute("aria-label", fullText);

      const mask = document.createElement("span");
      mask.className = "block overflow-hidden";
      heading.textContent = "";
      heading.appendChild(mask);

      const inner = document.createElement("span");
      inner.className = "block";
      inner.setAttribute("aria-hidden", "true");
      mask.appendChild(inner);

      const tokens = tokenize(originalNodes);
      tokens.forEach((token, i) => {
        if (i > 0) {
          inner.appendChild(document.createTextNode(" "));
        }
        const w = document.createElement("span");
        w.className =
          "inline-block will-change-transform" +
          (token.className ? ` ${token.className}` : "");
        w.style.display = "inline-block";
        w.style.transform = "translateY(110%)";
        w.style.opacity = "0";
        w.textContent = token.word;
        inner.appendChild(w);
      });

      const wordSpans = inner.querySelectorAll<HTMLElement>(
        "span[class*='will-change-transform']"
      );
      gsap.to(wordSpans, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.03,
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: heading, start: "top 85%" },
      });
    });
    });

    return () => {
      cancelled = true;
      headings.forEach((heading) => {
        const label = heading.getAttribute("aria-label");
        if (label) {
          heading.textContent = label;
          heading.removeAttribute("aria-label");
        }
      });
    };
  }, [scopeRef, selector]);
}

export function useCountUp(
  scopeRef: React.RefObject<HTMLElement | null>,
  selector = "[data-count]"
) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      void ensureScrollTrigger().then(() => mm.add(MOTION_QUERY, () => {
        const nums = gsap.utils.toArray<HTMLElement>(selector);
        nums.forEach((el) => {
          const raw = el.dataset.count ?? el.textContent ?? "";
          const isNumeric = /^\d+$/.test(raw);
          const target = Number(raw);

          if (isNumeric) {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 1.6,
              ease: "power2.out",
              snap: { val: 1 },
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
              onUpdate: () => {
                el.textContent = String(Math.round(obj.val));
              },
            });
          } else if (/^[A-Z]$/.test(raw)) {
            const targetCode = raw.charCodeAt(0);
            const startCode = 65;
            const obj = { code: startCode };
            gsap.to(obj, {
              code: targetCode,
              duration: 1.4,
              ease: "power2.out",
              snap: { code: 1 },
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
              onUpdate: () => {
                el.textContent = String.fromCharCode(Math.round(obj.code));
              },
            });
          }
        });
      }));
      return () => mm.revert();
    },
    { scope: scopeRef }
  );
}

export function useHoverTilt(
  ref: React.RefObject<HTMLElement | null>,
  intensity = 6
) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!prefersMotion()) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const xTo = gsap.quickTo(el, "rotationY", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(el, "rotationX", { duration: 0.4, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      xTo(px * intensity);
      yTo(-py * intensity);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.style.transformStyle = "preserve-3d";
    el.style.perspective = "800px";
    el.style.willChange = "transform";
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.style.willChange = "";
    };
  }, [ref, intensity]);
}
