import { numberFormatter, currencyFormatter, dateFormatter } from './src/utils/formatters.js';

const iterations = 100000;
const number = 15420.50;
const date = new Date('2024-05-01');

console.log(`Running ${iterations} iterations...`);

// Number Formatting
console.time('Standard .toLocaleString()');
for (let i = 0; i < iterations; i++) {
  number.toLocaleString('pt-BR');
}
console.timeEnd('Standard .toLocaleString()');

console.time('Pre-instantiated numberFormatter');
for (let i = 0; i < iterations; i++) {
  numberFormatter.format(number);
}
console.timeEnd('Pre-instantiated numberFormatter');

// Currency-like Formatting
console.time('Standard .toLocaleString() with options');
for (let i = 0; i < iterations; i++) {
  number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
console.timeEnd('Standard .toLocaleString() with options');

console.time('Pre-instantiated currencyFormatter');
for (let i = 0; i < iterations; i++) {
  currencyFormatter.format(number);
}
console.timeEnd('Pre-instantiated currencyFormatter');

// Date Formatting
console.time('Standard .toLocaleDateString()');
for (let i = 0; i < iterations; i++) {
  date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' });
}
console.timeEnd('Standard .toLocaleDateString()');

console.time('Pre-instantiated dateFormatter');
for (let i = 0; i < iterations; i++) {
  dateFormatter.format(date);
}
console.timeEnd('Pre-instantiated dateFormatter');
