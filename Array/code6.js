const arr1 = [1, 3, 5, 10];
const arr2 = [0, 7, 9, 15];
// const arr = [1, 3, 5, 2, 3, 4, 6, 7, 3, 5];

function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  const mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  return [...mergedArray, ...arr1.slice(i), ...arr2.slice(j)];
}

console.log(mergeSortedArrays(arr1, arr2));
