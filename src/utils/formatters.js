/**
 * Pre-instantiated Intl formatters for better performance.
 * Reusing these instances avoids the overhead of creating them on every render.
 */

// Formatter for general numbers
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Formatter for currency-like values (always 2 decimal places)
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Formatter for dates (e.g., "1 de mai.")
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
