/**
 * Centralized Intl formatters to optimize performance.
 * Pre-instantiating these formatters is significantly faster than calling .toLocaleString()
 * or .toLocaleDateString() repeatedly, as it avoids the overhead of creating a new
 * formatter instance on every call.
 */

// Formatter for general numbers in pt-BR
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Formatter for currency in pt-BR
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Formatter for short dates (e.g., "1 de mai.")
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
