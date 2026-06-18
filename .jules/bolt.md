## 2026-06-18 - Centralized Intl Formatters
**Learning:** Repeatedly calling `.toLocaleString()` or `.toLocaleDateString()` in React components (especially inside render loops or chart formatters) is expensive because it creates a new `Intl` object every time. Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` objects can be ~5-50x faster.
**Action:** Always centralize and reuse `Intl` formatter instances in a utility file instead of calling the prototype methods directly in the UI layer.
