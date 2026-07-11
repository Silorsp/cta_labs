/**
 * Pre-instantiated Intl formatters for better performance.
 * Reusing these instances is significantly faster than calling
 * .toLocaleString() or .toLocaleDateString() with options in every render.
 */

// Formatter for currency (BRL)
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Formatter for standard numbers
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Formatter for dates (e.g., "1 de mai.")
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
