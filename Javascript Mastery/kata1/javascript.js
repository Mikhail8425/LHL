function compareNumbers(a, b) {
  return b - a;
}

const sumLargestNumbers = function(data) {
  let data2 = (data.sort(compareNumbers));
  let x = data2[0] + data2[1];
  return (x);
};

console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
//return sum of two largest numbers

/*
const addFourNumbers = function(num1, num2, num3, num4) {
    let x = num1 + num2 + num3 + num4;
    return(x);
};

console.log(addFourNumbers(1, 1, 1, 1));
//sum of numbers
const sumNumbers = function(data) {
    let x = data[0];
    for (let i = 1; i < data.length; i++) {
        x += data[i];
    }
    return (x);
  };

console.log(sumNumbers([10, 4, 34, 6, 92, 2]));
//sum of all array[i]
*/