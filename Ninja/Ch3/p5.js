function CustomObject (a,b) {
  this.a = a;
  this.b = b;
}
CustomObject.prototype.c = function () { return this.a + this.b; };
var obj = new CustomObject (1,2);
// My code here
function printObjProp (object,boolean) {
  if (boolean!=true) {
    for (var name in object) console.log(name);
  }
  else {
    for (var name in object) {
      if(object.hasOwnProperty(name)) console.log(name);
    }
  }
}
printObjProp(obj); // output: a, b, c
printObjProp(obj,false); // output: a, b, c
printObjProp(obj,true); // output: a, b
