/**
 * Centralized Intl formatters to optimize performance by avoiding
 * repeated instantiation of formatter objects.
 */

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});

/**
 * Formats a number as BRL currency.
 * @param {number} value - The numeric value to format.
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (value) => currencyFormatter.format(value);

/**
 * Formats a number according to pt-BR locale.
 * @param {number} value - The numeric value to format.
 * @returns {string} The formatted number string.
 */
export const formatNumber = (value) => numberFormatter.format(value);

/**
 * Formats a date string or object according to pt-BR locale.
 * @param {string|Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateFormatter.format(dateObj);
};
