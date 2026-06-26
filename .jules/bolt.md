## 2025-05-14 - [Centralized Intl formatters]
**Learning:** Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` instances is significantly faster (up to 70x for dates in this environment) than calling `.toLocaleString()` or `.toLocaleDateString()` repeatedly in render loops. This is a critical performance win for dashboards with many data points.
**Action:** Always prefer using pre-instantiated formatters from `src/utils/formatters.js` instead of calling `.toLocaleString()` directly in components.
