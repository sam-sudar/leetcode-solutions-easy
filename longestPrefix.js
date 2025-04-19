var longestCommonPrefix = function (strs) {
  //   console.log(strs.length);
  let splitVar, splitVar2;

  splitVar = strs[0].split("");
  splitVar2 = strs[1].split("");
  let saveIndex = [];
  let final = [];
  console.log(splitVar, splitVar2);
  for (let i = 0; i <= splitVar2.length; i++) {
    if (splitVar[i] === splitVar2[i]) {
      saveIndex.push(splitVar[i]);
    }
    console.log(saveIndex);
  }
  for (let i = 2; i <= strs.length - 1; i++) {
    let newSplitVar = strs[i].split("");
    console.log(newSplitVar);
    for (let i = 0; i <= saveIndex.length; i++) {
      if (saveIndex[i] === newSplitVar[i]) {
        final.push(splitVar[i]);
      }
      console.log(final);
    }
  }
  let last = final.join("");
  if (final.length === 0) last = "";
  console.log(last);
  return last;
};

longestCommonPrefix(["dog", "racecar", "car"]);
