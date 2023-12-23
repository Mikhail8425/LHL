const urlEncode = function(text) {
  // Put your solution here
  let result = "";
  let space = false;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == ' ') {
      if (!space) {
        result += '%20';
      }
      space = true;
    } else {
      result += text[i];
      space = false;
    }
  } 
  return (result);
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));