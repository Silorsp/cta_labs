// Pre-instantiated Intl formatters to prevent repeated creation during re-renders and chart formatting

// Number formatter for pt-BR currency values / general numbers (up to 2 fraction digits)
export const numberFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 2,
});

// Decimal formatter for pt-BR with strictly 2 fraction digits
export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Date formatter for short day/month representation (e.g. "1 de mai.")
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
