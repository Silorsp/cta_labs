// Pre-instantiated Intl formatters to avoid expensive allocation overhead during render loops and chart axis/tooltip formatting.
export const numberFormatter = new Intl.NumberFormat('pt-BR');
export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
