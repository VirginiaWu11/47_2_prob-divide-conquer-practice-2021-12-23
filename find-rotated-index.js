function findRotatedIndex(arr, val) {
  let pivot = findPivotFirstIndex(arr);
  if (val >= arr[pivot] && val <= arr[arr.length - 1]) {
    return binarySearch(arr, val, pivot, arr.length - 1);
  } else if (val >= arr[pivot] && val <= arr[pivot - 1]) {
    return binarySearch(arr, val, 0, pivot - 1);
  } else return -1;
}

function findPivotFirstIndex(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] < arr[leftIndex]) {
      rightIndex = midIndex - 1;
      if (arr[rightIndex] > arr[midIndex]) {
        return midIndex;
      }
    } else if (arr[midIndex] > arr[leftIndex]) {
      leftIndex = midIndex + 1;
      if (arr[leftIndex] < arr[midIndex]) {
        return leftIndex;
      }
    } else {
      return 0;
    }
  }
}

function binarySearch(arr, val, leftIndex = 0, rightIndex = arr.length - 1) {
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] < val) {
      leftIndex = midIndex + 1;
    } else if (arr[midIndex] > val) {
      rightIndex = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

// [1,2,3,4,5,6]
// first i wanna find the pivot point
// then search through the section which the number is within
// console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
// console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 8));
// console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 10));
// console.log(findPivotFirstIndex([0, 1, 2, 3, 4, 5, 6, 7, 8])); //0
// console.log(findPivotFirstIndex([10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8])); //3
// console.log(findRotatedIndex([3, 4, 1, 2], 4));
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
// console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1

module.exports = findRotatedIndex;
