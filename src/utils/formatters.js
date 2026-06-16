/**
 * Pre-instantiated Intl formatters to avoid the overhead of creating them on every render.
 * Benchmark showed:
 * - Intl.NumberFormat is ~4x faster than .toLocaleString()
 * - Intl.DateTimeFormat is ~62x faster than .toLocaleDateString()
 */

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
