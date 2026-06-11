/**
 * Centralized Intl formatters to optimize performance by avoiding repeated instantiation.
 * Reusing these instances is significantly faster than calling .toLocaleString() or .toLocaleDateString()
 */

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
