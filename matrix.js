// function transpose(matrix) {
//   let n = matrix.length;
//   let m = matrix[0].length;
//   let result = [];
//   for (let i = 0; i < m; i++) {
//     result[i] = [];
//     for (let j = 0; j < n; j++) {
//       result[i][j] = matrix[j][i];
//     }
//   }
//   return result;
// }

// console.log(
//   transpose([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// function diagonalSum(matrix) {
//   let n = matrix.length;
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += matrix[i][i];
//     sum += matrix[i][n - 1 - i];
//   }

//   if (n % 2 === 1) {
//     sum -= matrix[Math.floor(n / 2)][Math.floor(n / 2)];
//   }
//   return sum;
// }

// console.log(
//   diagonalSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

function transpose(matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
