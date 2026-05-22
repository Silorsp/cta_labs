# Bolt's Performance Journal

## 2025-05-15 - Intl Formatter Optimization
**Learning:** Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` is significantly faster (~70x in a benchmark of 100k iterations) than calling `.toLocaleString()` or `.toLocaleDateString()` repeatedly. The latter creates a new formatter instance on every call, which is an expensive operation.
**Action:** Always centralize and reuse `Intl` formatter instances in a utility file when dealing with frequent data formatting in lists or charts.

## 2025-05-15 - Component Memoization
**Learning:** For leaf components that receive stable props (like mock data or formatted strings), `React.memo` is an easy win to prevent unnecessary re-renders when parent state changes (though not strictly necessary for this static mock dashboard, it's a good practice for when real-time data is added).
**Action:** Wrap reusable UI components in `React.memo` and provide a `displayName` for better debugging.
