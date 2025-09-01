function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  //   console.log(left, right);
  while (left < right) {
    let pivot = Math.round((left + right) / 2);
    if (arr[pivot] == val) {
      //   console.log(pivot, arr[pivot]);
      return pivot;
    } else if (arr[pivot] < val) {
      left = pivot;
    } else if (arr[pivot] > val) {
      right = pivot;
    }
  }
  return -1;
}

binarySearch([1, 2, 3, 4, 5, 6], 7);
