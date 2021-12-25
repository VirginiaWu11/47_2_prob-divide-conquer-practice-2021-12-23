function findFloor(arr, val) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (
      (arr[midIndex] <= val && arr[midIndex + 1] > val) ||
      (arr[midIndex] <= val && midIndex === arr.length - 1)
    ) {
      return arr[midIndex];
    } else if (arr[midIndex] < val) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return -1;
}

// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9)); // 8
// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // 19
// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0)); // -1
// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 10)); // 3
module.exports = findFloor;
