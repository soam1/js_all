// console.log(`Hello! God`);
// // window.alert(`This is a popup alert windo`);

// document.getElementById('myH1').textContent = `Hello buddy`;
// document.getElementById('myP').textContent = `I like eating dry fruits so much`;

// let age = 20;
// console.log(age);
// let price = 114.99;
// let gpa = 8.57;
// let firstname = `Akash`
// let string = `c`
// console.log(gpa);
// console.log(`you are ${age} years old and your current cumulative gpa is ${gpa}`);
// console.log(`your phone's price is ${price}`)
// console.log(typeof age)
// console.log(typeof price)
// console.log(typeof firstname)
// console.log(typeof string)
// let online = true
// console.log(online)
// console.log(typeof online)

// ARITHMATIC OPERATORS IN JS(same as in py)
// *, /, +, -, **, %
// +=, -=, *=, /=, **=, %=,
// ++, --,
/* operator precedence(left to right)
    1. parenthesis
    2.exponents
    3.multiplication, division and modulo
    4.addition and subtraction
*/

//how to accept user input
// 1.easy way = window prompt
// 2.professional way = html textbox

// let username = window.prompt("What's your username?");
// console.log(username);


// professional way of taking user input
let username;
document.getElementById(`mySubmit`).onclick = function () {
    username = document.getElementById(`myText`).value;
    console.log(username);
    document.getElementById(`greeting`).textContent = `Welcome ${username}`;
}

