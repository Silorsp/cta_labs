# Bolt Performance Journal

## 2026-07-19 - Pre-instantiated Intl Formatters and Component Memoization
**Learning:** Creating `Intl` formatter instances inline inside components—especially inside high-frequency paths like Recharts `tickFormatter` or `Tooltip` formatter—is extremely slow. Pre-instantiated Intl formatters can yield up to a 50x speed improvement. Additionally, presentational components (`StatsCard` and `CampaignTable`) should be memoized with `React.memo()` and assigned a `displayName` to prevent unnecessary re-renders.
**Action:** Always define pre-instantiated formatters under `src/utils/formatters.js` and use `React.memo()` with explicit `displayName` on presentational components that receive static or slowly changing props.
