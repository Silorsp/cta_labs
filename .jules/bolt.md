## 2025-05-26 - Centralizing Intl formatters
**Learning:** Pre-instantiating Intl.NumberFormat and Intl.DateTimeFormat is significantly faster (~60x) than calling .toLocaleString() or .toLocaleDateString() because it avoids the overhead of creating a new formatter object on every call. In a dashboard with many data points (charts, tables), this adds up to measurable main-thread savings.
**Action:** Always check for inline localization calls and move them to a centralized utility with pre-instantiated formatters.
