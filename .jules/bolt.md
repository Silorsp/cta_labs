## 2025-05-15 - Centralized formatters and memoization

**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` during re-renders can be expensive, especially in large tables or charts. Centralizing these instances in a utility file ensures they are created once and reused, reducing memory pressure and CPU cycles. Additionally, wrapping leaf components in `React.memo` prevents unnecessary re-renders when the parent component updates but the props for these components remain identical.

**Action:** Always prefer using pre-instantiated formatters from a centralized utility instead of calling `.toLocaleString()` or `.toLocaleDateString()` directly in components. Wrap pure functional components that receive static or rarely changing props with `React.memo` to optimize the render tree.
