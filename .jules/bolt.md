## 2026-05-14 - Centralized Formatters and Memoization
**Learning:** Reusing Intl formatters and applying React.memo to leaf components can significantly reduce GC pressure and unnecessary re-renders in data-heavy dashboards.
**Action:** Always check for repeated Intl instantiation and missing memoization in display-only components.
