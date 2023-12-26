const sumEvenIndices = function (arr) {
  // Your solution here.
  let x = arr[0];
  let i = 2;  
  while (i < arr.length) {
    x += arr[i];
    i+=2;
  }
  return (x);
}

console.log(sumEvenIndices([1, 2, 3, 4, 5, 6, 7]), sumEvenIndices([3, 6, 9, 100, 1]));