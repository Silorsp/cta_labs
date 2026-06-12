## 2025-05-14 - Pre-instantiating Intl formatters
**Learning:** Calling `.toLocaleString()` and `.toLocaleDateString()` inside render loops or chart formatters (Recharts `tickFormatter`) is a significant bottleneck as it re-instantiates the expensive `Intl` objects on every call.
**Action:** Always use pre-instantiated formatters from `src/utils/formatters.js` for recurring formatting tasks.
