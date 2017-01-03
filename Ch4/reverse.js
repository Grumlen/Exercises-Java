function reverseArray(array) {
  var reverse = [];
  for (i=1;i<=array.length;i++) {
    reverse.push(array[array.length-i]);
  }
  return reverse;
}
function reverseArrayInPlace(array) {
  for (var i=0;i<=Math.floor(array.length/2);i++) {
    var temp = array[i];
    array[i]=array[array.length-i-1];
    array[array.length-i-1]=temp;
  }
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
