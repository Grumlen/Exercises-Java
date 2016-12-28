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
var knownMother = childMother.filter(function(person) {if (person[1]) return person;});
var diff = knownMother.forEach(function(person) {return person[0]-person[1].born;});
console.log(knownMother);
console.log(diff)
console.log(ancestry.filter(function(person) {return person.mother;}));
// → 31.2
