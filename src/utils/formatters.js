// Pre-instantiated Intl formatters to avoid re-creation on every render/tick call.
// Creating Intl instances inline (e.g. date.toLocaleDateString('pt-BR', { ... })) in hot paths
// like Recharts tick formatters and table rendering incurs heavy overhead (~50x slower).

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
