const NonRepeating = function (s) {
  // let splitText = s.split("");
  //   console.log(splitText);
  let result = "";
  for (let i = 0; i < s.length - 1; i++) {
    // console.log(s[i]);
    // if(s[i] !== s[i+1]) {

    // }
    let new_arr = s.slice(i + 1);
    // console.log(new_arr);
    let val = new_arr.includes(s[i]);
    console.log(val);
    if (val === false) {
      result = s[i];
      console.log(result);
      break;
    }
  }
  return result;
};

NonRepeating("sss");
