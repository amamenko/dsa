// BUBBLE SORT (or sinking sort)
// TIME COMPLEXITY: O(n^2)

// Larger values "bubble" to the top => "swap" if the next number is smaller

// For example: one iteration:
// [5, 3, 4, 1, 2]
//  ^--^
// [3, 5, 4, 1, 2]
//     ^--^
// [3, 4, 5, 1, 2]
//        ^--^
// [3, 4, 1, 5, 2]
//           ^--^
// [3, 4, 1, 2, 5]

// Swapping function
const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

// Pseudocode:
// 1. Start looping with a variable called i at the end of the array
//    towards the beginning.
// 2. Start an inner loop with a variable called j from the beginning
//    until i - 1.
// 3. If arr[j] is greater than arr[j+1], swap those two values!
// 4. Return the sorted array

const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort([37, 45, 29, 8]));
// [37, 29, 8, 45]
// [29, 8, 37, 45]
