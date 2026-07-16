// Pre-instantiated Intl formatters to optimize performance and avoid recreating them.
// In high-frequency render paths or loops, Intl.NumberFormat and Intl.DateTimeFormat can be slow.

export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Note: To match the existing UI styling, currency values are manually prepended with 'R$'
// but use the pt-BR number format with 2 fractional digits.
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
