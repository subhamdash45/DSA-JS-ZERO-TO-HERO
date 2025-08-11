// 283. Move 0s
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

const arr = [0, 1, 0, 3, 12];

// way-1

// function moveZeros(nums) {
//   if (nums.length === 1) return nums;
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i]) {
//       nums[j] = nums[i];
//       if (i !== j) {
//         nums[i] = 0;
//       }
//       j++;
//     }
//   }
// }

// way-2

function moveZeros(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      nums[j] = nums[i];
      j++;
    }
  }
  while (j < nums.length) {
    nums[j] = 0;
    j++;
  }
}

moveZeros(arr);
console.log(arr);
