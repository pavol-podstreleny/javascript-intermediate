let objectBase = Object.getPrototypeOf(person);

Object.defineProperty(person, "name", {
  writable: false, //readonly
  enumerable: false, // not show in Object.keys()
  configurable: false, // can not delete the property
});

person.name = "John";

// Only properties defined in person are visible
for (key in person) {
  console.log(key);
}

console.log(person);
