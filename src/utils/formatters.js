/**
 * Centralized formatters to avoid repeated instantiation of Intl objects,
 * which can be expensive in high-frequency rendering scenarios.
 * Use these instead of .toLocaleString() or .toLocaleDateString().
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
