/**
 *
 * Promises:
 * https://javascript.info/promise-basics
 */


// function sendHttpRequestMock(callback) {
//     // send HTTP request
//     setTimeout(function() {
//         callback("Result");
//     }, 100);
// }
//
// sendHttpRequestMock(function(result) {
//    console.log(result);
// });


function sendHttpRequestMock() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Result");
        })
    })
}

sendHttpRequestMock()
    .then(result => console.log(result));



fetch('http://quotes.stormconsultancy.co.uk/random.json')
    .then(response => response.json())
    .then(response => console.log(response));


/**
 * Practice: finish quotes application
 */
