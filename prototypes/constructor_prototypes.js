// Constructors have prototype property too
function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle();

let array = []; // new Array()
// This objects are the same
console.log(array.__proto__ === Array.prototype);
