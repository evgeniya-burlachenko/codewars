/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/
------------------------------------------------------------------------------------------------
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`; //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
}
-----------------------------------------------------------------------
function highAndLow(numbers){
  num=numbers.split(' ');
  var max = parseInt(num[0]);
  var min = parseInt(num[0]);
  for (var i = 0; i <= num.length; i++) {
    if(num[i] > max){
      max = parseInt(num[i]);
    }
  }
  for (var i = 0; i <= num.length; i++) {
    if(num[i] < min){
      min = parseInt(num[i]);
    } 
 }
 return (max + " " + min);
}
-----------------------------------------------------------------------
function highAndLow(numbers){
  var numArray = numbers.split(" ");
  return Math.max.apply(null, numArray) + " " +  Math.min.apply(null, numArray);
}
------------------------------------------------------------------------
function highAndLow(numbers){
  var numArray = numbers.split(" ");
  var min = Math.min.apply(null, numArray);
  var max =  Math.max.apply(null, numArray);
   return (max + " " + min);
}
