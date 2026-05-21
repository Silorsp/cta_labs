/**
 * Centralized formatters to avoid repeated instantiation of Intl objects,
 * which is a known performance bottleneck in large-scale rendering.
 */

// For currency-like values without the symbol
export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// For general numbers
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// For dates in the chart
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
