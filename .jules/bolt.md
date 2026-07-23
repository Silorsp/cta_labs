# Bolt Performance Journal

## 2025-02-15 - Pre-instantiating Intl Formatters and Memoizing Presentational Components
**Learning:** Re-instantiating formatting configurations via `.toLocaleString()` and `.toLocaleDateString()` inside loops or render calls introduces a substantial overhead (about 30x slower than pre-instantiated `Intl` formatters). Furthermore, components like `StatsCard` and `CampaignTable` undergo unnecessary re-renders when parent states change, even though their props remain stable.
**Action:** Centralize pre-instantiated formatting utilities under `src/utils/formatters.js` and wrap presentational dashboard components in `React.memo()` with explicitly declared `displayName` to optimize React rendering performance.
