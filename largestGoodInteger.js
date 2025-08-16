function largestGoodInteger(num) {
  let maxGood = ""; // Store the largest 3-digit good integer

  for (let i = 0; i <= num.length - 3; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      let current = num.slice(i, i + 3);
      if (current > maxGood) {
        maxGood = current;
      }
    }
  }

  return maxGood;
}
