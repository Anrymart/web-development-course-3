/**
 * According to the Document Object Model (DOM), every HTML tag is an object.
 * Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.
 */


// <html> = document.documentElement

// <body> = document.body

// <head> = document.head


let element = document.body;

// Accessing children

console.log(element.firstChild);
console.log(element.lastChild);

console.log(element.children);


// Siblings and parents

console.log(element.parentNode);
console.log(element.nextSibling); // nextSibling returns the next sibling node as an element node, a text node or a comment node


console.log(element.nextElementSibling); // nextElementSibling returns the next sibling node as an element node


console.log(element.previousSibling);


/**
 * Searching
 */

// Searching by id
let element = document.getElementById("quote");

element.style.background = "yellow";

// It's also possible to access quote element using window.quote (not recommended, can be overwritten)

// Searching by css selector
let elements = document.querySelectorAll('.quote-container');
let elements = document.querySelectorAll('p a');
let elements = document.querySelectorAll('ul > li:last-child');

let element = document.querySelector('p');


// Searching by tag name
let elements = document.getElementsByTagName('button');


/**
 * Other
 */


document.title = "New title!";



















