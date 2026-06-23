/**
 * Pre-instantiated Intl formatters to avoid the overhead of creating new instances
 * on every render. Reusing formatters is significantly faster (up to 7x-10x).
 */

const locale = 'pt-BR';

// Standard number formatter
export const numberFormatter = new Intl.NumberFormat(locale);

// Currency formatter (replaces R$ ${val.toLocaleString()})
export const currencyFormatter = new Intl.NumberFormat(locale, {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Date formatter for charts (day and short month)
export const dateFormatter = new Intl.DateTimeFormat(locale, {
  day: 'numeric',
  month: 'short',
});
