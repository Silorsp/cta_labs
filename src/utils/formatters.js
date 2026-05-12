export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const numberFormatter = new Intl.NumberFormat('pt-BR');

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
