function reverse(str, start, end) {
  let temp;        
  while (start <= end) { 
    temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }
}

const reverseWords = function(str) {
  str = str.split("");
  let start = 0;
  for (let end = 0; end < str.length; end++) {
    if (str[end] == ' ') {
      reverse(str, start, end);
      start = end + 1;
    }
  }
  reverse(str, start, str.length - 1);
  reverse(str, 0, str.length - 1);
  return str.join("");
};

console.log(
  reverseWords('hello and welcome to Lighthouse Labs'),
  reverseWords('am I Yoda')
);
