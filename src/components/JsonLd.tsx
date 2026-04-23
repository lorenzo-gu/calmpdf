import { SITE } from "@/lib/site";
import type { Tool } from "@/content/tools";

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/logo.png`,
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
      }}
    />
  );
}

export function SoftwareAppJsonLd({ tool }: { tool: Tool }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: `${SITE.name} — ${tool.h1}`,
        applicationCategory: "UtilityApplication",
        operatingSystem: "Any (web browser)",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: tool.description,
        url: `${SITE.url}/${tool.slug}`,
      }}
    />
  );
}

export function HowToJsonLd({ tool }: { tool: Tool }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `How to ${tool.h1.toLowerCase()} with ${SITE.name}`,
        description: tool.description,
        step: tool.steps.map((text, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: `Step ${i + 1}`,
          text,
        })),
      }}
    />
  );
}

export function FaqJsonLd({ tool }: { tool: Tool }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: tool.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ tool }: { tool: Tool }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: tool.h1, item: `${SITE.url}/${tool.slug}` },
        ],
      }}
    />
  );
}
