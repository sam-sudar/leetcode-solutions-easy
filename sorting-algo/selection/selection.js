function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    var lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i != lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  console.log(arr);
}

selection([5, 2, 3, 1, 4]);
