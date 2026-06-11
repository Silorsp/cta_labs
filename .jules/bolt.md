## 2025-05-14 - Intl Formatter Reuse
**Learning:** Reusing `Intl.NumberFormat` and `Intl.DateTimeFormat` instances is significantly faster than calling `.toLocaleString()` or `.toLocaleDateString()` repeatedly. Local benchmarks show ~70x improvement for numbers and ~59x for dates when processing 100k iterations.
**Action:** Centralize common formatters in a utility file and reuse them throughout the application.
