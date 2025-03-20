var isPalindrome = function (x) {
  let reverse = [];
  console.log(x);
  arr = x.toString().split("").map(Number);
  console.log(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    // console.log(reverse);
    reverse.push(arr[i]);
  }
  console.log(reverse);
  if (arr === reverse) console.log(true);
};

isPalindrome(121);
