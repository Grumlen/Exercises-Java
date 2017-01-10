function distance () {
  var distance;
  try {
    if (arguments.length==4) {
      console.log(Math.sqrt(Math.pow(arguments[0]-arguments[2],2)+Math.pow(arguments[1]-arguments[3],2)));
    }
    else if (arguments.length==6) {
      console.log(Math.sqrt(Math.pow(arguments[0]-arguments[3],2)+Math.pow(arguments[1]-arguments[4],2)+Math.pow(arguments[2]-arguments[5],2)));
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
