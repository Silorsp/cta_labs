/**
 * Pre-instantiated Intl formatters for high performance.
 * Creating Intl instances on every render or tick in Recharts can be ~50x-70x slower.
 * Reusing pre-instantiated formatters avoids repeated costly locale resolution and object allocations.
 */
const numberFormatter = new Intl.NumberFormat('pt-BR');

const currencyValueFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});

/**
 * Format a number to pt-BR locale string
 * @param {number} value
 * @returns {string}
 */
export const formatNumber = (value) => numberFormatter.format(value);

/**
 * Format a number to pt-BR currency amount (without symbol) with 2 fixed decimal places
 * @param {number} value
 * @returns {string}
 */
export const formatCurrencyValue = (value) => currencyValueFormatter.format(value);

/**
 * Format a date string or Date object to 'DD de MMM.' in pt-BR
 * @param {string | Date} date
 * @returns {string}
 */
export const formatDate = (date) => dateFormatter.format(typeof date === 'string' ? new Date(date) : date);
