/**
 * Centralized formatters to optimize performance.
 * Pre-instantiating Intl formatters is significantly faster than calling .toLocaleString()
 * or creating new instances repeatedly, especially in loops or frequently re-rendered components.
 */

// Formatter for currency (BRL)
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

// Formatter for decimals with 2 fraction digits
export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Generic number formatter
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Formatter for dates (e.g., "1 de mai.")
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
