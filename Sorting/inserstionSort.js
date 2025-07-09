const arr = [5, 10, 22, 14, 4, 1];

function inserstionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const curent = arr[i];
    let prev = i - 1;
    while (arr[prev] > curent && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curent;
  }
  return arr;
}

const sortedArray = inserstionSort(arr);
console.log(sortedArray);
