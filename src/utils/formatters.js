/**
 * Pre-instantiated Intl formatters for better performance.
 * Creating these instances once and reusing them is significantly faster than
 * calling .toLocaleString() or .toLocaleDateString() repeatedly, especially in
 * high-frequency paths like chart formatters or large tables.
 */

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
