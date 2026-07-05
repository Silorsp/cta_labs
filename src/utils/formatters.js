/**
 * Centralized Intl formatters to avoid repeated instantiation overhead.
 * Pre-instantiating these formatters is significantly faster than calling
 * .toLocaleString() or .toLocaleDateString() with options in render loops.
 */

// Formatter for general numbers (e.g., 1.250)
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Formatter for currency (e.g., 1.500,00)
// Note: We manually prepend 'R$' in the UI to match existing patterns
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Formatter for dates (e.g., 7 de mai.)
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
