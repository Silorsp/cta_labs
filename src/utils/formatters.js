/**
 * Centralized, pre-instantiated formatters for high performance.
 * Reusing formatter instances avoids the expensive overhead of creating
 * new Intl instances on every render or in high-frequency rendering paths (e.g., charts).
 */

// Format numbers using standard Portuguese (pt-BR) formatting
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Format decimal/monetary values with two decimal digits, but without prepending currency symbol
// because we prepend 'R$' manually to match the existing UI layout exactly.
export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Format dates as 'day/short-month' (e.g. '1 de mai.')
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
