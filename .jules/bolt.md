## 2026-07-02 - Expensive Intl Formatter Anti-pattern
**Learning:** In React applications with heavy data visualization (Recharts) and tables, calling `.toLocaleString()` or `.toLocaleDateString()` inside render loops or high-frequency formatter callbacks causes significant performance overhead due to repeated locale resolution and object creation.
**Action:** Always use pre-instantiated `Intl.NumberFormat` and `Intl.DateTimeFormat` objects in a centralized utility file for high-frequency formatting tasks.
