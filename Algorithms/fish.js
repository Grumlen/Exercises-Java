var fish = [7,-2,3,1,-1,-4,5,-1,3,4]; // Postive means swimming right, negative means swimming left, larger number means larger fish
function munch(array) {
  var current = [], alive = 0;
  function devour(value) {
    if (current.length>0) {
      if (value>current[current.length-1]) {
        current.pop(); // Smaller fish gets eaten
        return devour(value); // Large negative fish checks to see if it eats again
      }
      else return current; // All positive fish remaining
    }
    else alive++; // Negative fish ate everything in its path and survives
    return [];
  }
  for (var i=0;i<array.length;i++) {
    if (array[i]>0) {
      current.push(array[i]); // Building up a congo-line of positive fish
    }
    if (array[i]<0) { // Encountering a negative fish
      current = devour(Math.abs(array[i])); // Check to see if any fish get eaten
    }
  }
  alive+=current.length; // Add remaining positive fish to negative fish that survived
  return alive;
}
console.log(munch(fish));
