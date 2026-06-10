/**
 * Pre-instantiated Intl formatters for better performance.
 * Reusing these instances is significantly faster than calling .toLocaleString()
 * or creating new Intl instances on every render.
 */

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'decimal', // We'll add the prefix manually or use this for general numbers
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
