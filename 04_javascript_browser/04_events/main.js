/**
 * https://javascript.info/introduction-browser-events
 *
 *
 * Mouse events:
 * - click
 * - contextmenu
 * - mouseover / mouseout
 * - mousedown / mouseup
 * - mousemove
 *
 * Keyboard events:
 * - keydown and keyup
 *
 * Document events:
 * - DOMContentLoaded - when the HTML is loaded and processed, DOM is fully built
 *
 *
 *
 * There are 3 ways to assign event handlers:
 *
 * HTML attribute: onclick="...".
 * DOM property: elem.onclick = function.
 * Methods: elem.addEventListener(event, handler[, phase]) to add, removeEventListener to remove.
 *
 *
 *
 * Practice: build a simple calculator which can add and subtract 2 numbers
 */



let addButton = document.getElementById('add');
addButton.addEventListener('click', function (event) {
    console.log('Button clicked!');
    console.log(event);
});


