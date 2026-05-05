# AdSense experiment: Auto Ads vs manual placements

## Scope

- Site: CalmPDF (all public pages with AdSense enabled).
- Objective: compare monetization performance and UX impact of Auto Ads vs current manual placements.
- Evaluation window: **May 6, 2026 to May 27, 2026** (3 weeks).

## Experiment setup

### Baseline (Control A)

- Existing manual ad units remain active as implemented in the app.
- No Auto Ads enabled for this cohort.

### Variant (Treatment B)

- Enable AdSense Auto Ads in the AdSense dashboard for the same site.
- Keep existing manual placements enabled (hybrid-compatible setup).
- In Auto Ads settings, enable in-page formats and anchors; keep ad load at default to start.

### Traffic split

- 50/50 split between Control A and Treatment B.
- Keep geo/device mix unchanged; do not change content or layout during the test window.

## Metrics to collect

### Revenue and engagement

- Page RPM (primary monetization KPI).
- Impression RPM.
- CTR.
- Coverage / fill behavior (where available in AdSense reporting).

### UX and quality guardrails

- Core Web Vitals trend by variant (LCP, INP, CLS).
- Bounce rate and session duration trend.
- Qualitative UX checks (ad overlap, intrusive placements, content readability).

## Reporting template

Record daily values, then compare weighted averages across the full window.

| Date (UTC) | Variant | Sessions | Pageviews | RPM | CTR | LCP p75 | INP p75 | CLS p75 | UX notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-05-06 | Control A |  |  |  |  |  |  |  |  |
| 2026-05-06 | Treatment B |  |  |  |  |  |  |  |  |

## Decision rubric

Choose the final strategy on **May 28, 2026** using these thresholds:

1. **Auto Ads** if Treatment B improves RPM by >= 8% with no material UX regression:
   - CLS change <= +0.03
   - no significant increase in bounce rate
   - no repeated intrusive-placement issues.
2. **Manual only** if Treatment B underperforms RPM or introduces UX regressions.
3. **Hybrid** if Treatment B increases RPM modestly (>= 3%) with acceptable UX and stable CWV.

## Final decision (provisional)

Given AdSense guidance that Auto Ads can optimize alongside existing ad units, the recommended default outcome to validate is **Hybrid** (Auto Ads + curated manual placements), pending measured results from this experiment window.

## Deliverables

- Completed daily metric table.
- One-page comparison summary with:
  - weighted KPI deltas,
  - UX findings,
  - final decision: Auto Ads, Manual, or Hybrid,
  - rollout/rollback plan.
