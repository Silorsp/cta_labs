## 2025-05-14 - [Intl Formatter Reuse]
**Learning:** Reusing `Intl.NumberFormat` and `Intl.DateTimeFormat` instances is significantly faster than calling `.toLocaleString()` or `.toLocaleDateString()` repeatedly. Creating a new formatter instance is an expensive operation; in high-frequency rendering paths like charts or long lists, this can become a measurable bottleneck.
**Action:** Always prefer pre-instantiated, reusable Intl formatters for localized formatting in React components.
