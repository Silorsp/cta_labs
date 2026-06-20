# Bolt's Performance Journal

## 2025-05-14 - Centralized Intl Formatters
**Learning:** Using `toLocaleString` or `toLocaleDateString` repeatedly (e.g., in loops or during renders) is significantly slower than pre-instantiating `Intl.NumberFormat` or `Intl.DateTimeFormat` once and reusing them. Benchmarks showed `Intl.NumberFormat` is ~70x faster and `Intl.DateTimeFormat` is ~65x faster than their prototype method equivalents over 100k iterations.
**Action:** Always prefer pre-instantiated formatters in `src/utils/formatters.js` for data-heavy components or frequent UI updates.
