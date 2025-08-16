function maximum69Number(num) {
  // Convert number to string
  let str = String(num);

  // Replace the first "6" with "9"
  let newStr = str.replace("6", "9");

  // Convert back to number
  return Number(newStr);
}
