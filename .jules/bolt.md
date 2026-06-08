# Bolt Journal ⚡

## 2025-05-14 - Pre-instantiated Intl formatters performance
**Learning:** Using `Intl.NumberFormat` and `Intl.DateTimeFormat` pre-instantiated instances is significantly faster than calling `.toLocaleString()` or `.toLocaleDateString()` repeatedly. Benchmarks in this environment showed `Intl.NumberFormat` is ~6x faster than `.toLocaleString()` and `Intl.DateTimeFormat` is ~68x faster than `.toLocaleDateString()` for 100k iterations.
**Action:** Always prefer using centralized, pre-instantiated formatters in `src/utils/formatters.js` instead of direct locale methods on numbers and dates.
