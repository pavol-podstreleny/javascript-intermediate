//Every function is the object
function Circle(radius) {
  this.radius = radius;
}

console.log(Circle.name); //
console.log(Circle.length); // number of arguments
console.log(Circle.constructor); // Function() -> build in constructor

Circle.call({}, 1); // Same as new Circle(1)

const Circle1 = new Function("radius");
