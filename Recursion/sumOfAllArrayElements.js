// function sumOfAllArrayElements(lastIndex) {
//   if (lastIndex === 0) return arr[lastIndex];
//   return arr[lastIndex] + sumOfAllArrayElements(--lastIndex);
// }

// const arr = [5, 3, 8, 1, 0, 9];

// const sumValue = sumOfAllArrayElements(arr.length - 1);
// console.log(sumValue);

// way-2

function sumAllArrayElements(arr, index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + sumAllArrayElements(arr, ++index);
}

const arr = [5, 3, 8, 1, 0, 9];

const sum = sumAllArrayElements(arr);
console.log(sum);
