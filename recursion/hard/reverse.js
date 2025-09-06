function reverse(a) {
  if (a.length - 1 == 0) return;
  if (a.length == 1) return a;
  return a.slice(-1) + reverse(a.slice(0, -1));
}

reverse("Sam");

//First recursion problem that i solved on my own
