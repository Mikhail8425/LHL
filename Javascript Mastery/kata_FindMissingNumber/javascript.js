const findMissingNumber = function(arr) {
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === 2) {
      return(arr[i] - 1)
    }
  }
};

console.log(
  findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]),
  findMissingNumber([100, 101, 102, 103, 105, 106, 107]),
  findMissingNumber([-3, -2, -1, 1, 2, 3])
);

//5
//104
//0