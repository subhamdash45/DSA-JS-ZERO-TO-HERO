const arr = [5, 10, 22, 14, 1, 2, 4];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallIndex] > arr[j]) {
        smallIndex = j;
      }
    }
    if (smallIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[smallIndex];
      arr[smallIndex] = temp;
    }
  }
  return arr;
}

const sortedArray = selectionSort(arr);
console.log(sortedArray);
