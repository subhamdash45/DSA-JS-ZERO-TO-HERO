const arr = [5, 10, 22, 14, 4, 1];
const arr2 = [8, 4, 7, 1, 9, 3, 4, 0, 6];

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return mergeTwoArrays(left, right);
}

function mergeTwoArrays(left, right) {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArray.push(left[i]);
      i++;
    } else {
      mergedArray.push(right[j]);
      j++;
    }
  }
  return [...mergedArray, ...left.slice(i), ...right.slice(j)];
}

const sortedArray = mergeSort(arr);
console.log(sortedArray);
