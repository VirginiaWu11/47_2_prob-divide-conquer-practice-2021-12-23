function sortedFrequency(arr, val) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let firstIndex, lastIndex;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] > val) {
      rightIndex = midIndex - 1;
    } else if (arr[midIndex] < val) {
      leftIndex = midIndex + 1;
    } else {
      firstIndex = findFirstIndex(arr, val, leftIndex, midIndex);
      lastIndex = findLastIndex(arr, val, midIndex, rightIndex);
      return 1 + lastIndex - firstIndex;
    }
  }
  return -1;
}

function findFirstIndex(arr, val, leftIndex, rightIndex) {
  // val at rightIndex is equal to target val
  //     console.log("findFirstIndex", {leftIndex,rightIndex})
  if (leftIndex === 0 && arr[leftIndex] === val) {
    return 0;
  }
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] < val) {
      leftIndex = midIndex + 1;
      if (arr[leftIndex] === val) {
        return leftIndex;
      }
    } else {
      rightIndex = midIndex - 1;
      if (arr[rightIndex] < val) {
        return midIndex;
      }
    }
  }
}

function findLastIndex(arr, val, leftIndex, rightIndex) {
  //     val at leftIndex is equal to target val
  if (rightIndex === arr.length - 1 && arr[rightIndex] === val) {
    return arr.length - 1;
  }
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] > val) {
      rightIndex = midIndex - 1;
      if (arr[rightIndex] === val) {
        return rightIndex;
      }
    } else {
      leftIndex = midIndex + 1;
      if (arr[leftIndex] > val) {
        return midIndex;
      }
    }
  }
}

module.exports = sortedFrequency;
