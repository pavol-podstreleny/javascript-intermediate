function Circle(radius) {
  // Instance members
  this.radius = radius;
}

// Prototype members
Circle.prototype.draw = function () {
  console.log("draw");
};

Circle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};

const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(c1.toString());
