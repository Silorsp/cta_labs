/**
 * Centralized formatters to improve performance by avoiding repeated instantiation.
 * Using pre-instantiated Intl formatters is significantly faster than .toLocaleString().
 */

// Generic number formatter for pt-BR
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Currency formatter for BRL (includes R$)
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

// Currency formatter for BRL with minimum 2 fraction digits
export const currencyFormatterFull = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

// Date formatter for day and short month (e.g., "1 de mai.")
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
