// Pre-instantiated Intl formatters to eliminate expensive repeated instantiation overhead during renders
export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short'
});
