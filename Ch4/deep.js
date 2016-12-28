function deepEqual(X,Y) {
  if (typeof X === "object" && typeof Y === "object" && X != null && Y != null) {
    if (X.length!=Y.length) return false;
    for (var event in X) {
      return deepEqual(X[event],Y[event])
    }
  }
  if (X === Y) return true;
  else return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
