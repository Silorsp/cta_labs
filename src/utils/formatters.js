// Pre-instantiated Intl formatters to prevent heavy object allocation and parsing overhead on every render/chart tick

// Formatter for general numbers in pt-BR
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Formatter for currency/decimal numbers with 2 fixed fraction digits
export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Formatter for dates formatted as day and short month (e.g. 1 de mai. / 1 mai)
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
