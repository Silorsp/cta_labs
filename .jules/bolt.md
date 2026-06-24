## 2025-05-14 - Pre-instantiated Intl Formatters
**Learning:** Calling `.toLocaleString()` or `.toLocaleDateString()` repeatedly in React components (especially in lists or charts) is significantly slower than using pre-instantiated `Intl.NumberFormat` and `Intl.DateTimeFormat` instances. In this environment, pre-instantiated formatters are ~4x faster for 100k iterations.
**Action:** Centralize `Intl` formatters in `src/utils/formatters.js` and reuse them across the application to reduce CPU overhead and object allocation during renders.
