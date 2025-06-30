function factorialOfN(number) {
  if (number === 1) return 1;
  return number * factorialOfN(--number);
}

console.log(factorialOfN(5));
