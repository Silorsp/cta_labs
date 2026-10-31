// Pre-instantiated Intl formatters to avoid expensive re-creation on every render and Recharts tick/tooltip evaluation.
// Constructing Intl formatters can be ~50x slower than reusing an existing instance.

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
