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

// Verify an Object's Constructor with 'instanceof'
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);
myHouse instanceof House;

// Understand Own Properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
  if (canaray.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

// Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");

// Iterate Over All Properties
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

// Understand the Constructor Property
function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

// Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function () {
    console.log("Yum!");
  },
  describe: function () {
    console.log("My name is " + this.name + ".");
  },
};

// Set the Constructor Property when changing the prototype
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog, // Set the Constructor so it does not get erased!!
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

// Understand Where the Prototype Comes From
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);

// Understand the Prototype Chain
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle); // prototype of beagle is Dog
Object.prototype.isPrototypeOf(Dog); // prototype of Dog is Object

// Use Inheritance to avoid Repeat Code
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  /*
  eat: function () {
    console.log("nom nom nom");
  },
  */
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  /*
  eat: function () {
    console.log("nom nom nom");
  },
  */
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  // Add eat() to the Animal supertype to avoid repeat code within Cat and Bear
  eat: function () {
    console.log("nom nom nom");
  },
};

// Inherit Behaviors from a Supertype
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

// Set the Childs Prototype to an Instance of the Parent
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}
// Instances of Dog inherit from Animal
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

// Reset an Inherited Constructor Property
function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird; // Manually set constructor property
Dog.prototype.constructor = Dog; // Manually set constructor property

let duck = new Bird();
let beagle = new Dog();

// Add Methods after Inheritance
function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype); // inherit from Animal
Dog.prototype.constructor = Dog; // reset constructor
Dog.prototype.bark = function () {
  console.log("Woof!");
};

let beagle = new Dog();

// Override Inherited Methods
function Bird() {}

Bird.prototype.fly = function () {
  return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function () {
  // OVERRIDES the Bird.fly method
  return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());
