// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

circle.location = { x: 1 };
console.log(circle);
circle["bla"] = "palo";
console.log(circle);
