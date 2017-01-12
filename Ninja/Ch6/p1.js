class Polygon {
  constructor() {
    this.sideLengths = arguments;
  };
  get perimeter() {
    if (this.sideLengths.length=this.sides) {
      let p = 0;
      for(let i=0;i<this.sideLengths.length;i++) {
        p+=this.sideLengths[i];
      }
      return console.log("Perimeter is "+p);
    }
    else return console.warn("Invalid # of sides")
  };
}
class Triangle extends Polygon {
  constructor(height,width) {
    this.height = height;
    this.width = width;
    this.sides = 3;
  }
  get area() {
    return console.log("Area is "+this.height*this.width/2);
  }
}
class Quadrilateral extends Polygon {
  constructor () {
    this.sides = 4;
  }
}
class Pentagon extends Polygon {
  constructor () {
    this.sides = 5;
  }
}
class Hexagon extends Polygon {
  constructor () {
    this.sides = 6;
  }
}
class RegularPentagon extends Pentagon {
  constructor(side) {
    this.side = side;
  }
  get area() {
    var apogee = this.side/(2*Math.tan(Math.PI/this.sides));
    return console.log("Area is "+(apogee*this.side*this.sides)/2);
  }
}
class RegularHexagon extends Hexagon {
  constructor(side) {
    this.side = side;
  }
  get area() {
    var apogee = this.side/(2*Math.tan(Math.PI/this.sides));
    return console.log("Area is "+(apogee*this.side*this.sides)/2);
  }
}
class EquilateralTriangle extends Triangle {
  constructor(side) {
    this.side = side;
  }
  get area() {
    var apogee = this.side/(2*Math.tan(Math.PI/this.sides));
    return console.log("Area is "+(apogee*this.side*this.sides)/2);
  }
}
class Parallelogram extends Quadrilateral {
  constructor(height,width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return console.log("Area is "+this.height*this.width);
  }
}
class Rectangle extends Parallelogram {
  get perimeter() {
    return console.log("Perimeter is "+this.height*2+this.width*2)
  }
}
class Square extends Rectangle {
  constructor(side) {
    this.side = side;
  }
  get area() {
    return Math.pow(this.side,2);
  }
}
var square = new Rectangle(5,6);
