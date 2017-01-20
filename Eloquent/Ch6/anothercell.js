// Your code here.
function StretchCell(inner,width,height) {
  this.height = Math.max(inner.minHeight(),height);
  this.width = Math.max(inner.minWidth(),width);
  this.inner = inner;
}
StretchCell.prototype.minHeight = function () {return this.height;};
StretchCell.prototype.minWidth = function () {return this.width;};
StretchCell.prototype.draw = function (w,h) {
  return this.inner.draw(Math.max(w,this.width),Math.max(h,this.height));
}
var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
