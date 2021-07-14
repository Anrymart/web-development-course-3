/*
 * Variables: let (var), const. Naming convention.
 *
 * Data types: number, string, boolean, null, undefined, object, bigint, symbol
 * https://javascript.info/types
 * Number: -INFINITY, +INFINITY, NaN
 *
 *
 * Typeof operator. Typeof null, typeof function.
 * Browser console.
 *
 * Operators: +, -, =, %, **, ++, --, +=. Bitwise operators. QUESTION.
 *
 * > 0.1 + 0.2 = ?
 *
 * Alert, prompt, confirm.
 * Task: implement a script which asks for a name and outputs it.
 *
 * Comparisons. Strict equality ===.
 *
 * Conditional operators: if, else, else if, ?.
 * Task: implement sign function.
 * Task: rewrite if into ?.
 *
 * Loops - while and for. Breaking and continuing the loop.
 * Task: output even numbers in a loop.
 * Task: calculate prime numbers below 1000 and print them.
 *
 * Functions. Function declaration. Local and outer variables, parameters. Functions as arguments.
 * Returning a value.
 * Assigning function to a variable.
 * Arrow functions.
 *
 */

let a = 123;
const b = 3.14;
var c = "Andrey";

let isBoss = true;


// Data types
let boolVar = true; // boolean
let numberVar = 1; // number
let undefinedVar; // undefined
let nullVar = null; // null
let stringVar = "text"; // string
let objectVar = { // object
    a: 1
};
let bigIntVar = 123n; // bigint

// number, string, boolean, null, undefined, object, bigint, symbol


// sum(x)(y) = x + y

function sum(x) {
    return function (y) {
        return x + y;
    }
}

let makeCounter = (initialValue) => {
    return () => initialValue++;
}
// count() -> 0
// count() -> 1
// count() -> 2

