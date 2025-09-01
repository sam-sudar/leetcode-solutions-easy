function minSubArrayLen(arr, target) {
  let left = 0;
  let right = 1;
  let temp = 0;

  temp = arr[left] + arr[right];
  //initial window
  while (left < arr.length - 1) {
    if (temp < target) {
      right++;
      temp = temp + arr[right];
    }
    if (temp >= target) {
      temp = temp - arr[left];
      left++;
    }
    console.log(temp);
  }
}

minSubArrayLen([1, 2, 3, 4, 5], 6);
