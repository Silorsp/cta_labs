/**
 * Pre-instantiated Intl formatters for better performance.
 * Reusing these instances avoids the overhead of creating new formatters on every render,
 * which is especially important in high-frequency paths like chart tooltips and lists.
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
