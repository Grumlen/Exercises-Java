function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
// Your code here.
var centuries = [];
ancestry.forEach(function(person) {
  var cent = Math.ceil(person.died/100);
  var age = person.died-person.born;
  centuries.push([cent,age]);
});
cent16 = centuries.filter(function(x) {return x[0]==16;});
cent17 = centuries.filter(function(x) {return x[0]==17;});
cent18 = centuries.filter(function(x) {return x[0]==18;});
cent19 = centuries.filter(function(x) {return x[0]==19;});
cent20 = centuries.filter(function(x) {return x[0]==20;});
cent21 = centuries.filter(function(x) {return x[0]==21;});
function removeCentury(array) {
  var popped = [];
  for (i=0;i<array.length;i++) {
    popped[i]=array[i].pop();
  }
  return popped;
}
console.log("16: "+average(removeCentury(cent16)));
console.log("17: "+average(removeCentury(cent17)));
console.log("18: "+average(removeCentury(cent18)));
console.log("19: "+average(removeCentury(cent19)));
console.log("20: "+average(removeCentury(cent20)));
console.log("21: "+average(removeCentury(cent21)));
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
