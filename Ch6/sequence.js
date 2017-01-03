// Your code here.
function logFive(array) {
  for (i=0;i<Math.min(5,array.length);i++) {
    console.log(array[i]);
  }
}
function RangeSeq(from,to) {
  var array = [];
  for (i=from;i<=to;i++) {
    array.push(i);
  }
  return array;
}
function ArraySeq(array) {
  return array;
}
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
