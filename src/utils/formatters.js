/**
 * Centralized, pre-instantiated internationalization formatters for optimal performance.
 * Calling .toLocaleString() or .toLocaleDateString() directly in components (especially inside loop/render paths)
 * instantiates new formatter objects under the hood, causing significant performance overhead and GC pressure.
 */

// Formatter for general numbers (e.g., pt-BR locale)
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Formatter for currency-style decimals/numbers (pre-instantiated with 2 fixed fraction digits)
// Currency symbol prepended manually in components to match visual output
export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Formatter for dates (day and short month name, e.g., "1 de mai.")
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
