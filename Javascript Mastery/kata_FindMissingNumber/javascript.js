const average = function(arr) {
  let x = 0;
  for(let i = 0; i < arr.length; i++){
    x += arr[i]; 
  }
  let avg = x/arr.length;
  return(avg);
};

console.log(
  average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  average([1000, -1000, 50, -999]),
  average([1, 2, 3])
);



const isPalindrome = function(str) {
  return str == str.split('').reverse().join('');
};

console.log(
  isPalindrome('racecar'),
  isPalindrome('abba'),
  isPalindrome('abc'),
  isPalindrome('abracadabra'),
  isPalindrome('kayak'),
);






const arrayIntersections = function(arr1, arr2) {
  let arr3 = [];
  for (const ar1 in arr1) {
    for (const ar2 in arr2) {
      if (arr1[ar1] === arr2[ar2]) {
        arr3.push(arr1[ar1]);
      }
    }
  }
  return (arr3);
};

console.log(
  arrayIntersections([-2, -1, 1, 2, 3], [1, 2, 3, 4, 5, 6]),
  arrayIntersections(['dog', 'cat', 'fish'], ['centipede', 'fish', 'bird']),
  arrayIntersections([1, 'hello', true], [2, 'goodbye', true])
);

//[1, 2, 3]
//['fish']
//[true]


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