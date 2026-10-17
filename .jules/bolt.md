## 2025-05-10 - Pre-instantiating Intl Formatters in Chart Tick Render Loops
**Learning:** Calling `Date.prototype.toLocaleDateString()` or `Number.prototype.toLocaleString()` inside Recharts tick formatters creates a new `Intl.DateTimeFormat` or `Intl.NumberFormat` instance on every tick render, causing noticeable CPU overhead (~15x to 50x slowdown compared to reusing static instances).
**Action:** Always create module-level `Intl.DateTimeFormat` and `Intl.NumberFormat` instances in `src/utils/formatters.js` for formatting dates and numbers in charts and tables.
