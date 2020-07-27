// Private properties and members

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function () {};
  this.draw = function () {
    computeOptimumLocation();
    console.log("draw");
  };
}

const circle = new Circle(10);
