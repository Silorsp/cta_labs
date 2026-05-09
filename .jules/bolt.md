## 2025-05-15 - Centralized Formatters for Intl
**Learning:** Repeated instantiation of `Intl.NumberFormat` and `Intl.DateTimeFormat` inside render loops (especially in chart `tickFormatter`) is a significant micro-bottleneck in React performance dashboards.
**Action:** Always centralize reusable formatters in a utility file and import them where needed to avoid the cost of re-instantiating these objects on every render.

## 2025-05-15 - React.memo for Dashboard Widgets
**Learning:** Dashboard widgets like `StatsCard` and `CampaignTable` often receive static or slow-changing data. Wrapping them in `React.memo` with an explicit `displayName` prevents unnecessary virtual DOM diffing during parent re-renders.
**Action:** Use `React.memo` for leaf components in performance-sensitive dashboards.
