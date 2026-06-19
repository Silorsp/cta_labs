const iterations = 100000;
const number = 15420.50;
const date = new Date('2024-05-01');

console.time('toLocaleString');
for (let i = 0; i < iterations; i++) {
  number.toLocaleString('pt-BR');
}
console.timeEnd('toLocaleString');

const numberFormatter = new Intl.NumberFormat('pt-BR');
console.time('Intl.NumberFormat');
for (let i = 0; i < iterations; i++) {
  numberFormatter.format(number);
}
console.timeEnd('Intl.NumberFormat');

console.time('toLocaleDateString');
for (let i = 0; i < iterations; i++) {
  date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' });
}
console.timeEnd('toLocaleDateString');

const dateFormatter = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short' });
console.time('Intl.DateTimeFormat');
for (let i = 0; i < iterations; i++) {
  dateFormatter.format(date);
}
console.timeEnd('Intl.DateTimeFormat');
