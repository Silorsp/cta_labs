# Bolt's Performance Journal

## 2025-07-28 - Expensive Inline Locale Formatting in React Rendering Path
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` via `.toLocaleString` and `.toLocaleDateString` on every render cycle is extremely slow in JavaScript environments (e.g., V8). For decimal and date formatting with custom options, inline instantiation is up to ~50x slower compared to using pre-instantiated formatters. In high-frequency rendering contexts, such as Recharts tooltips and axis tick formatters, inline formatting causes noticeable UI lag and high garbage collection pressure.
**Action:** Always create pre-instantiated formatters in a utility file (`src/utils/formatters.js`) and reuse them across the application. Avoid calling `.toLocaleString()` or `.toLocaleDateString()` with options inside JSX or loop statements.
