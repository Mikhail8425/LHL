const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let longest = instructors[0];
  for (let i=1; i<instructors.length; i++) {
    const instructor = instructors[i]
    if (instructor.name.length > longest.name.length) {
      longest = instructor;
    }
  }
  return(longest)
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);