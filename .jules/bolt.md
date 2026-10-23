## 2026-10-23 - Centralized Intl Formatters for High-Frequency Render Paths

**Learning:** Re-instantiating `Intl.DateTimeFormat` and `Intl.NumberFormat` inline via `.toLocaleString()` or `.toLocaleDateString()` inside render loops or chart tick formatters (e.g. Recharts XAxis) incurs significant execution overhead (~50x-70x slower in microbenchmarks).

**Action:** Extract and pre-instantiate `Intl` formatters into a shared module (`src/utils/formatters.js`) for high-frequency format calls across charts, tables, and stat cards.
