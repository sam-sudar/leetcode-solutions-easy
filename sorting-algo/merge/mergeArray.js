function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length) {
    // console.log(arr1[i]);
    if (arr1[i] < arr2[j]) {
      console.log(arr1[i], arr2[j]);
      result.push(arr1[i]);
      i++;
      console.log(result);
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      console.log(arr1[i], arr2[j]);
      j++;
      console.log(result);
    }
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  console.log(result);
}
merge([1, 10, 50], [2, 13, 40, 99, 100]);
