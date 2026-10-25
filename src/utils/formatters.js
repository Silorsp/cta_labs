// Pre-instantiated Intl formatters to eliminate heavy object instantiation overhead on each render / tick.

// Formatter for pt-BR general numbers (up to 2 fraction digits)
export const numberFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 2,
});

// Formatter for pt-BR currency/decimal values with 2 fixed fraction digits
export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Formatter for short dates in charts (e.g., '1 de mai.' or '1 de mai')
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
