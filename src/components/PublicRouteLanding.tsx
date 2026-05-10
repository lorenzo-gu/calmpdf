import Link from "next/link";

type PublicRouteLandingProps = {
  title: string;
  description: string;
  related?: { href: string; label: string }[];
  availability?: "live" | "comingSoon";
  comingSoonTitle?: string;
  comingSoonDescription?: string;
};

export function PublicRouteLanding({
  title,
  description,
  related = [],
  availability = "live",
  comingSoonTitle = `${title} is coming soon`,
  comingSoonDescription,
}: PublicRouteLandingProps) {
  const hubLinks = [
    { href: "/tools", label: "All PDF Tools" },
    { href: "/how-to", label: "How-to Guides" },
  ];
  const relatedLinks = [...related, ...hubLinks];

  return (
    <article className="mx-auto max-w-3xl px-4 md:px-6 py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-sage-700">
        <Link href="/" className="no-underline hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-sage-900">{title}</span>
      </nav>

      <h1 className="mt-4 text-3xl md:text-4xl font-semibold">{title}</h1>
      <p className="mt-4 text-lg text-sage-700">{description}</p>

      {availability === "comingSoon" ? (
        <div className="mt-8 card">
          <p className="inline-flex rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sage-800">
            Coming soon
          </p>
          <h2 className="mt-3 text-xl font-semibold">{comingSoonTitle}</h2>
          <p className="mt-3 text-sage-700">
            {comingSoonDescription ??
              "We’re building a private, browser-only workflow for this tool. In the meantime, use the alternatives below."}
          </p>
        </div>
      ) : null}

      {relatedLinks.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Related pages</h2>
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {relatedLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="card block no-underline hover:border-sage-300 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
