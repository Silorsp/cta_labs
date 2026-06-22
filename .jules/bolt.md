# Bolt's Journal - Paid Traffic Dashboard

## 2025-05-14 - Initial Assessment
**Learning:** The application uses `recharts` and `lucide-react`, contributing to a > 500kB bundle size. It heavily relies on `.toLocaleString('pt-BR')` and `new Date().toLocaleDateString('pt-BR', ...)` within the render loop of the main dashboard and tables.
**Action:** Centralize and pre-instantiate `Intl.NumberFormat` and `Intl.DateTimeFormat` to avoid the overhead of creating new formatter instances on every render, which is particularly expensive in list and chart components.

## 2025-05-14 - Intl Formatter Performance Gain
**Learning:** In a benchmark of 100k iterations, pre-instantiated formatters were ~57x faster for numbers (78ms vs 4.4s) and ~55x faster for dates (167ms vs 9.3s) compared to inline `.toLocaleString()` / `.toLocaleDateString()` calls. This is a massive win for rendering large datasets in charts and tables.
**Action:** Always prefer using pre-instantiated formatters from `src/utils/formatters.js` instead of calling `.toLocaleString()` or `.toLocaleDateString()` directly in components.
