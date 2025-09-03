function bubbleSort(arr, comparator) {
  // add whatever parameters you deem necessary - good luck!
  let temp = 0;
  if (typeof comparator !== "function") {
    // provide a default
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      //   console.log(arr);
    }
    return arr;
  } else {
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (comparator(arr[j], arr[j + 1]) > 0) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        // else if (comparator(arr[j], arr[j + 1]) > 0) {
        // }
      }
    }
    // console.log(arr);
    return arr;
  }
}

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

bubbleSort(kitties, strComp);

//Optimized code:
// function bubbleSort(arr, comparator) {
//   // Default comparator for numbers (ascending)
//   if (typeof comparator !== 'function') {
//     comparator = function(a, b) {
//       return a - b;
//     };
//   }

//   let n = arr.length;
//   let swapped;

//   for (let i = n - 1; i > 0; i--) {
//     swapped = false;

//     for (let j = 0; j < i; j++) {
//       if (comparator(arr[j], arr[j + 1]) > 0) {
//         // Swap using destructuring
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }

//     if (!swapped) break; // Optimization: stop early if already sorted
//   }

//   return arr;
// }

// Time Complexity:

// Worst: O(n²) (nested loops)

// Best: O(n) (if already sorted, because of swapped optimization)

// Average: O(n²)

// Space Complexity:

// O(1) (in-place sorting, no extra array)
