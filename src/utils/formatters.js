/**
 * Centralized Intl formatters to avoid re-instantiation overhead during renders.
 * Pre-instantiating these can be up to 100x faster than calling .toLocaleString()
 * or creating new Intl instances repeatedly.
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
