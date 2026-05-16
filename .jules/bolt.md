## 2025-05-15 - Centralized Intl Formatters
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` objects can be computationally expensive, especially when done repeatedly within render loops or for every item in a large list. Reusing singletons for these formatters significantly reduces CPU overhead during re-renders.
**Action:** Always centralize `Intl` formatters in a utility file and reuse them across the application instead of calling `.toLocaleString()` or `.toLocaleDateString()` directly.
