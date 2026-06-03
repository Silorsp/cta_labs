/**
 * Centralized Intl formatters for performance optimization.
 * Pre-instantiating these formatters is significantly faster than calling
 * .toLocaleString() or .toLocaleDateString() repeatedly, especially in loops or re-renders.
 */

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
