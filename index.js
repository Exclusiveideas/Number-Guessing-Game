var max = 2;
var genNum = 0;
var stage = 1;
var points = 0;


// Uncomment the code below to save the cookies when running in a browser
// function setCookie(name, value) {
//     document.cookie = name + "=" + value;
// }

function generateNum() {
  genNum = Math.floor(Math.random() * (max - 1)) + 1;
}

var person = prompt("Please enter your username: ");
// Uncomment the code below to save the cookies when running in a browser
// setCookie("username", person);
console.log(`Stage ${stage},  Points: ${points}`)
generateNum();
var guessNum = prompt(`Please take a guess between 1 and ${max}: `);

while (guessNum == genNum) {
  points++
  max++;
  stage++;
// Uncomment the code below to save the cookies when running in a browser
  // setCookie("points", points);
  generateNum();

  console.log(`Stage ${stage},  Points: ${points}`)
  guessNum = prompt(`Please take a guess between 1 and ${max}: `);
}

console.log(`Failed guess, total points: ${points}`)