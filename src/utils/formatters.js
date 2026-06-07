/**
 * Centralized Intl formatters to improve performance.
 * Pre-instantiating these objects is significantly faster than calling .toLocaleString()
 * or .toLocaleDateString() repeatedly during renders.
 */

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
