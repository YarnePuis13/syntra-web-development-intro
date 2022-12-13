console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");

/**

* Create some classes.

* For inspiration what you can create, look around you 👀.

* Some examples: furniture, animal, chair, teacher, student, person, tree, movie,...

*/

const service = new WeatherService("http://localhost:3000", "NA");

class WeatherService {
  constructor(apiEndpoint, region) {
    // attributes

    this.apiEndpoint = apiEndpoint;

    this.region = region;
  }

  // methods

  async standVanDeMaan() {
    return "standvandemaan";
  }

  async getTemparture() {
    await fetch(this.apiEndpoint);
  }
}

class NorthAmericaWS extends WeatherService {
  constructor(apiEndpoint) {
    super(apiEndpoint, "NA");
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log("woof 🐶");
  }
}

class BorderCollie extends Dog {
  constructor(name) {
    super(name);
  }

  bark(name) {
    console.log("border bark " + name);
  }

  herd() {
    console.log("nfgdfh");
  }
}

class Person {
  firstName;

  #lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;

    this.#lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // methods

  returnName() {
    return this.name;
  }

  changeName(newName) {
    console.log("Changed name to: " + newName);

    this.name = newName;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

new Array().length;

const person = new Person("Simoné");

person.fullName;

class Tree {
  constructor(height, species) {
    this.height = height;

    this.age = 20;

    this.species = species;
  }
}

class Hero {
  constructor() {
    this.hp = 10;

    this.name = "Thor";

    this.superpower = "Lighting Strike";
  }
}

class WhiteBoard {}

console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");

/**
 
 * Initialize all those classes you defined above using the new keyword.
 
 * Like this you are creating class instances you can use further along in your code.
 
 */

const maple = new Tree(20, "Maple");

const hero = new Hero();

class Calculator {
  constructor() {
    this.total = 0;
  }

  add(number) {
    this.total += number;

    return this;
  }

  get display() {
    return this.total;
  }
}

const calc = new Calculator().add(1).add(2).add(3);

class Queue {
  #data;

  constructor() {
    this.#data = [];
  }

  enqueue(value) {
    this.#data.push(value);
  }

  dequeue() {
    return this.#data.shift();
  }

  peek() {
    return this.#data[0];
  }
}
