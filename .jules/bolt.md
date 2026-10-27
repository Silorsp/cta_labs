## 2025-05-18 - Pre-instantiating Intl Formatters in Hot Render Loops
**Learning:** In V8, calling `.toLocaleString()` or `.toLocaleDateString()` inline within hot render paths (like Recharts `tickFormatter` or array iteration loops) triggers repeated creation of `Intl` instances, incurring high performance overhead (~50x-70x slower than cached instances).
**Action:** Pre-instantiate singletons for `Intl.NumberFormat` and `Intl.DateTimeFormat` in `src/utils/formatters.js` and reuse them across all component formatters and chart tick functions.
