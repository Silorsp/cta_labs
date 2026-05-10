# Bolt's Performance Journal

## 2025-05-15 - [Centralizing Intl Formatters]
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` objects inside render functions or chart formatters (like Recharts tick formatters) is expensive. Centralizing them as reusable constants significantly reduces the overhead during the React commit phase and when charts re-draw.
**Action:** Always move `Intl` formatters to a utility file and reuse the same instances across the application.
