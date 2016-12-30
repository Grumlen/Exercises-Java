function range(start,end,step) {
  var array = [];
  if (step==undefined) step=1;
  if (step>0) {
    for (i=start;i<=end;i+=step) {
      array.push(i);
    }
  }
  else {
    for (i=start;i>=end;i+=step) {
      array.push(i);
    }
  }
  return array;
}
function sum(array) {
  var total = 0;
  for (i=0;i<array.length;i++) {
    total += array[i];
  }
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
