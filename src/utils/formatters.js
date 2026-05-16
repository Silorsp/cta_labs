/**
 * Centralized formatters to avoid repeated instantiation of Intl objects,
 * which can be expensive when called frequently during re-renders.
 */

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
