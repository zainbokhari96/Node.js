// Import / Export Method (New ES6 Syntax)
// For Default -> import ... from '';
// For Named -> import {...} from '';

import User, { printName, printDesignation } from "./User.js";

const user = new User("Zain", "Software Engineer");
console.log(user);
printName(user);
printDesignation(user);

// Module Export and Require Method
/* 
const Company = require("./Company")
const myCompany = new Company("InvoZone","Johar Town","Software House");
myCompany.printCompanyData();
console.log(myCompany) 
*/

// Binding this with object
const car = {
  make: "honda",
  year: "2010",
  details() {
    console.log(this);
  },
};

car.details(); //  Will Return Complete Object

const mycar = car.details.bind(car); // Bind Object To Use In Other Variable

mycar();

// Arrow Function
const arrowFunc = (value) => {
  console.log("This is arrow function with value of : " + value);
  return value;
};
arrowFunc(15);

// Class With Inheritance
class Name {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`User is walking`);
  }
}

class Person extends Name {
  constructor(name, project) {
    super(name);
    this.project = project;
  }
  work(person) {
    console.log(`This is ${person.name} Working On ${person.project}`);
  }
}
const newUser = new Person("Zain", "Node.js");
newUser.walk();
console.log(newUser);

//  Promises
const testPromise = (value) => {
  return new Promise((resolve, reject) => {
    console.log("In Promise");
    if (value >= 10) {
      setTimeout(resolve("Promise Resolved"), 1000);
    } else {
      reject("Failed : Number is less than 10");
    }
  });
};

testPromise(12)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("Testing Async"); //Will Print Before testPromise

// Async await
const testAsync = async (name) => {
  try {
    const test = await checkName(name);
    console.log(test);
  } catch (error) {
    console.log(error);
  }
};

function checkName(name) {
  if (name == "google") {
    return "test Passed";
  } else {
    throw "Test Failed";
  }
}

testAsync("zain");
console.log("After"); //Will Print Before testAsync
