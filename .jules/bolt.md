## 2025-05-15 - Optimize Intl formatters in render loops
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside render functions or high-frequency paths (like Recharts formatters) is expensive. Pre-instantiating these objects in a utility file can be ~50-70x faster than calling `.toLocaleString()` or `.toLocaleDateString()` with options repeatedly.
**Action:** Always use pre-instantiated formatters from `src/utils/formatters.js` for numbers and dates, especially when used in lists, tables, or charts.
