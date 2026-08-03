// Pre-instantiated formatters for high performance.
// Instantiating Intl formatters once and reusing them is 4x to 80x faster
// than calling .toLocaleString() / .toLocaleDateString() on every render.

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
