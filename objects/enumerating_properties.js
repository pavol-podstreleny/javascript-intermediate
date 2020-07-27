function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

for (key in circle) {
  console.log(key, circle[key]);
}

const keysArray = Object.keys(circle);
console.log(keysArray);

const containsProperty = "radius" in circle;
console.log(containsProperty);
