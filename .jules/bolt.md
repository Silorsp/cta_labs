## 2026-06-01 - [Performance optimization of Intl formatters]
**Learning:** Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` is significantly faster (~60-75x) than calling `.toLocaleString()` or `.toLocaleDateString()` repeatedly. Creating these objects is expensive and should be done once and reused, especially in render-intensive components like charts and long tables.
**Action:** Centralize formatters in `src/utils/formatters.js` and reuse pre-instantiated instances throughout the application.
