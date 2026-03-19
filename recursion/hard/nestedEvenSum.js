function nestedEvenSum (ob) {
    let final_result = 0;
    for (let i in ob){
        
        if (typeof ob[i] == 'number' && ob[i]%2==0){
            final_result += ob[i]
        }
        if (typeof ob[i] == 'object'){
            final_result += nestedEvenSum(ob[i])
        }
    }
    return final_result
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10