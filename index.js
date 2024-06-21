function sayHelloToGuadalupe() {
  console.log("Hello, Guadalupe!");
}

function sayHelloToLiz() {
  console.log("Hello, Liz!");
}

// passing the argument 'anything' into our function
function doSomething(thing) {
  console.log(thing);
}

doSomething("anything");


function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}

//Return Values in JavaScript
function add(x, y) {
  return x + y;
}

//add function
const sum = add(num1, num2);
const message = `The sum of your numbers is: ${sum}.`;
