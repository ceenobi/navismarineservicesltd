import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import {
  OG_IMAGE_ABS,
  SITE_DESCRIPTION,
  SITE_NAME,
  organizationJsonLd,
  professionalServiceJsonLd,
  websiteJsonLd,
} from "./lib/seo";

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "/navisfav.png",
    sizes: "any",
  },
  {
    rel: "apple-touch-icon",
    href: "/navisfav.png",
  },
];

export function meta(): Route.MetaDescriptors {
  return [
    { title: `${SITE_NAME} | Ship Agency & Maritime Solutions` },
    { name: "description", content: SITE_DESCRIPTION },
    { name: "robots", content: "index, follow" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: OG_IMAGE_ABS },
    { property: "og:locale", content: "en_NG" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a2342" />
        <Meta />
        <Links />
        {[organizationJsonLd(), websiteJsonLd(), professionalServiceJsonLd()].map(
          (data) => (
            <script
              key={data["@type"]}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
          )
        )}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-svh flex items-center justify-center bg-paleWhite px-4 py-16">
      <div className="max-w-xl w-full text-center space-y-6">
        <p className="text-deepOrange font-display font-semibold text-lg tracking-wide uppercase">
          Navis Marine Services
        </p>
        <h1 className="font-display text-deepBlue font-bold text-6xl sm:text-7xl leading-none">
          {message}
        </h1>
        <p className="text-lightGray text-lg text-balance">{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto text-left text-sm bg-white border border-border rounded-lg shadow-sm">
            <code>{stack}</code>
          </pre>
        )}
        <div className="pt-2">
          <a
            href="/"
            className="inline-block bg-deepOrange hover:bg-deepOrange/80 text-mainWhite px-8 py-4 rounded-full font-medium transition-[background-color] duration-300 ease-in-out"
          >
            Return Home
          </a>
        </div>
      </div>
    </main>
  );
}
