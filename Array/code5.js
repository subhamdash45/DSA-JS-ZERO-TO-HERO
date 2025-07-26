// reverse string

const arr = [1, 3, 5, 2, 3, 4, 6, 7, 3, 5, 6];
// const arr = [1, 3, 5, 2, 3, 4, 6, 7, 3, 5];

function reverseArray(nums) {
  const mid = Math.floor(nums.length / 2);
  for (let i = 0; i < mid; i++) {
    console.log(i);
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

reverseArray(arr);
console.log(arr);
