const removeDuplicates = function(arr) {
  return arr.sort().filter(
    function(item, i, arr2) {
      return item != arr2[i - 1];
    }
  );
}

console.log(
  removeDuplicates([1, 2, 2, 2, 3, 4, 5]),
  removeDuplicates(['a', 'b', 'b', 'c', 'd', 'e', 'e', 'a', 'f']),
);

//[1, 2, 3, 4, 5]
//['a', 'b', 'c', 'd', 'e', 'f']

//ary.indexOf(item) === -1 // doesn't exist in new array yet
//ary.contains(item) // return boolean, exists in array