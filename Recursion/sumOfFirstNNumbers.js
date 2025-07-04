// function sumOfFirstNNumbers(num) {
//   if (num === 0) return 0;
//   return num + sumOfFirstNNumbers(num - 1);
// }

// const sum = sumOfFirstNNumbers(10);
// console.log(sum);

// way-2

function fromStart(num, curr = 1) {
  if (curr === num) return curr;
  return curr + fromStart(num, curr + 1);
}

const sumValue = fromStart(10);
console.log(sumValue);
