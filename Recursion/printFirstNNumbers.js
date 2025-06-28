function printFirstNNumbers(limit, current = 1) {
  if (current > limit) {
    return;
  }
  console.log(current);
  printFirstNNumbers(limit, ++current);
}

printFirstNNumbers(10);

// ------------------------------

function inReverse(number) {
  if (number === 0) return;

  console.log(number);
  inReverse(--number);
}

inReverse(10);
