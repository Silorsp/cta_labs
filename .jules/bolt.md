## 2026-06-05 - Intl Formatter Pre-instantiation
**Learning:** Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` is significantly faster than calling `.toLocaleString()` or `.toLocaleDateString()` directly, or creating new `Intl` instances on each call. Benchmarks showed a ~43x speedup for numbers (119ms vs 5.1s) and ~213x speedup for dates (114ms vs 24.4s) over 100k iterations in this environment.
**Action:** Use centralized, pre-instantiated formatters from `src/utils/formatters.js` for all data formatting in components, especially within loops or frequent re-renders.
