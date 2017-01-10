function distance () {
  var distance;
  function isNumbers(array) {
    for (var i=0;i<array.length;i++) {
      if (typeof array[i] != "number") return false;
    }
    return true;
  }
  try {
    if (arguments.length==4) { // 2D points as individual values, next line checks to ensure they are all numbers
      if (isNumbers(arguments)) {
        console.log(Math.sqrt(Math.pow(arguments[0]-arguments[2],2)+Math.pow(arguments[1]-arguments[3],2)));
      }
      else throw new Error("All parameters must be numbers");
    }
    else if (arguments.length==6) { // 3D points as individual values, next line checks to ensure they are all numbers
      if (isNumbers(arguments)) {
        console.log(Math.sqrt(Math.pow(arguments[0]-arguments[3],2)+Math.pow(arguments[1]-arguments[4],2)+Math.pow(arguments[2]-arguments[5],2)));
      }
      else throw new Error("All parameters must be numbers") ;
    }
    else if (arguments.length==2) { // 2D or 3D points as arrays
      if (Array.isArray(arguments[0]) && Array.isArray(arguments[1])) { // Ensure both are arrays
        if ((arguments[0].length == arguments[1].length) && (arguments[0].length==2 || arguments[0].length==3)) { // Check length of arrays
          if (isNumbers(arguments[0]) && isNumbers(arguments[1])) {
            var total = 0;
            for (let i=0;i<arguments[0].length;i++) {
              total+=Math.pow(arguments[0][i]-arguments[1][i],2);
            }
            console.log(Math.sqrt(total));
          }
          else throw new Error("All array values must be numbers")
        }
        else throw new Error("Incompatible Point Data");
      }
      else throw new Error("Both parameters must be arrays");
    }
    else throw new Error("Insufficient Parameters");
  } catch (e) {
    console.warn(e);
  }
}
var x1 = 1, y1 = 2, z1 = 1, x2 = 2, y2 = 2, z2 = 4;
distance(x1, y1, x2, y2);
distance(x1, y1, z1, x2, y2, z2);
distance(x1, x2);
distance([1,2], [2,2]);
distance([1,2], [2,2,4]);
