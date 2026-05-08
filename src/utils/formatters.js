export const currencyBRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const decimalBRL = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const dateBRLShort = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
