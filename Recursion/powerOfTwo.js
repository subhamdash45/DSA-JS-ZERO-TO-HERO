// function isPowerOfTwo(num) {
//   if (num % 2 !== 0) return false;
//   else if (num / 2 === 1 || num === 1) return true;

//   return isPowerOfTwo(num / 2);
// }
// console.log(isPowerOfTwo(8));

//you can suffle the else part to remove num / 2 === 1
// way-2

function isPowerOfTwo(num) {
  if (num === 1) return true;
  else if (num % 2 !== 0) return false;

  return isPowerOfTwo(num / 2);
}
console.log(isPowerOfTwo(8));
