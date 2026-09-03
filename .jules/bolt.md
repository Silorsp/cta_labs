## 2025-05-18 - Pre-instantiating Intl Formatters for Recharts and Table Render Loops

**Learning:** Calling `toLocaleString` or `toLocaleDateString` inline with options inside high-frequency render paths (such as Recharts `XAxis` tick formatters, chart tooltips, and table row mapping) creates new `Intl` formatter instances on every frame. Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` instances once in a shared utility module speeds up formatting calls by ~50x to 60x (~2.48s down to 39ms for 50,000 iterations).

**Action:** Always extract `Intl` number and date formatters to a shared utility file (e.g., `src/utils/formatters.js`) and reuse pre-instantiated instances across charts, tables, and card views.
