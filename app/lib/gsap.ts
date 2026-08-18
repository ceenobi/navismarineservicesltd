import { gsap } from "gsap/dist/gsap.js";
import { useEffect, useLayoutEffect } from "react";

export { gsap };

const useIsomorphicLayoutEffect =
  typeof document !== "undefined" ? useLayoutEffect : useEffect;

interface UseGSAPConfig {
  scope?: React.RefObject<HTMLElement | null>;
  dependencies?: React.DependencyList;
}

export function useGSAP(
  callback: () => (() => void) | undefined,
  config: UseGSAPConfig = {}
): void {
  const { scope, dependencies = [] } = config;
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(callback, scope);
    return () => ctx.revert();
  }, dependencies);
}
