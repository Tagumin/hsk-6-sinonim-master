---
target: all
total_score: 18
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 3
timestamp: 2026-08-18T16-13-14Z
slug: features-distribution-map-distributionmappage-jsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Progress bar + spinner + notifications good; geocoding state invisible in sidebar |
| 2 | Match System / Real World | 2 | "ACO", "Alpha", "Beta", "Rho", "Q" — raw academic jargon unexplained |
| 3 | User Control and Freedom | 2 | Post-optimization lock has only one escape: Clear All — full data destruction |
| 4 | Consistency and Standards | 2 | Inline style={{}} mixed with CSS classes; debug-input class leaked into prod |
| 5 | Error Prevention | 2 | Fuel price default 2.05 (RM-era) in IDR context produces nonsense costs |
| 6 | Recognition Rather Than Recall | 2 | Map-pick mode active state not visible on the map; ACO params require memorized domain knowledge |
| 7 | Flexibility and Efficiency of Use | 1 | No keyboard shortcuts, no CSV import, no saved presets, no drag-reorder |
| 8 | Aesthetic and Minimalist Design | 2 | All 6 sections shown simultaneously; SummaryBar shows — forever pre-run |
| 9 | Error Recovery | 2 | "Optimization failed: Failed to fetch" — no guidance; error toast disappears in 3s |
| 10 | Help and Documentation | 0 | Zero contextual help; no tooltips; no parameter explanations |
| **Total** | | **18/40** | **Poor** |

## Design Specificity Verdict

The interface is generically operational rather than authored for food distribution. A route planner for parcel delivery, field service, or waste collection could use this code unchanged. The only domain-specific copy is "Delivery Destinations" and the warehouse metaphor — everything else is algorithm-forward, not user-forward.

**Deterministic scan**: 4 findings:
- bounce-easing (slop/warning) — DistributionMap.css:610 dotBounce animation
- bounce-easing (slop/warning) — DistributionMap.css:1108 modalSpringUp animation
- bounce-easing (slop/warning) — DistributionMap.css:1108 cubic-bezier(0.34, 1.56, 0.64, 1) spring overshoot
- layout-transition (quality/warning) — DistributionMap.css:442 transition: width

Additional (detector missed): #f8f9fa hardcoded in ResultsPanel.jsx:142 (breaks dark mode); oklch(0.97 0.008 155) hardcoded in ResultsPanel.jsx:435.

## Overall Impression

Solid architecture, genuinely useful feature set. But built for the developer who wrote it, not the logistics operator who needs it. Biggest opportunity: add a numbered linear step flow.

## What's Working

1. Real-time status during optimization — progress bar, spinner, live bestDistance, converged signal
2. CountUp animation with prefers-reduced-motion respect — genuine craft
3. Dual entry mode for locations — search + map click for every point

## Priority Issues

**[P0] Fuel price default is wrong by ~5,000× for IDR context**
- fuelPrice defaults to 2.05 (RM-era). Indonesian fuel ~Rp 10,000–15,000/liter.
- All cost calculations are wrong by a factor of ~5,000–7,000.
- Fix: Change useState(2.05) to useState(10000) in DistributionMapPage.jsx:22. Fix ResultsPanel.jsx:85 default too.
- Command: /impeccable harden

**[P1] No task flow — all 6 sections simultaneously, no starting anchor**
- Sidebar presents all sections at once with no step sequence or visual hierarchy.
- Fix: Add numbered step indicator: ① Warehouse → ② Destinations → ③ Fleet → ④ Optimize
- Command: /impeccable layout

**[P1] Primary CTA is jargon: "🐜 Run ACO"**
- ACO is unknown to logistics users.
- Fix: Rename to "🐜 Optimize Routes" with subtitle "using Ant Colony Optimization"
- Command: /impeccable clarify

**[P1] Post-run lock has only one exit: "Clear All" (full data destruction)**
- After optimization, isLocked=true freezes everything. Only clearAll() unlocks, wiping all data.
- Fix: Add "✏️ Edit & Re-run" button that calls setIsLocked(false) + setResults(null) preserving all input data.
- Command: /impeccable harden

**[P2] Zero help on ACO parameters**
- Alpha, Beta, Rho, Q, Iterations unexplained with no tooltips or guidance.
- Fix: Add title tooltip attributes and one-line plain descriptions to each parameter.
- Command: /impeccable clarify

## Persona Red Flags

**Jordan (First-Timer)**: Misses warehouse-required gate (notification disappears in 3s). Cannot understand "ant pheromones" hint. High abandonment risk.

**Alex (Power User)**: No CSV import for 12 destinations. Must start over to add one destination post-run. No keyboard shortcuts. 3-second toast means missing unvisited-destinations warning.

**Sam (Accessibility)**: Autocomplete suggestion divs are not keyboard accessible (no role, not button). Map pick-mode keyboard inaccessible. Color-only route differentiation. #f8f9fa breaks dark mode in ResultsPanel vehicle headers.

## Minor Observations

- debug-input class on demand inputs — leaked dev artifact
- Redundant check: valid.length < 1 unreachable (Sidebar.jsx:73-76)
- window.location.protocol === "file:" warning is a dev artifact
- SummaryBar shows — for all metrics pre-run — dead visual space
- oklch(0.97 0.008 155) and #f8f9fa bypass CSS variable system, break dark mode
- ⬇️ emoji route arrows will be announced by screen readers
- 3-second toast timeout too short for multi-line warnings
