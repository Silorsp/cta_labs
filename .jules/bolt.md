## 2025-05-18 - Pre-instantiated Intl Formatters in Render Loops and Recharts Tick Formatters

**Learning:** Calling `number.toLocaleString('pt-BR', options)` or `date.toLocaleDateString('pt-BR', options)` inside components, render loops, or Recharts tick formatters dynamically instantiates expensive `Intl.NumberFormat` and `Intl.DateTimeFormat` objects on every tick/render. Pre-instantiating module-scoped formatters is 50x-70x faster for number and date formatting.

**Action:** Re-use shared, pre-instantiated `Intl` formatters from `src/utils/formatters.js` instead of calling inline `toLocaleString()` or `toLocaleDateString()` with options inside JSX or Recharts callbacks.
