## 2026-06-21 - Optimize Formatting with Centralized Intl Instances
**Learning:** Calling `.toLocaleString()` or `.toLocaleDateString()` in a React render loop is extremely expensive as it re-initializes localization data on every call. Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` is ~55-70x faster.
**Action:** Always use pre-instantiated formatters from a centralized utility for numbers, currencies, and dates instead of inline methods.
