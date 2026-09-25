## 2026-09-25 - Reuse pre-instantiated Intl formatters in high-frequency React/Recharts renders
**Learning:** Calling `toLocaleString()` or `toLocaleDateString()` inline within React component render trees or Recharts tick formatters creates heavy `Intl` object instances on every render cycle (~50x-70x slower than pre-instantiated formatters).
**Action:** Centralize re-usable `Intl.NumberFormat` and `Intl.DateTimeFormat` instances in `src/utils/formatters.js` and import them directly into presentational components and chart formatters.
