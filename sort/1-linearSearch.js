// LINEAR SEARCH
// TIME COMPLEXITY: O(n)

// Look at every value in order and see if it's the value we want
// One at a time - start either at the beginning or the end
// Built in JS methods: indexOf, includes, find, findIndex

const arr = [5, 8, 1, 100, 12, 3, 12];

// Pseudocode:
// 1. Function accepts an array and a value
// 2. Loop through the entire array => check if the current element is equal to the value
// 3. If it is, return the index at which the element is found
// 4. If the value is never found, return -1

const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

console.log(linearSearch(arr, 12));
