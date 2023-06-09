/*
INSTRUCTIONS:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
  if (array.length) {
    return array.reduce((a, b) => a + b) / array.length;
  }
  return 0;
}
findAverage([1, 2, 3, 5, 6]);

//  Alternative solution
function findAverage(array) {
  return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
}

findAverage([1, 2, 3]);

// You can also use forEach loop, map () method, for loop, and for/of loop
// to first find the sum of the array, then divide with the array length
