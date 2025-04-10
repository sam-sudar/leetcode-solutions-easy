var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let count = 0;

  const arr = s.split("");
  let currVal = obj[arr[0]];
  let minusVal = 0;
  console.log(currVal);

  for (let x of arr) {
    if (currVal < obj[x]) {
      minusVal = obj[x] - currVal;
      count = count - currVal + minusVal;
      console.log("If loop: " + count);
    } else {
      count = count + obj[x];
      console.log("Else loop: " + count);
    }
    currVal = obj[x];
    // console.log(currVal);
  }
  console.log(count);
  // console.log(arr);
  // return count;
};

romanToInt("MCMXCIV");
