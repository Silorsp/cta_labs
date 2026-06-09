/**
 * Centralized Intl formatters to avoid repeated instantiation,
 * improving performance during renders.
 */

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const currencyFormatterPrecise = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
