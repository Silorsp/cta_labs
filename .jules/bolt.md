# Bolt's Performance Journal

## 2025-05-22 - [Intl Instantiation Performance]
**Learning:** Creating `Intl.NumberFormat` or `Intl.DateTimeFormat` instances inside a render loop or frequently called functions is extremely expensive. My benchmark showed `toLocaleString` (which creates a new instance internally) took ~5s for 100k calls, while a pre-instantiated formatter took only ~81ms.
**Action:** Always centralize `Intl` formatters in a utility file and reuse them throughout the application.
