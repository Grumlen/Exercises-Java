var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
function flatten(arr) {
  var flat = arr.reduce(function(a,b) {return a.concat(b)},[]);
  for (i=0;i<flat.length;i++) {
    if (Array.isArray(flat[i])) { flat = flatten(flat);}
  }
  return flat;
}
console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
