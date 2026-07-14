# Bolt's Performance Journal

## 2025-05-15 - Intl Formatter Optimization
**Learning:** Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` objects is significantly faster (~60-70x) than calling `.toLocaleString()` or `.toLocaleDateString()` inside render loops or high-frequency paths like Recharts formatters. This is because the `Intl` constructor has a high overhead.
**Action:** Always check for repeated formatting calls and move them to a centralized utility with pre-instantiated instances.

## 2025-05-15 - Component Memoization
**Learning:** Presentational components like `StatsCard` and `CampaignTable` that render static mock data or props that change infrequently are prime candidates for `React.memo()`. This avoids unnecessary virtual DOM reconciliation. In this project, `displayName` must be set explicitly for memoized components.
**Action:** Wrap stable presentational components in `React.memo()` and set `displayName`.
