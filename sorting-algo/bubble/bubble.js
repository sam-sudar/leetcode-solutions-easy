// function bubble(arr) {
//   let temp = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     console.log("For i", arr[i]);
//     for (let j = 0; j <= arr.length - 1; j++) {
//       console.log("Chckpoint", arr[i], arr[j]);
//       if (arr[j] > arr[j + 1]) {
//         //made a rokkie mistake her
//         temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//     console.log("Array check: ", arr);
//   }
// }

//optimized
function bubble(arr) {
  let temp = 0;
  for (let i = arr.length; i > 0; i--) {
    // console.log("For i", arr[i]);
    for (let j = 0; j < i - 1; j++) {
      //   console.log("Chckpoint", arr[i], arr[j]);
      if (arr[j] > arr[j + 1]) {
        //made a rokkie mistake her
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
    console.log("Array check: ", arr);
  }
}

bubble([6, 14, 29, 3, 40, 2]);
