function deepEqual(X,Y) {
  if (typeof X != typeof Y) return false;
  if ((typeof X === "object" || typeof Y === "object") && (X != null || Y != null)) {
    if (X.length!=Y.length) return false;
    for (var event in X) {
      return ((event in Y) && deepEqual(X[event],Y[event]));
    }
    for (var event in Y) {
      return ((event in X) && deepEqual(X[event],Y[event]));
    }
  }
  else return (X===Y);
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an",hi:{bye:''}}, object: 2}));
// → false
