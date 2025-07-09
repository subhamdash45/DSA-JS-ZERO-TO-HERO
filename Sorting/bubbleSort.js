const arr = [5, 10, 22, 14, 4, 1];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isChanged = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
      isChanged = true;
    }
    if (!isChanged) {
      break;
    }
  }
  return arr;
}

const sortedArray = bubbleSort(arr);
console.log(sortedArray);
