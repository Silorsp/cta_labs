## 2026-07-04 - Pre-instantiating Intl formatters
**Learning:** Pre-instantiated `Intl` formatters are significantly faster than calling `.toLocaleString()` or `.toLocaleDateString()` repeatedly with options (~50x faster for numbers and ~70x faster for dates in this environment).
**Action:** Centralize `Intl` formatters in `src/utils/formatters.js` and prefer them over inline formatting calls, especially in render loops or high-frequency paths like Recharts formatters.
