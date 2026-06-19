## 2025-05-14 - Pre-instantiated Intl formatters
**Learning:** Calling .toLocaleString() and .toLocaleDateString() inside render loops or chart formatters is a major performance bottleneck because it re-initializes the locale and options on every call. Pre-instantiating these objects with Intl.NumberFormat and Intl.DateTimeFormat can lead to ~10x-70x performance gains for formatting operations.
**Action:** Centralize Intl formatters in a utility file and reuse them across the application instead of using prototype methods.
