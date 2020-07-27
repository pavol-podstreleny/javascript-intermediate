// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

function createCircle(radius, location) {
  return {
    radius,
    location,
    draw() {
      console.log("draw");
    },
  };
}

const another = new Circle(1);
console.log(another.constructor);

const circle = createCircle(1, { x: 1 });
console.log(circle.constructor);

let x = {};
// same as x = new Object();
// String()
// Boolean()
//Number()

/**
 * Every object has constructor property that shows which function created the object
 */
