function Image(data,width,height,name) {
  this.data = data;
  this.width = width;
  this.height = height;
  this.name = name;
  this.pixelData = function (x,y) {
    if (x>width || y>height) return "Invalid dimensions";
    else return data[x+y*width];
  };
}
var data = new Array(1600);
for (let i=0;i<data.length;i++) {
  data[i]=i;
}
var img = new Image(data,40,40,'myImage');
console.log(img.width);
console.log(img.height);
console.log(img.name);
console.log(img.pixelData(20,4));
