## 2025-05-14 - Pre-instantiated Intl formatters efficiency

**Learning:** Using pre-instantiated `Intl.NumberFormat` and `Intl.DateTimeFormat` instances is significantly faster than calling `.toLocaleString()` or `.toLocaleDateString()` on every render. Benchmark showed `Intl.NumberFormat` is ~4x faster than `.toLocaleString()` for numbers, and `Intl.DateTimeFormat` is ~62x faster than `.toLocaleDateString()` for dates in this environment.

**Action:** Centralize and reuse formatter instances in `src/utils/formatters.js` to optimize rendering performance, especially for lists and charts.
