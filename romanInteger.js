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
  if (arr[("I", "I", "I")]) {
    console.log("Its three");
  }
  for (let x of arr) {
    console.log(obj[x]);
    count = count + obj[x];
  }
  console.log(count);
  // console.log(arr);
  // return count;
};

romanToInt("IV");
