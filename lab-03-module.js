// TODO Part 9: Add the reverseString function to the module.exports object
// for import using require()
/*
module.exports = {
  greetings
}
statement will export greeting from this module(assuming it is defined).
Use this to work on part 9

*/
// TODO Part 10: Add an anonymous function concatenateString that takes a string
// as a parameter, and returns the original concatenated to itself

module.exports = {
    reverseString, 
    concatenateString: function(string){return string+string;}
};
/*
module.exports = {
  greetings: function(a){
    return "greetings to " + a
  }
}
this statement will export the function greetings() from this module
this will help on part 10
*/

// TODO Part 8: Reference the following website to use the spread operator
// to reverse the string for reverseString(str) function. Comment out the
// original return line of code.
// https://betterprogramming.pub/5-ways-to-reverse-a-string-in-javascript-466f62845827
function reverseString(str) {
  return str.split("").reverse().join("");
}
/*
const a = "mango";
console.log([...a]) outputs ["m","a","n","g","o"]
... is the spread operator
compare [...a] to split and do part 8
The link over there explains more on this part
 */