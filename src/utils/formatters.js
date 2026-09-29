// Pre-instantiated Intl formatters to avoid expensive re-creation during renders
export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});

/**
 * Formats a numeric value with standard pt-BR formatting.
 */
export function formatNumber(value) {
  return numberFormatter.format(value);
}

/**
 * Formats a currency value with 2 decimal places in pt-BR locale.
 */
export function formatCurrency(value) {
  return decimalFormatter.format(value);
}

/**
 * Formats a date string or Date object to 'D MMM' format (e.g. '12 de jan.').
 */
export function formatDate(date) {
  const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  return dateFormatter.format(d);
}
