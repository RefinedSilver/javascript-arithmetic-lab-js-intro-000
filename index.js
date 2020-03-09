function add (number) {
  number += number;
  return number;
}

function subtract (number) {
  number -= number;
  return number;
}

function multiply (number) {
  number *= number;
  return number;
}

function divide (number) {
  return number /= number;
}

function increment (n) {
  n = n++
  return n;
}

function decrement (n) {
  return n--;
}

function makeInt(string) {
  return parseInt(string);
}

function preserveDecimal(string) {
  parseFloat(string);
}
