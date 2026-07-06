## 2025-05-15 - Pre-instantiated Intl formatters in high-frequency paths
**Learning:** Calling `.toLocaleString()` or `.toLocaleDateString()` with options inside Recharts `tickFormatter` or `Tooltip` formatters is a significant performance bottleneck. In this environment, pre-instantiated `Intl` formatters are ~50x faster for numbers and ~70x faster for dates.
**Action:** Always prefer centralized, pre-instantiated formatters from `src/utils/formatters.js` for any data formatting in render loops or chart components.
