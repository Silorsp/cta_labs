## 2024-08-02 - Reuse Intl Formatters to Avoid Hotpath Instantiation Overhead
**Learning:** Instantiating `Intl.NumberFormat` or `Intl.DateTimeFormat` within high-frequency code paths (like Recharts formatters or table rendering loops) adds significant CPU overhead. Reusing pre-instantiated formatters is up to ~33x faster (47ms vs 1.6s for 10,000 runs).
**Action:** Extract formatters to a shared module (e.g. `src/utils/formatters.js`) and reuse the pre-instantiated instances across all components.
