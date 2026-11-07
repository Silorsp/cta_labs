// Pre-instantiated Intl formatters to avoid expensive re-instantiation on every render / tick format
export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const currencyValueFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
