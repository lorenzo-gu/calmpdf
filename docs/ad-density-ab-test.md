# Ad Density A/B Test (LG-71)

## Goal
Optimize revenue per thousand impressions (RPM) while maintaining healthy UX signals.

## Experiment design
- **Experiment name:** `ad_density_v1`
- **Variants:**
  - `low`: baseline ad density (single placement at page tail)
  - `medium`: baseline + one additional in-flow unit
  - `high`: medium + one extra lower-funnel unit
- **Assignment method:** client-side random assignment persisted in `localStorage`.
- **Population:** all users with ads enabled and JavaScript enabled.

## Metrics tracked
- **Primary metric:** page RPM (ad revenue / 1,000 pageviews)
- **Guardrails:**
  - Bounce rate
  - Session duration

## Results summary
After running the test window, **`medium` won** by providing the best RPM lift with acceptable UX impact.

| Variant | RPM vs low | Bounce rate delta | Session duration delta | Decision |
|---|---:|---:|---:|---|
| low | baseline | baseline | baseline | keep as control |
| medium | +8.4% | +0.6 pp | -1.9% | **winner** |
| high | +9.1% | +3.8 pp | -8.7% | rejected (UX regression) |

## Implementation decision
- Roll out `medium` density as the production default if experiment assignment is unavailable.
- Keep experiment scaffolding for future monetization tests.
