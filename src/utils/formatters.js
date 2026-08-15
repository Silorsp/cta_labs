// Centralized pre-instantiated Intl formatters for pt-BR.
// Instantiating Intl formatters inside render loops or high-frequency paths (like Recharts formatters or table rows)
// creates significant overhead (~50x-100x slower). Pre-instantiating them provides substantial performance gains.

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
