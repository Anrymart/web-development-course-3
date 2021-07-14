/*
 * local and outer variables, shadowing
 *
 * variable scope
 *
 * arguments
 *
 * nested functions
 * Example: make counter
 *
 * Closure
 *
 * setTimeout, setInterval
 *
 */


let timerId = setTimeout(function() {
    console.log(1);
}, 2000);

clearTimeout(timerId);

// 1. Write a function that outputs the next
// Fibonacci number every second


let a = 1, b = 1;
setInterval(function() {
    console.log(a);
    [a, b] = [b, a + b];
}, 1000);





// local and outer variables
let userName = 'John';

function showMessage() {
    userName = "Bob"; // (1) changed the outer variable

    let message = 'Hello, ' + userName;
    alert(message);
}


















// We can use function as a constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// We are creating a new person named "Andrey" aged 25.
let me = new Person('Andrey', 25);

console.log(me);


























/**
 * This keyword.
 *
 * 1. If the `new` keyword is used when calling the function, this inside the function is a brand new object.
 *
 * 2. If apply, call, or bind are used to call a function, this inside the function is the object
 * that is passed in as the argument.
 *
 * 3. If a function is called as a method — that is, if dot notation is used to invoke the function —
 * this is the object that the function is a property of.
 *
 * 4. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions
 * present above, this is the global object. In a browser, it’s window.
 *
 */


// function.call(thisArg, arg1, ... , argN)















