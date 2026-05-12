# Bolt's Performance Journal

## 2025-05-14 - Centralized Intl Formatters
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside render loops (or even just calling `.toLocaleString()`) can be surprisingly expensive in data-heavy dashboards. In React 19, even with its optimizations, repeated instantiation still adds unnecessary GC pressure.
**Action:** Always centralize `Intl` instances in a utility file and reuse them across the application.

## 2025-05-14 - Selective Memoization
**Learning:** Leaf components that receive large objects or arrays (like tables or charts) are prime candidates for `React.memo`. While React 19 is faster, preventing the diffing process entirely for stable data provides a measurable win in complex layouts.
**Action:** Wrap stable leaf components in `memo()` and ensure they have a clear `displayName` for easier profiling.
