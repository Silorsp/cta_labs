/**
 * Pre-instantiated Intl formatters for improved performance.
 * Reusing these instances avoids the expensive overhead of creating new Intl objects on every render.
 */

// Formatter for standard numbers (pt-BR)
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Formatter for currency values (pt-BR) with 2 fixed decimal places
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Formatter for dates (pt-BR) - e.g., "1 de mai."
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
