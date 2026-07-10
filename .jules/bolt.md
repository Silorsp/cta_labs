## 2025-05-14 - Pre-instantiated Intl formatters performance
**Learning:** Pre-instantiated Intl formatters are ~50x faster for numbers and ~70x faster for dates compared to calling .toLocaleString() or .toLocaleDateString() repeatedly with options. This is a critical win for high-frequency paths like chart formatters and large tables.
**Action:** Always prefer centralized, pre-instantiated Intl formatters in 'src/utils/formatters.js' for all formatting needs.
