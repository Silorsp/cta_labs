/**
 * Pre-instantiated formatters for better performance.
 * Using these instead of .toLocaleString() or .toLocaleDateString()
 * in render loops can significantly reduce CPU usage.
 */

// Basic number formatter for pt-BR
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Formatter for currency-like numbers (2 decimal places)
// We use 'decimal' style and manually prepend 'R$' to match original UI consistency
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Date formatter for charts (e.g., "1 de mai.")
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
