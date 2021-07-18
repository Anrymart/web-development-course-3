// selecting elements

// modifying elements

// adding handlers

// $(document).ready(), tip $()

// executing http requests - see quotes example

$(function () {
    $('#add').click(() => {
        let firstNum = +$('#firstInput').val();
        let secondNum = +$('#secondInput').val();

        $('#answer').text(firstNum + secondNum);
    })

    fetch('http://quotes.stormconsultancy.co.uk/random.json')
        .then(response => response.json())
        .then(response => console.log(response));


    $.ajax({
        url: 'http://quotes.stormconsultancy.co.uk/random.json'
    }).done(function (data) {
        // do something with data
    });
});

/**
 * Why jQuery was (and still is) so popular?
 *
 * jQuery's motto: Writing Javascript code should be fun.
 *
 * 1. Provides a simple and convenient API to work with DOM
 * 2. Abstracts away differences between browsers
 *
 *
 * One of the most difficult browsers was IE.
 *
 * Example:
 */

const element = document.getElementById("header");

// IE:
const classAttributeIE = element.getAttribute("className");
// Firefox
const classAttributeFirefox = element.getAttribute("class");


/**
 * In JavaScript, function is an object, hence we can set out own properties on the function object.
 */
function _(callback) {
    // do something
    callback();
}

_.sayHi = function () {
    return "Hi there!";
}

