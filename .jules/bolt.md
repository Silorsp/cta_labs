## 2025-02-25 - Pre-instantiating Intl formatters eliminates high CPU overhead in chart and table render loops

**Learning:** Calling `.toLocaleString()` or `.toLocaleDateString()` inline within React render loops and Recharts tick/tooltip formatters causes `Intl` instance creation on every call, leading to up to 55x slower execution compared to pre-instantiated `Intl.NumberFormat` / `Intl.DateTimeFormat` objects.

**Action:** Centralize shared `Intl` formatters in `src/utils/formatters.js` and reuse them across chart tick formatters, tooltips, and data tables instead of calling `.toLocaleString()` inline.
