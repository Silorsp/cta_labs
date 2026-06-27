## 2026-06-27 - [Pre-instantiated Intl Formatters]
**Learning:** Creating `Intl.NumberFormat` and `Intl.DateTimeFormat` objects repeatedly inside render loops or chart formatters is a significant performance bottleneck. In this environment, pre-instantiating formatters is ~4x faster for numbers and ~70x faster for dates compared to calling `.toLocaleString()` or `.toLocaleDateString()` on every call.
**Action:** Always centralize and reuse `Intl` formatter instances in utility files, especially for locales used across the entire application (like `pt-BR` in this case).
