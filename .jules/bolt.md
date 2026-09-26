## 2025-02-26 - Avoid Inline Intl Instantiation in Render Loops & Chart Formatters
**Learning:** Calling `.toLocaleString()` or `.toLocaleDateString()` with options inline in component render bodies, array `.map()` calls, or Recharts formatters repeatedly creates `Intl` instances and resolves locale options, causing ~50x-60x slower execution (~10.7s vs ~179ms per 100k calls).
**Action:** Always extract and reuse pre-instantiated `Intl.NumberFormat` and `Intl.DateTimeFormat` instances in a shared formatters module (`src/utils/formatters.js`).
