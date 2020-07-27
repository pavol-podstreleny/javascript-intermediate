// Prototype is just regular object in the memory
// Prototype parrent of another object
// Every object we create has prototype

// Only Object base does not have prototype

let y = {};
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

// When calling property/method on y first javascript check if y contains toString method
// if not it look at its prototy if it contains method till we not get to Object

y.toString();
