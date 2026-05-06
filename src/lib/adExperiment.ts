export type AdDensityVariant = "low" | "medium" | "high";

export const AD_EXPERIMENT_KEY = "ad_density_v1";

export const AD_DENSITY_VARIANTS: AdDensityVariant[] = ["low", "medium", "high"];

export function pickAdDensityVariant(seed = Math.random()): AdDensityVariant {
  if (seed < 1 / 3) return "low";
  if (seed < 2 / 3) return "medium";
  return "high";
}
