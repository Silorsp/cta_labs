# Bolt's Performance Journal

## 2025-05-15 - Intl Formatter & Memoization
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside render loops (like Recharts formatters or table rows) is a significant bottleneck. Reusing pre-instantiated formatters is ~70x faster. Also, presentational components like `StatsCard` and `CampaignTable` benefit greatly from `React.memo` as they often receive stable props.
**Action:** Always check for inline `.toLocaleString()` or `.toLocaleDateString()` calls in high-frequency paths and replace them with centralized, pre-instantiated formatters. Apply `React.memo` to pure presentational components.
