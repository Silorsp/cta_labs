## 2025-02-18 - Pre-instantiating Intl Formatters in High-Frequency Chart and Table Paths
**Learning:** Calling `.toLocaleString()` or `.toLocaleDateString()` with options directly inside render loops and Recharts formatters (like `XAxis.tickFormatter` or `Tooltip.formatter`) creates high CPU overhead (~50x-70x slower than pre-instantiated formatters).
**Action:** Always create and export singleton formatters (`Intl.NumberFormat`, `Intl.DateTimeFormat`) in `src/utils/formatters.js` and reuse them across render loops and chart formatters.
