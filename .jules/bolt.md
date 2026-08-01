# Bolt's Performance Journal

This performance journal is a repository-specific guide for critical learnings and insights gained while optimizing the application.

## 2025-08-01 - Avoid high-frequency Intl formatter creation overhead
**Learning:** Creating new `Intl.NumberFormat` or `Intl.DateTimeFormat` instances inline inside high-frequency rendering paths (such as React loops, Recharts tick formatters, or lists) is extremely expensive and slows down main thread performance.
**Action:** Always pre-instantiate Intl formatters once globally or in a centralized utilities module (`src/utils/formatters.js`) and reuse those static instances across components.
