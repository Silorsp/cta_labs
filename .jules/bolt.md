## 2025-05-14 - Use pre-instantiated Intl formatters
**Learning:** Calling `.toLocaleString()` or `.toLocaleDateString()` repeatedly (e.g., in render loops or chart tick formatters) is significantly slower than using a pre-instantiated `Intl.NumberFormat` or `Intl.DateTimeFormat` instance. Benchmarks showed `Intl.NumberFormat` is ~4.6x faster than `Number.toLocaleString` and `Intl.DateTimeFormat` is ~75x faster than `Date.toLocaleDateString` for 100k iterations.
**Action:** Centralize and reuse `Intl` formatter instances in `src/utils/formatters.js` to avoid redundant instantiation costs.
