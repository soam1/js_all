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
// let username;
// document.getElementById(`mySubmit`).onclick = function () {
//     username = document.getElementById(`myText`).value;
//     console.log(username);
//     document.getElementById(`greeting`).textContent = `Welcome ${username}`;
// }


// .checked property in js = .checked is the property that determines the checked state of an
// HTML checkbox or radiobutton element

// string methods in js
// hint : string methods in js are almost similar to that in java
// let username = "Bro Code"
// console.log(username.charAt(0))
// console.log(username.length);
// let result = username.includes(" ")
// console.log(result);
// let phoneNo = "123-456-789"
// phoneNo = phoneNo.replaceAll("-", "");
// console.log(phoneNo);
// console.log(phoneNo.padEnd(20, "0"));
// phoneNo = phoneNo.padStart(20, "0");
// console.log(phoneNo);


// string slicing  = creating a substring from a portion of a string
// String.slice(start, end) => string from index start to end -1
// (ending index is exclusive)
// let fullName = "Bro Code";
// fullName = "Broseph Code";
// let firstName = fullName.slice(0, 2);
// console.log(firstName);
// let lastName = fullName.slice(-1);
// console.log(lastName);
// firstName = fullName.slice(0, fullName.indexOf(``));
// lastName = fullName.slice(fullName.indexOf(``))
// console.log(firstName, lastName);


// equality and not equality in js

// = assignment operator
// == comparison operator (if values are equal)
// === strict comparison operator (if values and datatype both are equal)
// != inequality operator
// !== strict inequality operator

// arrays in js

// spread operator in js
/*
... allows an iterable such as an array or string to be expanded into separate elements(unpacks the elements)
*/
// let numArray = [1, 2, 3, 4, 5]
// let maxi = Math.max(...numArray);
// console.log(maxi);

// let username = "Akash Soam"
// let letters = [...username].join("-")
// console.log(letters);

// let fruits = ["Apple", "Orange", "Banana"]
// let newFruits = [...fruits]
// console.log(newFruits);
// let vegetables = ["Potato", "Carrot", "Capsicum"]
// let foods = [...fruits, ...vegetables]
// console.log(foods);

// rest parameters
/*
(...rest) allow a function to work with a variable number of arguments by bundling them into an array
spread = expands an array into separate elements
rest = bundles separate elements into an array

*/

/*
function openFridge(...foods) {
    console.log(foods);
}
let food1 = "dahi";
let food2 = "milk chocolate";
let food3 = "badam ragda";
let food4 = "potatoes";
let food5 = "green moong";


openFridge(food1, food2, food3, food4, food5);
*/

// CALLBACK IN JS
/*
callback = a function that is passed as an argument to another fucntion
used to handle asynchronous operations:
1.reading a file
2.network requests
3.interacting with databases

"Hey when you're done call this next"
*/

/*
hello(leave);
function hello(callback) {
    console.log(`Hello`);
    callback();
}
function leave() {
    console.log("Please leave");
}
function goodbye() {
    console.log(`Goodbye`);
}

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}
function displayConsole(restul) {
    console.log(restul);
}
sum(displayConsole, 2, 3);

function displayWebpage(result) {
    document.getElementById(`myH1`).textContent = result
}

sum(displayWebpage, 3, 7);

 */

/*
 forEach() = method used to iterate over the elements of an array and apply a specific function (callback) to each element
 array.forEach(callback)
 * behind the scenes: elements, index, array are provided
 */

/*

let numbers = [1, 3, 4, 5, 6]
numbers.forEach(display);
numbers.forEach(doubleIt);
function display(element) {
   console.log(element);
}
function doubleIt(element) {
   element *= 2;
   console.log(element);
}

let fruits = ["apple", "orange", "banana", "coconut"];
function display(element) {
   console.log(element);
}
fruits.forEach(display);

function displayUpperCase(element) {
   element = element.toUpperCase();
   console.log(element);
}
fruits.forEach(displayUpperCase);

*/

// map() method in js
//.map() = accepts a callback and applies that function to each element of an array, then returns a new array(it is very similar to forEach except that map returns a new array)


/*
const numbers = [1, 3, 4, 5, 2];
function square(element) {
    return Math.pow(element, 2);
}
function cube(element) {
    return Math.pow(element, 3);
}

const arr = numbers.map(square);
console.log(arr);

const arrr = numbers.map(cube);
console.log(arrr);
*/

// .filter() = creates a new array by filtering out elements based on the condition of the callback
// Returns the elements of an array that meet the condition specified in a callback function.

/*
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(element) {
    return element % 2 === 0;
}
function isOdd(element) {
    return element % 2 !== 0;
}

let evenNums = nums.filter(isEven);
console.log(evenNums);
let oddNums = nums.filter(isOdd);
console.log(oddNums);

const ages = [16, 15, 19, 20, 18, 18, 14, 49];
function isAnAdult(element) {
    return (element >= 18);
}
const adultsInClass = ages.filter(isAnAdult);
console.log(adultsInClass);

*/
//.reduce() = reduces the elements of an array to a single value

/*
const prices = [343, 49, 13093, 1212, 599, 799];
// function sum(accumulator, element) {
//     accumulator += element;
//     return accumulator;
// }
function sum(previous, next) {
    previous += next;
    return previous;
}
const total = prices.reduce(sum);
console.log(total);
*/

// function declaration = define a reusable block of code that performs a specific task
/*
function hello() {
    console.log("hello ");
}
// function expression = a way to define functions as values of variables
const hlo = function () {
    console.log("hello");
}
hlo();
*/

// setTimeout(callback, time in ms);
// setTimeout(hello, 3000);
// setTimeout(function () {
//     console.log("Hello brother");
// }, 3000);


/*
const numbers = [1, 2, 3, 4, 5, 6];
function square(element) {
    return Math.pow(element, 2);
}
const squares = numbers.map(square);
console.log(squares);

const squares2 = numbers.map(function (element) { return Math.pow(element, 2); });
console.log(squares2);

const evenNums = numbers.filter(function (ele) {
    return ele % 2 === 0;
});
console.log(evenNums);

const prod = numbers.reduce(function (accumulator, thisEle) {
    return accumulator * thisEle;
});
console.log(prod);

// usecases of function exression
// 1.callbacks is asynchronous operations
// 2.higher-order functions
// 3.closures
// 4.even listeners
*/

// arrow functions = a concise way to write function expressions good for simple functions that you use only once

// (parameters)=> some code

// const hello = function () {
//     console.log("hello");
// }

// hello();

const hlo = () => { console.log("hello there"); }
const hi = () => console.log("hi");
hlo();
hi();
const yeahbuddy = personName => {
    console.log(`Yeahhh! ${personName}`);
}
const bro = (personName, age) => {
    console.log(`Yeahhh! ${personName} you are ${age} years old`);
}
yeahbuddy("Soam");
bro("Soam", 20);