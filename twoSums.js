var twoSum = function (nums, target) {
  //   nums.map((item) => {
  //     let check = target - item;
  //     console.log(check);
  //   });

  //   for (const element of nums) {
  //     console.log(element);
  //     let check = target - element;
  //     return check;
  //   }

  for (let i = 0; i < nums.length; i++) {
    // console.log("From i loop: " + nums[i]);
    for (let j = i + 1; j < nums.length; j++) {
      //   console.log(nums[j]);
      if (nums[i] + nums[j] === target) {
        console.log(i, j);
        return i, j;
      }
    }
  }
};

twoSum([3, 2, 4], 6);
