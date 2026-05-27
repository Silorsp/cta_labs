## 2025-05-15 - Optimizing Number and Date Formatting

**Learning:** Repeatedly calling `.toLocaleString()` or `.toLocaleDateString()` on numbers or dates in a high-frequency context (like rendering large lists or charts) is significantly slower than using a pre-instantiated `Intl.NumberFormat` or `Intl.DateTimeFormat` instance. A benchmark showed that `Intl.NumberFormat` is approximately 60x faster than `.toLocaleString()` for 100k iterations (~88ms vs ~5s).

**Action:** Always prefer centralized, pre-instantiated formatters for currency, number, and date formatting across the application to reduce CPU overhead during rendering.
