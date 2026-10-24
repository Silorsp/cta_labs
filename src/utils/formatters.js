// Pre-instantiated Intl formatters to prevent performance overhead from repeated object creation during renders and chart tick calculations.

export const numberFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 2,
});

export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});

export const formatCurrency = (val) => `R$ ${numberFormatter.format(val)}`;
export const formatDecimalCurrency = (val) => `R$ ${decimalFormatter.format(val)}`;
export const formatDate = (dateStr) => dateFormatter.format(new Date(dateStr));
