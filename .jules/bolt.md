# Bolt's Journal

## 2025-05-18 - Pre-instantiated Intl Formatters for Recharts and Data Tables
**Learning:** Re-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inline via `toLocaleString()` and `toLocaleDateString()` inside frequent render paths (such as Recharts `tickFormatter` / `Tooltip` callbacks and table item loops) incurs a heavy locale-resolution penalty (~50x-70x slower than reusing static instances).
**Action:** Always maintain centralized, pre-instantiated `Intl` formatters in `src/utils/formatters.js` for high-frequency rendering and charting components.
