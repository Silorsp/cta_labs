/**
 * Centralized Intl formatters to avoid expensive re-instantiation.
 * Using pre-instantiated formatters is ~60x faster than calling .toLocaleString()
 * on every render.
 */

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
