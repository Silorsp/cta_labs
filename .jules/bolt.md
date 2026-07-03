## 2025-05-15 - Formatting Bottleneck in High-Frequency Paths
**Learning:** Using `.toLocaleString()` and `.toLocaleDateString()` inside Recharts `tickFormatter` or `Tooltip` formatters, and within component loops (like tables), causes significant overhead due to repeated `Intl` object instantiation.
**Action:** Always use pre-instantiated `Intl` formatters from a centralized utility for currency, numbers, and dates to ensure smooth performance during renders and animations.
