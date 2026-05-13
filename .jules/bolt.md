# Bolt Performance Journal

## 2025-05-15 - Centralized Intl Formatters
**Learning:** Re-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` on every render or even inside maps is expensive and can cause performance degradation in large lists or frequently updating dashboards.
**Action:** Centralize these instances in a utility file and reuse them throughout the application.
