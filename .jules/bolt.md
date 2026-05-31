# Bolt Performance Journal

## 2025-05-14 - Pre-instantiating Intl Formatters
**Learning:** Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` is significantly faster than calling `.toLocaleString()` or creating new instances repeatedly. In this environment, `Intl.NumberFormat` was ~60x faster (78ms vs 4.8s for 100k iterations) and `Intl.DateTimeFormat` was ~80x faster (131ms vs 10.4s).
**Action:** Always centralize and pre-instantiate `Intl` formatters when working with data-heavy dashboards or lists that require frequent formatting.
