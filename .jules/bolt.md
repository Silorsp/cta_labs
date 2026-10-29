## 2025-02-18 - Pre-instantiated Intl Formatters vs Inline Formatting

**Learning:** Calling `.toLocaleString()` or `.toLocaleDateString()` with options inline in render loops or high-frequency callbacks (like Recharts axis ticks or table rows) instantiates new `Intl` instances on every invocation, causing significant CPU overhead (~50x-70x slower in benchmarks).

**Action:** Extract reusable `Intl.NumberFormat` and `Intl.DateTimeFormat` instances to a centralized `src/utils/formatters.js` module and import them across components.
