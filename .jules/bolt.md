## 2025-05-14 - Pre-instantiating Intl Formatters
**Learning:** Calling .toLocaleString() or .toLocaleDateString() repeatedly in React components or chart formatters is expensive because it re-instantiates or looks up the locale configuration each time. In a benchmark of 100k iterations, pre-instantiating Intl.NumberFormat was ~60x faster (82ms vs 5s).
**Action:** Always centralize and reuse Intl.NumberFormat and Intl.DateTimeFormat instances in a utility file like 'src/utils/formatters.js' for the entire application.
