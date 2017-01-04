function deepEqual(X,Y) {
  if (X===Y) return true;
  if (typeof X != typeof Y) return false;
  if ((typeof X === "object" && typeof Y === "object") && (X != null || Y != null)) {
    var counterX=0, counterY=0;
    for (var event in X) {
      if (!((event in Y) && deepEqual(X[event],Y[event]))) return false;
      counterX++;
    }
    for (var event in Y) {
      if (!((event in X) && deepEqual(X[event],Y[event]))) return false;
      counterY++;
    }
    return (counterX==counterY);
  }
  return false;
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
var obj = {here: {is: "an",hi:{bye:{no:5}}}, object: 2};
console.log(deepEqual(obj, {here: {is: "an",hi:{bye:{no:2}}}, object: 2}));
