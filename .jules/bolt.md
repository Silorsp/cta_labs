# Bolt's Performance Journal

## 2025-05-14 - Pre-instantiating Intl Formatters
**Learning:** In high-frequency render paths (like Recharts formatters or large tables), calling `.toLocaleString()` or `.toLocaleDateString()` with options is expensive because it creates a new `Intl` object every time. Pre-instantiating these formatters can be ~50-70x faster.
**Action:** Centralize formatters in `src/utils/formatters.js` and reuse them throughout the application.
