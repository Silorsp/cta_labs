## 2025-05-15 - High-frequency Intl formatting bottleneck

**Learning:** Calling `.toLocaleString()` or `.toLocaleDateString()` with options (e.g., currency, custom date formats) inside render loops or high-frequency paths like Recharts tick formatters is extremely expensive. In this environment, pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` objects and reusing them is ~60x-70x faster.

**Action:** Always pre-instantiate Intl formatters in a centralized utility file for any currency, date, or number formatting that occurs during component renders or chart ticks.
