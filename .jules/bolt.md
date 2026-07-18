# Bolt's Performance Journal

This is a critical learnings journal for codebase-specific performance insights.

## 2026-07-18 - Intl Formatter Pre-Instantiation Performance Boost
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside render loops (such as within Recharts tick formatters, tooltip formatters, or React components mapping over lists like `CampaignTable`) causes massive performance overhead. In this codebase's Node environment, reusing a pre-instantiated formatter is ~4x faster for numbers/currencies and ~48x-55x faster for dates and custom decimal patterns compared to repeatedly invoking `.toLocaleString()` or `.toLocaleDateString()` inline.
**Action:** Always maintain a centralized formatting utility at `src/utils/formatters.js` containing pre-instantiated formatter objects. Import and use these formatters rather than invoking standard inline locale formatting methods directly in components.
