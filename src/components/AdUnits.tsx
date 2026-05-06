import { AdSlot } from "@/components/AdSlot";

export function HeaderAd() {
  const slot = process.env.NEXT_PUBLIC_ADSENSE_HEADER_SLOT;
  if (!slot) return null;

  return (
    <div className="min-h-[90px]">
      <AdSlot slot={slot} format="auto" className="my-4 md:my-6" />
    </div>
  );
}

export function InArticleAd() {
  const slot = process.env.NEXT_PUBLIC_ADSENSE_IN_ARTICLE_SLOT;
  if (!slot) return null;

  return (
    <div className="min-h-[120px]">
      <AdSlot
        slot={slot}
        format="fluid"
        layout="in-article"
        className="my-6 md:my-8"
      />
    </div>
  );
}

export function FooterAd() {
  const slot = process.env.NEXT_PUBLIC_ADSENSE_FOOTER_SLOT;
  if (!slot) return null;

  return (
    <div className="min-h-[90px]">
      <AdSlot slot={slot} format="auto" className="my-6 md:my-8" />
    </div>
  );
}
