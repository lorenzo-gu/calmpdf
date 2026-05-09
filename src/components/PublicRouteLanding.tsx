import Link from "next/link";

type PublicRouteLandingProps = {
  title: string;
  description: string;
  related?: { href: string; label: string }[];
};

export function PublicRouteLanding({ title, description, related = [] }: PublicRouteLandingProps) {
  const hubLinks = [
    { href: "/tools", label: "All PDF Tools" },
    { href: "/how-to", label: "How-to Guides" },
  ];
  const relatedLinks = [...related, ...hubLinks];

  return (
    <article className="mx-auto max-w-3xl px-4 md:px-6 py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-calm-text-secondary">
        <Link href="/" className="no-underline hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-calm-text-primary">{title}</span>
      </nav>

      <h1 className="mt-4 text-3xl md:text-4xl font-semibold">{title}</h1>
      <p className="mt-4 text-lg text-calm-text-secondary">{description}</p>

      <div className="mt-8 card">
        <h2 className="text-xl font-semibold">What to expect</h2>
        <p className="mt-3 text-calm-text-secondary">
          This page is live and indexable. Tool-specific processing UX is being rolled out in phases.
          CalmPDF keeps every workflow private by running directly in your browser.
        </p>
      </div>

      {relatedLinks.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Related pages</h2>
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {relatedLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="tool-card block">
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
