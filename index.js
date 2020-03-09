function add (a, b) {
  return a += b;
}

function subtract (a, b) {
  return a -= b;;
}

function multiply (a, b) {
  return a *= b;
}

function divide (a, b) {
  return a /= b;
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
