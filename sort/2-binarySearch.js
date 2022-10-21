// BINARY SEARCH
// TIME COMPLEXITY: O(log n)

// ***CAVEAT*** Only works on SORTED arrays!

// Faster than Linear Search
// Divide and Conquer => Rather than eliminating one element at a time you eliminate half the
// remaining elements at a time

// Pseudocode:
// 1. Function accepts a sorted array and a value
// 2. Create a left pointer at the start of the array, and a right pointer at the end
//    of the array
// 3. While the left pointer comes before the right pointer:
// 4. Create a pointer in the middle
//    a. If you find the value you want, return the index
//    b. If the value is too small, move the left pointer up
//    c. If it's too large, move the right pointer down
// 5. If you never find the value, return -1

const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === value ? middle : -1;
};

binarySearch([2, 5, 6, 9, 13, 15, 28], 15);
// First iteration:
// [2, 5, 6, 9, 13, 15, 28, 30]
//  S        M              E

// Second iteration:
// [2, 5, 6, 9, 13, 15, 28, 30]
//              S   M       E

// Third iteration:
// [2, 5, 6, 9, 13, 15, 28, 30]
//                      SM   E

// Middle is 28

// Time complexity is O(log n) because:
// If 16 elements => worst case = 4 "steps"
// 2^4 = 16
// log base 2 of 32 elements => 5 "steps"
// 2^5 = 32
