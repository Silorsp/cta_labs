# Bolt Journal

## 2025-06-01 - Formatting Optimization and Memoization
**Learning:** Pre-instantiated Intl formatters are ~4x to 55x faster for numbers, dates, and custom decimal patterns compared to repeatedly calling `.toLocaleString()` or `.toLocaleDateString()` inline. Presentational components like `StatsCard` and `CampaignTable` benefit significantly from `React.memo()` and should have `displayName` set to avoid DevTools warning.
**Action:** Centralize formatters in `src/utils/formatters.js` and memoize static presentational components.
