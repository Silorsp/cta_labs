/**
 * Centralized Intl formatters to improve performance by avoiding
 * repeated instantiation of Intl objects during renders.
 */

// Formatter for general numbers (e.g., conversions, clicks)
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Formatter for currency-style decimals (e.g., investment, spend)
// Note: We manually prepend "R$" in the UI to match the current style
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Formatter for dates in charts (e.g., "1 de mai.")
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
