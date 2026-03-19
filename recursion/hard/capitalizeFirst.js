function capitalizeFirst(arr){
    if (arr.length == 0) return arr;
    let firstElement = arr.shift()
    let firstCap = String(firstElement).charAt(0).toUpperCase() + String(firstElement).slice(1);
    return [firstCap, ...capitalizeFirst(arr)]

}
capitalizeFirst(['car','taco','banana'])