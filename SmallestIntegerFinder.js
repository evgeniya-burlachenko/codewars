Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
------------------------------------1----------------------------------------------------
class SmallestIntegerFinder {
 findSmallestInt(args) {
  return Math.min.apply(null, args)
  }
}
-------------------------------------2-------------------------------------------------
class SmallestIntegerFinder {
 findSmallestInt(args) {
  return Math.min(...args)
  }
}
-------------------------------------3--------------------------------------------------
class SmallestIntegerFinder {
  findSmallestInt(args) {
  var min = parseInt(args[0]);
  for (var i = 0; i <= args.length; i++) {
    if(args[i] < min){
      min = parseInt(args[i]);
    } 
 }
 return (min);
}
  }
-------------------------------------4---------------------------------------------------
class SmallestIntegerFinder {
  findSmallestInt(args) {
  var min = args[0];
  for (var i = 0; i <= args.length; i++) {
    if(args[i] < min){
      min = args[i];
    } 
 }
 return (min);
}
  }
