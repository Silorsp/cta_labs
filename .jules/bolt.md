## 2025-05-18 - High-Frequency Formatting Path Optimization
**Learning:** In React dashboards rendering charts (e.g. Recharts) and tables, executing `.toLocaleString()` or `.toLocaleDateString()` inside render loops or chart tick formatters introduces massive execution overhead (~50x-70x slower than pre-instantiated `Intl` formatters).
**Action:** Extract reusable `Intl.NumberFormat` and `Intl.DateTimeFormat` instances to module scope in `src/utils/formatters.js` and wrap presentational table/card components with `React.memo()`.
