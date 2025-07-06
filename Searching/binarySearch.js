const arr = [-1, 0, 3, 5, 9, 12];

function findIndex(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (rightIndex >= leftIndex) {
    const mid = Math.floor((rightIndex + leftIndex) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      rightIndex = mid - 1;
    } else {
      leftIndex = mid + 1;
    }
  }
  return -1;
}

console.log(findIndex(arr, 7));
console.log(findIndex(arr, 9));

// time complexity - O(log n)
// space complexity - O(1) - constant
