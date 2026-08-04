## 2025-08-04 - Pre-instantiated Intl formatters perform significantly faster than inline formatting calls

**Learning:** Re-creating Intl formatters inline using `.toLocaleString()` or `.toLocaleDateString()` with formatting options within components or charts (which render frequently) causes massive performance degradation. Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` objects and reusing them across renders results in massive speed gains:
- Up to **50x speedup** for decimal/number formatting (e.g. from 4.3 seconds down to 85 milliseconds for 100,000 iterations).
- Up to **70x speedup** for date formatting (e.g. from 9.2 seconds down to 133 milliseconds for 100,000 iterations).

**Action:** Always export and reuse pre-instantiated formatters from a centralized module (like `src/utils/formatters.js`) instead of calling inline formatting functions with config objects inside render loops or high-frequency charting paths (like Recharts axis/tooltip callbacks).
