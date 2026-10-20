// Pre-instantiated Intl formatters to prevent allocation overhead in render loops and chart tick callbacks
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
 * Formats a numeric value using the pre-instantiated integer/standard number formatter.
 */
export const formatNumber = (value) => {
  if (value === null || value === undefined) return '';
  return numberFormatter.format(value);
};

/**
 * Formats a numeric value with fixed 2 decimal places using pre-instantiated Intl.NumberFormat.
 */
export const formatDecimal = (value) => {
  if (value === null || value === undefined) return '';
  return decimalFormatter.format(value);
};

/**
 * Formats a date string (e.g. '2024-05-01') or Date object using pre-instantiated Intl.DateTimeFormat.
 */
export const formatDateShort = (dateStr) => {
  if (!dateStr) return '';
  const date = typeof dateStr === 'string' ? new Date(dateStr) : dateStr;
  return dateFormatter.format(date);
};
