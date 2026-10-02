## 2025-05-18 - Pre-instantiating Intl formatters in Recharts tick and render paths
**Learning:** Calling `.toLocaleString()` and `.toLocaleDateString()` inside render functions or high-frequency callbacks (like Recharts `XAxis.tickFormatter`) repeatedly instantiates `Intl` objects and locale data, incurring a ~50x speed overhead compared to re-using pre-instantiated `Intl` instances.
**Action:** Always create reusable `Intl.NumberFormat` and `Intl.DateTimeFormat` instances in a dedicated module (e.g., `src/utils/formatters.js`) for date and currency formatting across the application.
