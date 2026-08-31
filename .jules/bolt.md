## 2025-08-31 - Pre-instantiating Intl formatters in Recharts rendering loops

**Learning:** Recharts tick formatters and table rendering loops repeatedly invoke string/date/number formatters. Calling `.toLocaleString('pt-BR')` or `.toLocaleDateString('pt-BR')` inline causes implicit re-instantiation of `Intl` options on every render tick, introducing measurable CPU overhead (~15x to 50x slower execution per call).

**Action:** Extract locale options into module-scoped `Intl.NumberFormat` and `Intl.DateTimeFormat` instances in `src/utils/formatters.js` and reuse `.format()` across Recharts tick formatters, tooltips, and lists.
