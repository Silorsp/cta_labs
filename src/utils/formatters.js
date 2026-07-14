/**
 * Pre-instantiated Intl formatters for better performance.
 * Calling .toLocaleString() or .toLocaleDateString() repeatedly can be expensive,
 * especially in render loops or chart formatters.
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
