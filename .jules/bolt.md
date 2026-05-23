## 2025-05-14 - [Centralized Intl formatters]
**Learning:** Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` objects is significantly faster (~60x in this environment) than calling `.toLocaleString()` or `.toLocaleDateString()` repeatedly, especially in a dashboard with many formatted values.
**Action:** Always check for repeated `.toLocaleString()` calls in loops or render functions and centralize them in a utility file.
