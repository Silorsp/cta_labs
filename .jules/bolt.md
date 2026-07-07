## 2026-07-07 - Optimization of formatting and re-renders
**Learning:** Pre-instantiating `Intl` formatters is significantly faster than calling `.toLocaleString()` or `.toLocaleDateString()` repeatedly, especially in high-frequency paths like chart tooltips and list rendering. Wrapping presentational components with `React.memo()` is an easy win for components that receive static or rarely changing data.
**Action:** Always check for repeated formatting calls and use pre-instantiated formatters. Memoize static UI components to skip unnecessary reconciliation.
