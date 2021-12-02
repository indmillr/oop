let dog = {
  name: "Luna",
  numLegs: 4,
};

console.log(dog.name);
console.log(dog.numLegs);

// Create a method on an Object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + dog.numLegs + " legs.";
  },
};
dog.sayLegs();

// 'this' keyword to reuse code
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};
dog.sayLegs();

// Define a Constructor Function
function Dog() {
  this.name = "Luna";
  this.color = "brown";
  this.numLegs = 4;
}

// Use a constructor to Create Objects
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();

// Extend constructors to Receive Arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("Luna", "brown");
