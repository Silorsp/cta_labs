// Centralized formatters to improve Intl performance by reusing instances.
// Using pre-instantiated formatters is significantly faster than calling inline .toLocaleString() or .toLocaleDateString().

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
