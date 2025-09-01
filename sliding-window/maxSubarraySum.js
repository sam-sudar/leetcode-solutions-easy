// function maxSubarraySum(arr, n) {
//   if (arr.length < n) {
//     return null;
//   }
//   let left = 0;
//   let right = 1;
//   let temp = 0;
//   let result = 0;
//   temp = arr[left];
//   // adding nos till n
//   while (right < n) {
//     temp = temp + arr[right];
//     right++;
//   }
//   right = n - 1;
//   // console.log(temp);
//   result = temp;
//   temp = 0;
//   // console.log(right);

//   // sliding window
//   while (right <= arr.length) {
//     temp = result - arr[left] + arr[right + 1];
//     //Comparing values
//     if (result < temp) {
//       result = temp;
//     }
//     left++;
//     right++;
//   }
//   console.log(result);
//   return result;
// }

function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;
  let temp = 0;
  let max = 0;
  //Initial Window
  for (let i = 0; i <= n - 1; i++) {
    temp = temp + arr[i];
  }
  // console.log(temp);
  max = temp;

  //Sliding Window
  for (let i = n; i <= arr.length - 1; i++) {
    temp = temp - arr[i - n] + arr[i];
    max = Math.max(max, temp);
  }
  console.log(max);
  return max;
}

maxSubarraySum([1, 12, -5, -6, 50, 3], 4);
