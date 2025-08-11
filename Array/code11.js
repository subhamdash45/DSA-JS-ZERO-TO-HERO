// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// way--1

// var singleNumber = function(nums) {
//   const obj = {}
//   for(let i=0;i<nums.length;i++){
//    if(!obj[nums[i]]){
//        obj[nums[i]] = 1
//    }
//    else{
//       obj[nums[i]] += 1
//    }
//   }
//   for(const key in obj){
//        if(obj[key]===1){
// as key is a string in object
//            return Number(key)
//        }
//   }
// };

//way-2
function singleNumber(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}
console.log(singleNumber([1, 2, 3, 2, 3, 1, 5]));
