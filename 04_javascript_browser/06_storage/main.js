/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */

localStorage.setItem('myCat', 'Tom');

const cat = localStorage.getItem('myCat');

localStorage.removeItem('myCat');

localStorage.clear();
