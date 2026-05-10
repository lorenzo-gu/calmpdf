import { AdSlot } from "@/components/AdSlot";

const AD_LABEL = "Sponsored";

export function HeaderAd() {
  const slot = process.env.NEXT_PUBLIC_ADSENSE_HEADER_SLOT;
  if (!slot) return null;

  return (
    <div className="min-h-[110px]">
      <AdSlot slot={slot} format="auto" className="mt-6 mb-2" label={AD_LABEL} />
    </div>
  );
}


export function InArticleAd() {
  const slot = process.env.NEXT_PUBLIC_ADSENSE_IN_ARTICLE_SLOT;
  if (!slot) return null;

  return (
    <div className="min-h-[140px]">
      <AdSlot
        slot={slot}
        format="fluid"
        layout="in-article"
        className="my-10 md:my-12"
        label={AD_LABEL}
      />
    </div>
  );
}

export function FooterAd() {
  const slot = process.env.NEXT_PUBLIC_ADSENSE_FOOTER_SLOT;
  if (!slot) return null;

  return (
    <div className="min-h-[110px]">
      <AdSlot slot={slot} format="auto" className="mt-12 mb-8" label={AD_LABEL} />
    </div>
  );
}
