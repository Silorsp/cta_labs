## 2025-05-15 - Pre-instantiating Intl formatters
**Learning:** Calling `.toLocaleString()` or `.toLocaleDateString()` inside React components (especially in frequently re-rendered parts like charts or long lists) is expensive because it creates a new `Intl` instance every time. Pre-instantiating these formatters once is significantly faster (~50x-100x).
**Action:** Always centralize `Intl.NumberFormat` and `Intl.DateTimeFormat` instances in a utility file and reuse them across the application.
