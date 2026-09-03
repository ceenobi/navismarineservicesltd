import type { MetaDescriptor } from "react-router";

export const SITE_NAME = "Navis Marine Services Ltd";
export const SITE_URL = "https://navismarineservicesltd.com";

export const CONTACT_EMAIL = "info@navismarineservicesltd.com";
export const CONTACT_PHONE_DISPLAY = "+2349136006703";
export const CONTACT_PHONE_TEL = "tel:+2349136006703";
export const CONTACT_LINKEDIN = "https://www.linkedin.com/company/navis-marine-services";
export const SITE_DESCRIPTION =
  "Navis Marine Services Ltd delivers premium Ship Agency, Marine Consultancy, HSSEQ, Marine Procurement and Integrated Maritime Solutions to shipowners, operators, charterers and offshore industries across Nigeria and the global shipping community.";

export const HOME_DESCRIPTION =
  "Premium ship agency, marine consultancy, HSSEQ, procurement and logistics for shipowners, charterers and offshore industries across Nigeria and beyond.";

export const ABOUT_DESCRIPTION =
  "Navis Marine Services is a Nigerian maritime company delivering premium ship agency, consultancy, HSSEQ, procurement and logistics with international standards.";

export const SERVICES_DESCRIPTION =
  "Explore Navis Marine Services: ship agency, marine consultancy, HSSEQ, marine procurement, logistics and executive concierge for the global shipping community.";

export const CONTACT_DESCRIPTION =
  "Get in touch with Navis Marine Services for ship agency, marine consultancy, HSSEQ, procurement and logistics across Nigeria and global ports.";

export const OG_IMAGE = "/og-image.png";
export const OG_IMAGE_ABS = `${SITE_URL}${OG_IMAGE}`;
export const OG_IMAGE_ALT = "Navis Marine Services Ltd — premium maritime services";
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
    { property: "og:image:alt", content: OG_IMAGE_ALT },
    { property: "og:image:width", content: String(OG_IMAGE_DIMENSIONS.width) },
    { property: "og:image:height", content: String(OG_IMAGE_DIMENSIONS.height) },
    { property: "og:locale", content: "en_NG" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: OG_IMAGE_ALT },
    { name: "twitter:url", content: url },
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
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    description: SITE_DESCRIPTION,
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
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_TEL.replace("tel:", ""),
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

interface ServiceJsonLdOptions {
  name: string;
  description: string;
  path: string;
  image?: string;
  areaServed?: string;
}

export function serviceJsonLd({
  name,
  description,
  path,
  image,
  areaServed = "Nigeria",
}: ServiceJsonLdOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    image: image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : OG_IMAGE_ABS,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT_EMAIL,
    },
    areaServed: { "@type": "Country", name: areaServed },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
