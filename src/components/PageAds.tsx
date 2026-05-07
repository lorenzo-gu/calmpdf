import { AdSlot } from "@/components/AdSlot";

const HEADER_AD_SLOT = process.env.NEXT_PUBLIC_ADSENSE_HEADER_SLOT ?? "3722029870";
const IN_ARTICLE_AD_SLOT = process.env.NEXT_PUBLIC_ADSENSE_IN_ARTICLE_SLOT ?? "3722029870";
const FOOTER_AD_SLOT = process.env.NEXT_PUBLIC_ADSENSE_FOOTER_SLOT ?? "3722029870";

export function HeaderAd() {
  return (
    <AdSlot
      slot={HEADER_AD_SLOT}
      format="auto"
      className="mt-3 mb-4"
      label="Sponsored"
    />
  );
}

export function InArticleAd() {
  return (
    <AdSlot
      slot={IN_ARTICLE_AD_SLOT}
      format="fluid"
      layout="in-article"
      className="my-8"
      label="Sponsored"
    />
  );
}

export function FooterAd() {
  return (
    <AdSlot
      slot={FOOTER_AD_SLOT}
      format="auto"
      className="mt-8 mb-6"
      label="Sponsored"
    />
  );
}
