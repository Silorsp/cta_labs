# Bolt Performance Journal

## 2025-02-14 - Pre-instantiated Formatters Performance
**Learning:** Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` objects avoids the extremely high overhead of recreating them on every single inline `.toLocaleString()` or `.toLocaleDateString()` call. Specifically, for 100k iterations:
- Number formatting: ~5.3x speedup (~423ms down to ~80ms)
- Decimal formatting with options: ~57x speedup (~4.61s down to ~81ms)
- Date formatting with options: ~52x speedup (~10.74s down to ~206ms)
**Action:** Always create and reuse a single instance of `Intl.NumberFormat` and `Intl.DateTimeFormat` (or other formatting classes) in a centralized utility file (e.g., `src/utils/formatters.js`) for the entire application, especially when formatting in loops or frequently rendered components.
