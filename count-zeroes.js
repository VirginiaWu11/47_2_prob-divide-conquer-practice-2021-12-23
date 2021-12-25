// first solution
// function countZeroes(arr) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   if (arr[leftIndex] === 0) {
//     return arr.length;
//   }
//   if (arr[rightIndex] === 1) {
//     return 0;
//   }
//   while (leftIndex <= rightIndex) {
//     let midIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (arr[midIndex] === 1) {
//       leftIndex = midIndex + 1;
//       if (arr[leftIndex] === 0) {
//         return arr.length - leftIndex;
//       }
//     } else if (arr[midIndex] === 0) {
//       rightIndex = midIndex - 1;
//       if (arr[rightIndex] === 1) {
//         return arr.length - rightIndex - 1;
//       }
//     }
//   }
// }

// second solution
function countZeroes(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  if (arr[leftIndex] === 0) {
    return arr.length;
  }
  if (arr[rightIndex] === 1) {
    return 0;
  }
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] > arr[midIndex + 1]) {
      return arr.length - midIndex - 1;
    } else if (arr[leftIndex] > arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
}

module.exports = countZeroes;
