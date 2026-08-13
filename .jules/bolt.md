## 2026-08-13 - Formatters optimization and Memoization
**Learning:** Pre-instantiated Intl formatters are ~50x to 70x faster for numbers, dates, and decimal formatting than calling .toLocaleString() or .toLocaleDateString() inline in components or render loops. Presentational components like StatsCard and CampaignTable should be wrapped in React.memo() and explicitly given displayNames to prevent unnecessary re-renders.
**Action:** Always pre-instantiate Intl formatters and reuse them, and use React.memo with explicit displayNames for simple presentational components.
