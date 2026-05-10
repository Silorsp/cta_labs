/**
 * Centralized Intl formatters to optimize performance by avoiding repeated instantiation.
 */

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const compactDateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});

/**
 * Formats a number as BRL currency without the symbol if needed, or with it.
 * Note: App uses "R$ value" in some places and currencyFormatter.format(value) in others could be used.
 * Standardizing to use the formatter directly.
 */
