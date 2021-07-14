let arr = new Array();
let arr = [];


let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[0]); // Apple
alert(fruits[1]); // Orange
alert(fruits[2]); // Plum

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

// Or add new one to the array:
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]


// An array can store elements of any type:
let arr = ['Apple', {name: 'John'}, true, function () {
    alert('hello');
}];


// pop and push
let fruits = ["Apple", "Orange", "Pear"];

fruits.pop(); // removes the last element and returns it

fruits.push('Mango');


// iterating over array - 3 ways
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (const element of arr) {
    console.log(element);
}

['dog', 'cat', 'hen'].forEach(function (value, index, array) {
    console.log(value);
});


// Exercise: write a function which finds an average of an array

// findAverage(1, 2, 3) -> 2

function findAverage(...args) {
    let sum = 0;
    for (const i of args) {
        sum += i;
    }
    return sum / args.length;

    // returns average of this array
}


let fruits = ["Apple", "Orange", "Pear"];

let [fruit0, fruit1, ...rest] = fruits;

