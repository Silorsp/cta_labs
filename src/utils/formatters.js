/**
 * Centralized Intl formatters to optimize performance by avoiding repeated instantiation.
 * Reusing Intl formatters is significantly faster than calling .toLocaleString() or
 * creating new Intl.NumberFormat/DateTimeFormat instances on every render.
 */

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
