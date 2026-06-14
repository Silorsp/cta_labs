## 2025-01-24 - Pre-instantiating Intl formatters for extreme performance gains
**Learning:** Calling `.toLocaleString()` or `.toLocaleDateString()` on every render is expensive because it creates a new `Intl` object each time. In this environment, benchmarking 100k iterations showed that `Intl.DateTimeFormat.format` is ~67x faster than `.toLocaleDateString()`.
**Action:** Centralize `Intl` formatters in `src/utils/formatters.js` and reuse instances across components.
