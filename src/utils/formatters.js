// Pre-instantiated Intl formatters to avoid recreating Intl instances during render loops or chart formatting
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

/**
 * Helper to format currency numbers without locale re-instantiation overhead
 */
export const formatCurrency = (amount) => {
  if (amount === undefined || amount === null) return 'R$ 0,00';
  return `R$ ${decimalFormatter.format(amount)}`;
};

/**
 * Helper to format general numbers with default pt-BR formatting
 */
export const formatNumber = (amount) => {
  if (amount === undefined || amount === null) return '0';
  return numberFormatter.format(amount);
};

/**
 * Helper to format short date strings (e.g. YYYY-MM-DD or ISO string)
 */
export const formatDateShort = (dateInput) => {
  if (!dateInput) return '';
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  return dateFormatter.format(date);
};
