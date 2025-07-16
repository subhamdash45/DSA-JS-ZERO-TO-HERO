// remove dulplicate
// [1,2,2,3,4,4,4,5,6,7,7,7] = [1,2,3,4,5,6,7]

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7];
function removeDuplicate(array) {
  const tempArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!tempArray.includes(array[i])) {
      tempArray.push(array[i]);
    }
  }
  return tempArray;
}

const data = removeDuplicate(arr);
console.log(data);
