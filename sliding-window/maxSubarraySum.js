function maxSubarraySum(arr, n) {
  if (arr.length < n) {
    return null;
  }
  let left = 0;
  let right = 1;
  let temp = 0;
  let result = 0;
  temp = arr[left];
  // adding nos till n
  while (right < n) {
    temp = temp + arr[right];
    right++;
  }
  right = n - 1;
  // console.log(temp);
  result = temp;
  temp = 0;
  // console.log(right);

  // sliding window
  while (right <= arr.length) {
    temp = result - arr[left] + arr[right + 1];
    //Comparing values
    if (result < temp) {
      result = temp;
    }
    left++;
    right++;
  }
  console.log(result);
  return result;
}

maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);
