function isPalindrome(a) {
  function check(s) {
    if (s.length == 0) return;
    if (s.length == 1) return s;
    return s.slice(-1) + check(s.slice(0, -1));
  }
  let temp = check(a);
  if (a == temp) {
    return true;
  }
  return false;
}

isPalindrome("tat");
