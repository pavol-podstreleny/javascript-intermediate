function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    console.log("move");
  };
}

const c1 = new Circle(1);

// Prototype members

Circle.prototype.draw = function () {
  console.log("draw");
};

console.log(Object.keys(c1));

// Itterate through instance and prototype members
for (key in c1) console.log(key);

console.log(c1.hasOwnProperty("radius")); // true
console.log(c1.hasOwnProperty("draw")); // false
