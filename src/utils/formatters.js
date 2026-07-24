/**
 * Pre-instantiated Intl formatters to avoid repeatedly instantiating them
 * in rendering loops, Recharts callbacks, or component render cycles.
 * This yields significant performance gains.
 */

// Decimal formatter with 2 fixed fraction digits for pt-BR style (e.g. 15.420,50)
export const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

// Standard integer number formatter for pt-BR style (e.g. 12.500)
export const numberFormatter = new Intl.NumberFormat('pt-BR');

// Date formatter for short month representation in pt-BR (e.g. 1 de mai. or similar depends on OS, usually 1 de mai.)
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short'
});
