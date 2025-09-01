function recursiveRange(nums) {
  if (nums == 0) return 0;
  return nums + recursiveRange(nums - 1);
}

recursiveRange(4);
