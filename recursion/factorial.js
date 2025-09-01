function factorial(nums) {
  if (nums == 0) return 1;
  return nums * factorial(nums - 1);
}
factorial(4);
