var firstMissingPositive = function (nums) {
  //   let arr = String(nums).split("");
  let large = 0;
  let ans;

  //   console.log(arr);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > large) {
      large = nums[i];
    }
    // console.log("Current largest:", large);
  }
  for (let i = 1; i <= large; i++) {
    // console.log("Hello");
    if (!nums.includes(String(i))) {
      //   console.log("First missing positive:", i);
      //   console.log(i);
      ans = i;
    }
  }
  if (ans === undefined) {
    ans = large + 1;
  }
  console.log(ans);
  return ans;
};

firstMissingPositive([1, 2, 0]);
