function arrayToList(array) {
  var list = null;
  for (i=array.length-1;i>=0;i--) {
    list = {value:array[i],rest:list};
  }
  return list;
}
function listToArray(list) {
  var array=[];
  for (var node = list; node; node=node.rest) {
    array.push(node.value);
  }
  return array;
}
function prepend(addition,old) {
  var list = {value:addition, rest:old};
  return list;
}
function nth(list,number) {
  if (number==0) return list.value;
  else if (list.rest==null) return null;
  else return nth(list.rest,number-1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
