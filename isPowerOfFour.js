function isPowerOfFour(n) {
  if (n <= 0) return false; // must be positive

  while (n % 4 === 0) {
    // keep dividing by 4
    n = n / 4;
  }

  return n === 1; // if we end at 1, it's a power of four
}

isPowerOfFour(16);

// Again failed an easy one, 3 days in a row.
