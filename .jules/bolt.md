## 2025-05-15 - Intl Object Reuse
**Learning:** Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` objects is significantly faster (~60-70x in this environment) than calling `.toLocaleString()` or `.toLocaleDateString()` repeatedly, as the latter instantiates a new object every time.
**Action:** Always centralize and reuse Intl formatters in utility files for any dashboard or data-heavy application.
