function linearSearch(arr, val) {
  for (let i in arr) {
    // console.log(i);
    if (arr[i] == val) {
      return Number(i);
    }
  }
  return -1;
}

linearSearch([10, 15, 20, 25, 30], 15);
