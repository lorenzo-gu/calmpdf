# CalmPDF design modernization audit + implementation plan (LG-94)

## Goal
Modernize CalmPDF from a dense utility directory into a calm, private, product-led PDF workspace that feels warm, spacious, and trustworthy.

## North-star principles
- **Calm, modern visual language**: softer surfaces, more whitespace, clearer hierarchy.
- **Privacy-first motif**: privacy signals must be visible in high-intent moments (upload, processing, result, delete/reset).
- **Editorial content quality**: SEO/support content should read as intentional guidance, not link dumps.
- **Reusable systems first**: decisions land as tokens/components/layout patterns to keep pages consistent.

## Current-state audit summary

### 1) Information architecture and layout
- Tool pages are mostly composed from `ToolShell` + per-tool components, which is a good base for consistent redesign.
- Homepage and route landings still carry dense content sections and utility-directory visual weight.
- Related tools and “how-to” discovery patterns are not yet unified into a single card system.

### 2) Interaction states
- Core tools already support key processing flows in implementation, but state visuals are not consistently articulated as a shared design language.
- Upload, selected, processing, success, and error states need a reusable visual/state spec across all tool experiences.

### 3) Trust and privacy visibility
- Privacy messaging exists but is inconsistently elevated across homepage, tool hero, and result sections.
- Opportunity: introduce persistent “privacy proof” primitives (copy, icons, inline assurances, reset behavior cues).

### 4) Design system maturity
- Tailwind foundation exists (`tailwind.config.ts`, `src/app/globals.css`) but “modernization tokens” (surface tiers, spacing rhythm, emphasis colors, motion, radius/elevation patterns) are not formalized as an explicit design-system layer.

### 5) Content density and editorial polish
- How-to and route pages are useful, but several modules can be reframed into cleaner editorial cards, step rails, and related reading blocks.

## Implementation track plan (child-issue blueprint)

### Track A — Design system tokens + primitives
**Scope**
- Define semantic color tokens (calm neutrals, trust accents, success/error/warn).
- Define spacing scale, radii, shadows, border treatments, and motion durations/easing.
- Add typography hierarchy conventions for tool pages and editorial pages.

**Deliverables**
- Token updates in Tailwind/theme and global styles.
- Lightweight UI primitives documentation (buttons, cards, panels, badges, status chips).

**Acceptance checks**
- At least 3 high-traffic pages consume the new semantic tokens.
- Old one-off utility styling reduced in touched surfaces.

---

### Track B — Reusable ToolShell and tool-page structure
**Scope**
- Evolve `ToolShell` into a stronger canonical frame with slots for: headline, privacy proof, dropzone/work area, status rail, related tools, and guide links.
- Normalize vertical rhythm and section ordering across core tool pages.

**Deliverables**
- Updated `ToolShell` API and migrated core tools (merge, split, compress, edit).

**Acceptance checks**
- Core tools follow one shared skeleton.
- “What happens to my files?” style privacy block appears consistently.

---

### Track C — FileDropzone and file/result state redesign
**Scope**
- Redesign `Dropzone` with calm empty state, stronger selected-file clarity, and progress/result affordances.
- Standardize messaging/CTAs for empty, selected, processing, success, error.

**Deliverables**
- Updated dropzone component and state variants.
- Shared state copy patterns for all tool components.

**Acceptance checks**
- Every core flow visibly covers: empty → selected → processing → success/error.
- Error recovery path is explicit (replace file, retry, reset).

---

### Track D — Homepage modernization (hero, trust, categories)
**Scope**
- Redesign homepage hero to foreground product value and privacy promise.
- Convert tool lists into editorial category modules (not dense text/link blocks).
- Add trust/proof strip (privacy behaviors, browser-only handling, deletion/reset cues).

**Deliverables**
- Refreshed homepage composition and card system.

**Acceptance checks**
- Homepage first viewport communicates product value + privacy in <5 seconds.
- Category modules are scannable and balanced on mobile + desktop.

---

### Track E — Related-tool + guide card systems
**Scope**
- Create shared cards for related tools and how-to guides (thumbnail/icon, title, concise intent-based description, CTA).
- Apply to tool pages and how-to hub.

**Deliverables**
- Card components and usage in at least two page types.

**Acceptance checks**
- Replaced dense “link clusters” on touched pages with card modules.
- Card spacing/typography matches tokenized design language.

---

### Track F — How-to hub editorial redesign
**Scope**
- Redesign `/how-to` landing as an editorial hub with featured guides, task clusters, and clean reading hierarchy.
- Standardize article shell spacing and progression cues.

**Deliverables**
- Updated hub layout + article card rails.

**Acceptance checks**
- Hub supports clear journey: discover task → pick guide → execute with tool CTA.

---

### Track G — Navigation + mega-menu improvements
**Scope**
- Improve header navigation clarity by grouping tasks by intent.
- Add calm mega-menu structure with concise descriptions and quick paths.

**Deliverables**
- Updated `Header` interaction model and mobile nav parity.

**Acceptance checks**
- Users can reach top tasks in ≤2 interactions from homepage.
- Mobile nav preserves discoverability without visual clutter.

---

### Track H — Unfinished/placeholder page handling
**Scope**
- Introduce consistent pattern for incomplete tools/pages: transparent status, alternatives, and notify/request flow.

**Deliverables**
- Placeholder state module and rollout to flagged pages.

**Acceptance checks**
- No “dead-end” unfinished pages in primary nav/indexed routes.

---

### Track I — Ad placement and visual cleanliness rules
**Scope**
- Define ad placement guardrails so ads do not interrupt critical task flow or reduce trust.
- Align ad modules with new spacing and hierarchy.

**Deliverables**
- Placement rules document + touched component/layout updates.

**Acceptance checks**
- No ads between primary action and immediate result state on core tools.

---

### Track J — Microcopy and brand voice polish
**Scope**
- Unify voice across tool CTAs, helper text, empty/error states, and privacy assurances.
- Replace utilitarian phrasing with calm, direct, transparent language.

**Deliverables**
- Microcopy pass on core pages and state strings.

**Acceptance checks**
- Consistent tone and terminology across homepage + core tools + how-to hub.

## Phasing recommendation
1. **Foundation**: Track A (tokens), B (ToolShell), C (Dropzone states).
2. **High-impact surfaces**: Track D (homepage), G (nav), E (cards).
3. **Content system**: Track F (how-to hub), J (microcopy).
4. **Quality/completion**: Track H (placeholder handling), I (ads cleanliness).

## QA checklist for modernization work
- State coverage: empty / selected / processing / success / error for each core tool.
- Privacy proof visible on homepage and all core tool frames.
- Card/editorial modules replace dense link blocks on touched pages.
- Tokens/components reused instead of one-off style patches.
- Mobile spacing and tap targets remain comfortable.

## Definition of done for LG-94
- Child issues are implementation-ready and independently shippable.
- Shared design tokens and reusable components are adopted on core paths.
- Core user flows have explicit state design and recovery paths.
- Privacy promise is visible, consistent, and behaviorally reinforced.
