declare module "gsap/dist/gsap.js" {
  export * from "gsap";
  export { gsap as default } from "gsap";
}

declare module "gsap/dist/ScrollTrigger.js" {
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  export { ScrollTrigger };
}