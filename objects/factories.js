function createCircle(radius, location) {
  return {
    radius,
    location,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(10, { x: 1, y: 1 });
