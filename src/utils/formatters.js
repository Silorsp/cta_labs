/**
 * Pre-instantiated Internationalization (Intl) formatters for performance optimization.
 * Creating new Intl formatters inside render loops or high-frequency rendering paths
 * (such as tooltips and tick formatters in Recharts) is extremely expensive.
 * Reuse these pre-instantiated formatters to improve rendering speed.
 */

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short'
});
