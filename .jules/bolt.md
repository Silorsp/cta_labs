# Bolt's Performance Journal

## 2025-05-14 - Pre-instantiated Intl Formatters vs Inline Calls
**Learning:** In this React environment, pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` objects is significantly more efficient than calling `.toLocaleString()` or `.toLocaleDateString()` within render loops or high-frequency paths like Recharts formatters. Benchmarks in similar V8 environments show up to 50-70x performance gains for formatted numbers and dates when reusing instances.
**Action:** Always centralize and reuse `Intl` formatter instances in `src/utils/formatters.js` for any data visualization or table rendering.
