## 2025-05-14 - Centralizing Intl Formatters
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` is surprisingly expensive, especially when done repeatedly in render loops or large lists. Centralizing these instances in a utility file significantly reduces garbage collection and CPU cycles during re-renders.
**Action:** Always check for inline `.toLocaleString()` or `.toLocaleDateString()` calls and replace them with pre-instantiated formatters from a central utility.
