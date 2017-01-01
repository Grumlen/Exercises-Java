// This is unfinished. I could easily create functions to do the desired tasks, but I do not know how to create the interface desired.
"use strict";
function logFive(array) {
  var run=Math.min(array.length,5);
  for (i=0;i<run;i++) {
    console.log(array[i]);
  }
}
function ArraySeq(array) {
  for (var j=0;j<array.length;j++) {
    this.j=array[j];
  }
}
console.log(new ArraySeq([1,2]));
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
//logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
// Definitely not working
