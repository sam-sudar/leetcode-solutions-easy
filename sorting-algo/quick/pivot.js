function pivot(arr, start = 0, end = arr.length - 1) {
  // swap function
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      //   console.log(arr);
    }
  }
  // final pivot swap
  swap(arr, start, swapIdx);
  console.log(arr);
}

pivot([5, 2, 1, 8, 4, 7, 6, 3]);
