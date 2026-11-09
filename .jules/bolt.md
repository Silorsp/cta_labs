## 2025-05-15 - Intl formatters optimization in React dashboards

**Learning:** Repeated calls to `.toLocaleString('pt-BR', options)` and `.toLocaleDateString('pt-BR', options)` in React render paths and high-frequency Recharts tick/tooltip formatters re-resolve locale rules and allocate instances on every call, running 50x-70x slower than pre-instantiated `Intl.NumberFormat` and `Intl.DateTimeFormat` objects.
**Action:** Centralize pre-instantiated formatters in a dedicated utility module (e.g. `src/utils/formatters.js`) and pass their `.format` methods to Recharts formatters and presentational components instead of creating inline formatters.
