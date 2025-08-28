function findPair(arr, n) {
  let pointer = 0;

  while (pointer < arr.length) {
    let temp1 = arr[pointer] + n;
    let temp2 = arr[pointer] - n;

    for (let val of arr) {
      if (val === temp1 || val === temp2) {
        if (val !== arr[pointer] || n === 0) {
          // avoid matching same element unless n = 0
          return true;
        }
      }
    }

    pointer++;
  }

  return false;
}

findPair([4, -2, 3, 10], -6);
