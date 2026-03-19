
function someRecursive(arr, cbf){
    if (arr.length === 0) return false;
    if (cbf(arr[0]) == true){
        return true;
    }
    else {
        
        return someRecursive(arr.slice(1), cbf)
    }
}


function isOdd(val){
    if (val % 2 !== 0){
        return true;
    }
    else {
        return false;
    }
}
someRecursive([1,2,3,4], isOdd)