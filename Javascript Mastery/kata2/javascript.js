const conditionalSum = function(values, condition) {
  if (values.length > 0 && condition === "odd") {
    let values2 = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i]%2 === 1) {
        values2.push(values[i]);
      }
    }
    let x = values2[0];
    for (let i = 1; i < values2.length; i++) {
        x += values2[i];
    }
    return (x);
  } else if (values.length > 0 && condition === "even") {
    let values2 = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i]%2 === 0) {
        values2.push(values[i]);
      }
    }
    let x = values2[0];
    for (let i = 1; i < values2.length; i++) {
        x += values2[i];
    }
    return (x);
  } else {
    return(0);
  }

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));