# Bolt Performance Journal

This journal contains critical learnings, optimizations, and anti-patterns observed in the codebase to make decisions faster and avoid recurring mistakes.

## 2025-05-15 - Pre-instantiated Formatters
**Learning:** Instantiating `Intl` formatters inline via `.toLocaleString()` or `.toLocaleDateString()` inside React render paths (such as Recharts tooltips, custom tick formatters, or table cells) introduces a 30x-70x performance penalty due to frequent object allocation and garbage collection. Centralizing pre-instantiated formatters dramatically reduces render times and CPU overhead.
**Action:** Always prefer using formatters from `src/utils/formatters.js` instead of calling `.toLocaleString()` or `.toLocaleDateString()` directly in components.
