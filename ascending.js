function Ascending(arr) {
  // let newArr = [];
  console.log(arr);
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < arr[i + 1]) console.log(arr[i]);
    console.log(arr.sort());
  }
}

Ascending([3, 2, 1, 2]);
