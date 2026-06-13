/**
 * Pre-instantiated formatters for better performance.
 * Calling .toLocaleString() or .toLocaleDateString() repeatedly creates new Intl instances,
 * which is expensive in render loops or large datasets.
 */

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
