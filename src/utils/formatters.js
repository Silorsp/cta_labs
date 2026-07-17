/**
 * Centralized, pre-instantiated internationalization formatters for better performance.
 * Pre-instantiating Intl formatters is up to ~60x-70x faster than calling toLocaleString()
 * or toLocaleDateString() repeatedly because it avoids compiling/initializing the options
 * and locale configuration on every single invocation.
 */

// Format numbers as standard pt-BR formatting (e.g., "1.234,56")
export const numberFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

// Format currencies in pt-BR style (e.g., "1.234,56", the R$ symbol is prepended manually to match original UI layout)
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Format dates in pt-BR short style (e.g., "1 de mai.")
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
});
