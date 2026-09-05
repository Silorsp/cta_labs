## 2026-09-05 - Pre-instantiating Intl Formatters in High-Frequency Paths

**Learning:** Repeatedly calling `Number.prototype.toLocaleString()` or `Date.prototype.toLocaleDateString()` with options inside component render loops or Recharts tick formatters creates significant CPU overhead because `Intl.NumberFormat` and `Intl.DateTimeFormat` instances are constructed on every call (~50x-70x slower).

**Action:** Pre-instantiate shared `Intl.NumberFormat` and `Intl.DateTimeFormat` instances in a centralized module (`src/utils/formatters.js`) and reuse them across chart tick formatters and table renderers.
