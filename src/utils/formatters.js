// Pre-instantiated Intl formatters for high performance string formatting
// Creating Intl.NumberFormat and Intl.DateTimeFormat objects is expensive (~50x-70x slower when constructed repeatedly)
// Sharing pre-instantiated formatters avoids object creation overhead on every render / tick format.

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
