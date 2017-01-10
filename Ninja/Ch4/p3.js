function Num(x) {
  var _x;
  this.getX = function () {return _x;};
  this.setX = function (x) {
    if (typeof x == "number") _x = x;
    else throw new Error("Must be a number");
  };
}
var num = new Num();
var notNum = new Num();
num.setX(13);
console.log(num.getX());
//notNum.setX("q");
console.log(notNum.getX());
_x="hi";
console.log(_x)

console.log(num.getX());
