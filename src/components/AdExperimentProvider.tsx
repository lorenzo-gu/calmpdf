"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AD_DENSITY_VARIANTS, AD_EXPERIMENT_KEY, pickAdDensityVariant, type AdDensityVariant } from "@/lib/adExperiment";

type AdExperimentContextValue = {
  variant: AdDensityVariant;
};

const AdExperimentContext = createContext<AdExperimentContextValue>({ variant: "medium" });

function isAdDensityVariant(value: string): value is AdDensityVariant {
  return AD_DENSITY_VARIANTS.includes(value as AdDensityVariant);
}

export function AdExperimentProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<AdDensityVariant>("medium");

  useEffect(() => {
    const stored = window.localStorage.getItem(AD_EXPERIMENT_KEY);
    if (stored && isAdDensityVariant(stored)) {
      setVariant(stored);
      return;
    }

    const assigned = pickAdDensityVariant();
    window.localStorage.setItem(AD_EXPERIMENT_KEY, assigned);
    setVariant(assigned);
  }, []);

  useEffect(() => {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) {
      gtag("event", "ad_density_assigned", {
        experiment_name: AD_EXPERIMENT_KEY,
        variant,
      });
    }
  }, [variant]);

  const value = useMemo(() => ({ variant }), [variant]);

  return <AdExperimentContext.Provider value={value}>{children}</AdExperimentContext.Provider>;
}

export function useAdExperiment() {
  return useContext(AdExperimentContext);
}
