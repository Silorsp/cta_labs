## 2025-05-15 - Intl Formatter Optimization
**Learning:** Repeatedly calling `.toLocaleString()` or `.toLocaleDateString()` with options objects is extremely expensive because it creates a new `Intl` object every time. In this environment, pre-instantiating formatters was ~50x faster for currency-style numbers and ~70x faster for dates (measured over 100k iterations).
**Action:** Always centralize and reuse `Intl.NumberFormat` and `Intl.DateTimeFormat` instances in `src/utils/formatters.js` instead of inline formatting.
