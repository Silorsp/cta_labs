# Bolt's Journal

## 2025-05-15 - Re-use pre-instantiated Intl formatters in render and chart loops
**Learning:** Calling `Number.prototype.toLocaleString('pt-BR', options)` or `Date.prototype.toLocaleDateString('pt-BR', options)` inline inside component renders, table loops, and chart tick formatters instantiates new `Intl` formatter instances on every call. Pre-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` reduces execution time by ~40x to 70x across frequent formatting calls.
**Action:** Centralize shared `Intl` instances in a utility module (`src/utils/formatters.js`) and import them across chart tick formatters, tooltip formatters, and table components.
