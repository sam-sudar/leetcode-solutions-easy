function flattenArray(arr){
    const result = []
    for (const item of arr){
        if (Array.isArray(item)){
            result.push(...flattenArray(item))
        }
        else {
            result.push(item)
        }
    }
    return result;
}

flattenArray([1, 2, 3, [4, 5] ])