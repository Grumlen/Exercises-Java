function reverseArray(array) {
  var reverse = [];
  for (i=1;i<=array.length;i++) {
    reverse.push(array[array.length-i]);
  }
  return reverse;
}
function reverseArrayInPlace(array) {
  for (i=array.length-2;i>=0;i--) {
    array = array.slice(0,i).concat(array.slice(i+1)).concat(array[i]);
  }
  arrayValue=array;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
