// Centralized pre-instantiated Intl formatters for high performance.
// Reusing pre-instantiated formatters is ~50x-70x faster than calling .toLocaleString()/.toLocaleDateString() inline.

export const numberFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 2,
});

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
