// function fibonacci(num) {
//   let n1 = 0;
//   let n2 = 1;
//   console.log(n1);
//   console.log(n2);
//   for (let i = 2; i < num; i++) {
//     let temp = n1 + n2;
//     console.log(temp);
//     n1 = n2;
//     n2 = temp;
//   }
// }

// fibonacci(10);

function fibonacciValueOfIndex(num) {
  if (num <= 1) return num;

  return fibonacciValueOfIndex(num - 1) + fibonacciValueOfIndex(num - 2);
}

for (let index = 0; index < 5; index++) {
  console.log(fibonacciValueOfIndex(index));
}
