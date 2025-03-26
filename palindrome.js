var isPalindrome = function (x) {
  let reverse = [];
  // console.log(x);
  let check;
  arr = x.toString().split("").map(Number);
  // console.log(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    // console.log(reverse);
    reverse.push(arr[i]);
  }

  // for (let i = arr.length; i <= 0; i++) {
  // console.log(reverse);
  //   if (arr[i] === reverse[i]) {
  //     check = true;
  //   }
  // }

  // console.log(reverse);

  const final = JSON.stringify(arr) === JSON.stringify(reverse);
  return final;

  // console.log(typeof reverse);
  // if (arr === reverse) console.log(true);
};

isPalindrome(121);
