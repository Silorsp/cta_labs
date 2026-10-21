## 2025-05-18 - Pre-instantiated Intl Formatters for High-Frequency Render Paths
**Learning:** Re-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside render loops, Recharts tick formatters, and table components incurs significant CPU overhead (up to ~50x-70x slower in Node/V8 benchmarks).
**Action:** Centralize singletons for `Intl.NumberFormat` and `Intl.DateTimeFormat` in `src/utils/formatters.js` and reuse them across all component formatters and chart ticks.
