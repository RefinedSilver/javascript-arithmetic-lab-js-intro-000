function add (number) {
  return number += number;
}

function subtract (number) {
  return number -= number;
}

function multiply (number) {
  return number *= number;
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
