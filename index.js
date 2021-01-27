/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

  Person.prototype.eat = function(someFood) {
    if (this.stomach.length !== 10) {
      this.stomach.push(someFood);
    }
  }

  Person.prototype.poop = function() {
    this.stomach = [];
  }
 
  Person.prototype.toString = function() {
    return `${this.name}, ${this.age}`;
  }

  // Test output: Person constructor and functions
  const mary = new Person("Mary", 50);
  console.log(mary);
  mary.eat("oatmeal");
  mary.eat("fruit");
  mary.eat("sandwich");
  console.log(mary);
  mary.poop();
  console.log(mary);
  console.log(mary.toString());
  


  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
  function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;  
  }

  Car.prototype.fill = function(gallons) {
    this.tank += gallons;
  }

  Car.prototype.drive = function(distance) {
    this.odometer += distance;
    this.tank -= (1 / this.milesPerGallon * distance) < this.tank ? (1 / this.milesPerGallon * distance) : this.tank;
    return this.tank !== 0 ? `Odometer: ${this.odometer} mi Tank: ${this.tank} gal` : `I ran out of fuel at ${this.odometer} miles!`;
  }

  // Test output: Car constructor and functions
  const hondaCRV = new Car("CR-V", 40);
  console.log(hondaCRV);
  hondaCRV.fill(1);
  console.log(hondaCRV);
  console.log(hondaCRV.drive(5));
  console.log(hondaCRV.drive(40));
  


  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
  function Baby(name, age, favoriteToy) {
    Person.call(this, name, age);
    this.favoriteToy = favoriteToy;
  }
 
  Baby.prototype = Object.create(Person.prototype);

  Baby.prototype.play = function() {
    return `Playing with ${this.favoriteToy}`;
  }

  // Test output: Baby constructor and functions, inherited Person attributes and functions
  const josh = new Baby("Josh", 1, "rattle");
  console.log(josh);
  josh.eat("milk");
  josh.eat("mashed potatoes");
  josh.eat("baby food");
  console.log(josh);
  josh.poop();
  console.log(josh);
  console.log(josh.toString());
  console.log(josh.play());
  


  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. When "this" is used within the global scope, it will bind to and represent
        either the console object (if used in a code editor), or the window object 
        (if used in the browser window).
    2. When "this" is used in a function, it will bind to and represent the object 
        that the function is called on (the object to the left of the dot operator).
    3. When "this" is used in a constructor, it will bind to and represent the object
        that the constructor is creating each time the constructor is called after
        the "new" keyword.
    4. When the .call or .apply functions are used, the functions they are called on
        which use the "this" keyword will bind it to the first object passed inside 
        the parentheses to the .call() or .apply() function call.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}