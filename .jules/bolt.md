## 2025-05-24 - Pre-instantiating Intl Formatters for Recharts & UI Components

**Learning:** Calling `.toLocaleString()` or `.toLocaleDateString()` inside render loops or Recharts tick/tooltip formatters reconstructs `Intl.NumberFormat` / `Intl.DateTimeFormat` instances on every tick, which is ~50x to 70x slower than reusing pre-instantiated formatters.

**Action:** Always extract static `Intl` formatters into a shared module (e.g. `src/utils/formatters.js`) and pass them to UI components and Recharts formatters.
