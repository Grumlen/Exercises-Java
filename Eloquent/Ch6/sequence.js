// Your code here.
function logFive(object) {
  for (i=0;i<Math.min(5,object.array.length);i++) {
    console.log(object.array[i]);
  }
}
function RangeSeq(from,to) {
  this.array = [];
  for (i=from;i<=to;i++) {
    this.array.push(i);
  }
}
function ArraySeq(array) {
  this.array = array;
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
