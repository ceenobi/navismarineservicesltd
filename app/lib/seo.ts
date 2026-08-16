import type { MetaDescriptor } from "react-router";

export const SITE_NAME = "Navis Marine Services Ltd";
export const SITE_URL = "https://navismarineservicesltd.com";
export const SITE_DESCRIPTION =
  "Navis Marine Services Ltd delivers premium Ship Agency, Marine Consultancy, HSSEQ, Marine Procurement and Integrated Maritime Solutions to shipowners, operators, charterers and offshore industries across Nigeria and the global shipping community.";

export const OG_IMAGE = "/og-image.png";
export const OG_IMAGE_ABS = `${SITE_URL}${OG_IMAGE}`;
export const OG_IMAGE_DIMENSIONS = {
  width: 1200,
  height: 630,
};

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

interface SeoMetaOptions {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

export function seoMeta({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  image = OG_IMAGE_ABS,
  type = "website",
  noindex = false,
}: SeoMetaOptions): MetaDescriptor[] {
  const url = absoluteUrl(path);

  return [
    { title },
    { name: "description", content: description },
    ...(noindex
      ? [{ name: "robots", content: "noindex, nofollow" }]
      : [{ name: "robots", content: "index, follow" }]),
    { tagName: "link", rel: "canonical", href: url },

    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: String(OG_IMAGE_DIMENSIONS.width) },
    { property: "og:image:height", content: String(OG_IMAGE_DIMENSIONS.height) },
    { property: "og:locale", content: "en_NG" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

interface JsonLdOptions {
  path?: string;
}

export function organizationJsonLd({ path = "/" }: JsonLdOptions = {}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url,
    logo: `${SITE_URL}/navislogo.svg`,
    email: "info@navismarineservicesltd.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    description: SITE_DESCRIPTION,
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
}

export function professionalServiceJsonLd() {  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    image: OG_IMAGE_ABS,
    logo: `${SITE_URL}/navislogo.svg`,
    email: "info@navismarineservicesltd.com",
    telephone: "+2341234567890",
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    areaServed: "Global",
    openingHours: "Mo-Fr 08:00-17:00",
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ship Agency" } },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Maritime Consultancy" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "HSSEQ & Compliance" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Marine Procurement" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Marine Logistics" },
      },
    ],
  };
}
