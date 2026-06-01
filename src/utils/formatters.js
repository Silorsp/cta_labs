/**
 * Centralized formatters using pre-instantiated Intl objects for better performance.
 * Benchmarks show pre-instantiated Intl formatters are ~60-70x faster than .toLocaleString()
 */

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
