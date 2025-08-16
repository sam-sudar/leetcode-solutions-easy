function isSubsequence(a, b) {
  let left = 0;
  let right = 0;

  while (left < a.length && right < b.length) {
    if (a[left] === b[right]) {
      left++;
    }
    right++; // always move right forward
  }

  return left === a.length;
}

isSubsequence("abc", "ahbgdcdd");

//Chatgpt gavee the right answer. Gotta work harder man
