// Pre-instantiated Intl formatters for maximum performance in high-frequency renders
export const numberFormatter = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });
export const decimalFormatter = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short' });
