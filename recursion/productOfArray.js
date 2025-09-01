// function productOfArray(arr) {
//   let result = 1;
//   function helper(arr) {
//     console.log(arr);
//     if (arr.length === 0) {
//       return;
//     }
//     let val = arr.pop();
//     result = result * val;
//     console.log(result);
//     console.log(arr);
//     return arr;
//   }
//   console.log(arr);
//   helper(arr);
//   console.log(result);
// }

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr.pop() * productOfArray(arr);
}

productOfArray([1, 2, 3]);
