## 2025-05-14 - Pre-instantiating Intl formatters

**Learning:** Repeatedly calling `.toLocaleString()` or creating new `Intl` formatter instances is significantly slower than using a pre-instantiated instance. In this environment, `Intl.NumberFormat.format()` is ~60x faster than `.toLocaleString()`.

**Action:** Centralize common `Intl` formatters in `src/utils/formatters.js` and reuse them across the application to reduce CPU overhead during renders, especially in tables and charts.
