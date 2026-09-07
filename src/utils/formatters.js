/**
 * Centralized pre-instantiated Intl formatters.
 * Reusing Intl.NumberFormat and Intl.DateTimeFormat instances provides ~50x-70x performance gains
 * compared to creating inline formatters or invoking .toLocaleString() / .toLocaleDateString() directly in render loops.
 */

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
 * Format ISO date string 'YYYY-MM-DD' using pre-instantiated Intl.DateTimeFormat.
 * Avoids repeated Date parsing & Intl creation in high-frequency rendering paths like chart axes.
 * @param {string} dateStr - 'YYYY-MM-DD'
 * @returns {string} Formatted date string (e.g., "1 de mai.")
 */
export const formatDateShort = (dateStr) => {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  const date = new Date(year, month - 1, day);
  return dateFormatter.format(date);
};
