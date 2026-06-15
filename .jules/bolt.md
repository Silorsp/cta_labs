## 2026-06-15 - Intl Formatter Optimization
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside loops or React render functions is extremely expensive. In this environment, pre-instantiating formatters resulted in a ~4x speedup for numbers and a ~62x speedup for dates over 100,000 iterations.
**Action:** Always centralize and reuse `Intl` formatter instances in utility files rather than using `.toLocaleString()` or `.toLocaleDateString()` directly in components.
