/**
 * Pre-instantiated Intl formatters for the pt-BR locale.
 * Reusing these instances avoids the high cost of recreating Intl instances
 * on every render or during high-frequency operations (like chart rendering and animation).
 */

// General number formatter (e.g., 12500 -> 12.500)
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Decimal formatter with exactly 2 fraction digits (e.g., 15420.5 -> 15.420,50)
export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Date formatter showing day and abbreviated month (e.g., 2024-05-01 -> 1 de mai.)
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
