## 2026-10-30 - Recharts and Component Render Path Formatting Overhead
**Learning:** Re-instantiating `Intl.NumberFormat` or `Intl.DateTimeFormat` via `.toLocaleString()` or `.toLocaleDateString()` inside high-frequency render paths like Recharts `XAxis` `tickFormatter` or table row renders introduces ~50x-70x execution overhead compared to module-level singleton formatters.
**Action:** Centralize pre-instantiated `Intl` formatters in `src/utils/formatters.js` and import them across all components and chart formatters.
