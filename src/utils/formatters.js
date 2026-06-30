/**
 * Pre-instantiated Intl formatters for performance.
 * Creating Intl formatter instances is expensive, especially when done
 * inside render loops or high-frequency paths like chart formatters.
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
