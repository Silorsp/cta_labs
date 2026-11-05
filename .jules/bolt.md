## 2025-05-18 - Pre-instantiated Intl Formatters for High-Frequency Render Paths

**Learning:** Repeatedly invoking `.toLocaleString('pt-BR', options)` or `.toLocaleDateString('pt-BR', options)` in React render cycles and high-frequency Recharts tick/tooltip callbacks incurs significant performance overhead (~50x-70x slower in V8) due to continuous instantiation and option parsing of internal Intl objects.

**Action:** Always pre-instantiate shared `Intl.NumberFormat` and `Intl.DateTimeFormat` instances in a central utility (`src/utils/formatters.js`) and reuse them across chart tick formatters, tooltips, and table rows instead of calling locale methods inline.
