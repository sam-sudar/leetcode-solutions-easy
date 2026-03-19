function findLongestSubstring(s) {
    let i = 0;
    let longest = 0;
    let lastSeen = {}

    for (let j =0; j < s.length; j++){
        let char = s[j]
        if (lastSeen[char] !== undefined && lastSeen[char] >= i){
            i = lastSeen[char] + 1;
        }
        lastSeen[char] = j;
        longest = Math.max(longest, j-i + 1);
    }
    console.log(longest)
    return longest;
}

findLongestSubstring("rithmschool");