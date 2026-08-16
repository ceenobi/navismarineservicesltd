import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap/dist/gsap.js";

export { gsap };

const useIsomorphicLayoutEffect =
  typeof document !== "undefined" ? useLayoutEffect : useEffect;

interface UseGSAPConfig {
  scope?: React.RefObject<HTMLElement | null>;
  dependencies?: React.DependencyList;
}

export function useGSAP(
  callback: () => void | (() => void),
  config: UseGSAPConfig = {}
): void {
  const { scope, dependencies = [] } = config;
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(callback, scope);
    return () => ctx.revert();
  }, dependencies);
}