## 2024-05-19 - Centralized Intl Formatters
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside render functions or formatters (especially for charts and tables) is a significant performance bottleneck due to the high overhead of constructor calls.
**Action:** Always pre-instantiate and reuse `Intl` formatters in a centralized utility file (`src/utils/formatters.js`) to minimize main-thread work during re-renders.
