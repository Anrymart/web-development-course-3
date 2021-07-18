if (!+prompt('Do you have a project? 1 if yes, 0 if no')) {
    alert('Go on with the task!');
} else if (+prompt('Do you want to practice more (and earn extra points)? 1 if yes, 0 if no')) {
    alert('Great, go on with the task, but don\'t forget about the project =)')
} else {
    alert('Go on with your project!');
}

const task = `
    Build a frontend React app for e-commerce website.
    User should be able to view products and product details,
    add products to a shopping cart and remove them, view shopping cart.
    You can use localStorage to store the contents of a shopping cart.
    You should also use the following API to get products and product details from the server:
    https://fakestoreapi.com/docs`;

