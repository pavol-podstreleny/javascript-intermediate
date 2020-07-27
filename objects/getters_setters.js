function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  this.draw = function () {
    console.log("draw");
  };
  Object.defineProperty(this, "defaultLocation", {
    // Getter
    get: function () {
      return defaultLocation;
    },
    // Setter
    set: function (value) {
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
console.log(circle.defineProperty);
