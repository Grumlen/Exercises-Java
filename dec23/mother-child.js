function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
var childMother = ancestry.map(function(person) {
  return [person.born,byName[person.mother]];
})
var knownMother = ancestry.filter(function(person) { return byName[person.mother];});
var diff = knownMother.map(function(person) { return person.born - byName[person.mother].born;});
console.log(average(diff));
// → 31.2
