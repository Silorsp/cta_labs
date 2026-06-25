## 2026-06-25 - Expensive Intl Formatting in Render Loops
**Learning:** Using `.toLocaleString()` and `.toLocaleDateString()` inside render loops (e.g., Recharts tick formatters, table maps) is extremely expensive because it re-instantiates the `Intl` object on every call. Benchmarks showed pre-instantiated `Intl` formatters are ~55x faster for numbers and ~40x faster for dates in this environment.
**Action:** Centralize `Intl` formatters in `src/utils/formatters.js` and reuse them throughout the app to avoid repeated instantiation overhead.
