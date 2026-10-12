// Pre-instantiated Intl formatters for optimal performance (up to 50x faster than inline .toLocaleString/.toLocaleDateString)
const numberFormatter = new Intl.NumberFormat('pt-BR');
const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});

export const formatNumber = (value) => {
  if (value == null || isNaN(value)) return '';
  return numberFormatter.format(value);
};

export const formatDecimal = (value) => {
  if (value == null || isNaN(value)) return '';
  return decimalFormatter.format(value);
};

export const formatCurrency = (value) => {
  if (value == null || isNaN(value)) return 'R$ 0,00';
  return `R$ ${decimalFormatter.format(value)}`;
};

export const formatCurrencyDecimal = (value) => {
  if (value == null || isNaN(value)) return 'R$ 0,00';
  return `R$ ${decimalFormatter.format(value)}`;
};

export const formatShortDate = (dateInput) => {
  if (!dateInput) return '';
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  if (isNaN(date.getTime())) return '';
  return dateFormatter.format(date);
};
