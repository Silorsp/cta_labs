# Bolt Performance Journal ⚡

## Critical Learnings

## 2025-05-15 - Centralized Intl Formatters
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside render loops or frequently updated components can lead to performance degradation. Centralizing these instances in a utility file avoids repeated object creation and improves rendering speed, especially in tables and charts.
**Action:** Always check for `.toLocaleString()` or `.toLocaleDateString()` calls in components and replace them with pre-instantiated formatters from `src/utils/formatters.js`.
