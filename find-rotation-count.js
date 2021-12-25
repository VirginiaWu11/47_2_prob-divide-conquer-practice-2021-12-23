function findRotationCount(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] > arr[midIndex + 1]) {
      return midIndex + 1;
    } else if (arr[leftIndex] > arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return 0;
}

// console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // 2
// console.log(findRotationCount([7, 9, 11, 12, 5])); // 4
// console.log(findRotationCount([7, 9, 11, 12, 15])); // 0

module.exports = findRotationCount;
