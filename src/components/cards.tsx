import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

type BaseCardProps = {
  href: string;
  title: string;
  description: string;
};

type RelatedToolCardProps = BaseCardProps & {
  icon?: ReactNode;
};

export function RelatedToolCard({ href, title, description, icon }: RelatedToolCardProps) {
  return (
    <Link
      href={href}
      className="group card no-underline h-full min-w-0 border-sand-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-sage-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sand-200 bg-sand-50 text-sage-700">
          {icon ?? <FileText className="h-5 w-5" />}
        </span>
        <div className="min-w-0">
          <h3 className="font-semibold text-sage-900 break-words">{title}</h3>
          <p className="mt-2 text-sm text-sage-700">{description}</p>
        </div>
      </div>
    </Link>
  );
}

type EditorialCardProps = BaseCardProps & {
  category?: string;
  readTime?: string;
};

export function EditorialCard({ href, title, description, category, readTime }: EditorialCardProps) {
  return (
    <Link
      href={href}
      className="group card no-underline h-full min-w-0 border-sand-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-sage-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
    >
      {(category || readTime) && (
        <p className="text-xs font-medium uppercase tracking-wide text-sage-600">
          {category}{category && readTime ? " · " : ""}{readTime}
        </p>
      )}
      <h3 className="mt-2 font-semibold text-sage-900 break-words">{title}</h3>
      <p className="mt-2 text-sm text-sage-700">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sage-800">
        Read guide
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
