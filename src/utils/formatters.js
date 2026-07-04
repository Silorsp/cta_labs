/**
 * Pre-instantiated Intl formatters for better performance.
 * Calling .toLocaleString() or .toLocaleDateString() repeatedly with options is expensive.
 */

// Basic number formatter for pt-BR
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Currency style formatter (decimal style as per project convention of manually prepending R$)
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Date formatter for day and short month (e.g., "1 de mai.")
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
