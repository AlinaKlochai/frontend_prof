const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers.length);