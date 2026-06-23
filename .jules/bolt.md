## 2025-05-14 - [Centralized Intl Formatters]
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` on every render (via `.toLocaleString()`) is significantly slower than reusing pre-instantiated instances. Benchmark showed ~7x performance gain (583ms vs 86ms for 100k iterations) in this environment.
**Action:** Always prefer using pre-instantiated formatters from `src/utils/formatters.js` instead of calling `.toLocaleString()` or `.toLocaleDateString()` directly in components.
