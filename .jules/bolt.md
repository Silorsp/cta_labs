## 2025-05-18 - Pre-instantiating Intl formatters in high-frequency chart and list renders

**Learning:** Invoking `.toLocaleDateString()` or `.toLocaleString()` with options directly inside render loops and Recharts formatters (like `XAxis tickFormatter` and `Tooltip formatter`) incurs significant `Intl` instantiation overhead on every render (~50x-70x slower than reusing pre-instantiated formatters).
**Action:** Always extract `Intl.NumberFormat` and `Intl.DateTimeFormat` into singletons in a utility module (`src/utils/formatters.js`) for high-frequency formatting paths.
