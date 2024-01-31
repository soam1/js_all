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

/*
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
*/

// OBJECTS IN JS
// objects = a collection of related properties and/or methods can represent real world projects (people, product, places)
// method is a function that belongs to an object
// object = {key:value, function()}

/*

const person1 = {
    firstName: "Spongebob",
    lastName: "squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function () { console.log(`Hi I am Spongebob!`); },
    sayBye: function () { console.log(`With this squarepants wishes you goodbye`); }
};
const person2 = {
    firstName: "Akash",
    lastName: "Soam",
    age: 32,
    isEmployed: false,
    sayHello: () => { console.log(`Hey I am Akash!`); },
    sayBye: function () { console.log(` wishing you goodbye`); }
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

*/
// this  =reference to the object where THIS is used (the object depends on the immediate context) person.name = this.name

// const person1 = {
//     name: "Spongebob",
//     favFood: "hamburgers",
//     sayHello: function () { console.log(`Hi! I am ${name}`); },
//     sayHello: function () { console.log(`Hi! I am ${this.name}`); },
//     tellFav: function () { console.log(`Hi! I eat only ${this.favFood}`); },
// }
// person1.sayHello();
// person1.tellFav();

// constructors in js

// constructor = special method for defining the properties and methods of objects
// function Car(make, model, year, color) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
// }

// const car1 = new Car("Ford", "Mustang", 2024, "red");
// console.log(car1.make, car1.color, car1.year, car1.model);

// classes in js
// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex. static keyword, encapsulation, inheritance
// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//     displayProduct = function () {
//         console.log(`Product: ${this.name}`);
//         console.log(`price: ${this.price.toFixed(2)}`);
//     }
//     calculateTotal = function (salesTax) {
//         return this.price + (this.price * salesTax);
//     }

// }

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//     this.displayProduct = function () {
//         console.log(`Product: ${this.name}`);
//         console.log(`price: ${this.price.toFixed(2)}`);
//     };
//     this.calculateTotal = function (salesTax) {
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;
// const product1 = new Product("Shirt", 15.99);
// const product2 = new Product("Pants", 19.99);
// const product3 = new Product("underwear", 109.99);

// product1.displayProduct();

// const totalPrices = product1.calculateTotal(salesTax);
// console.log(`Total price with tax: ${totalPrices}`);


// static keyword in js
// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)

// inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child)
// helps with code reusability
// done using extends keyword like in java

// super keyword
// super = keyword is used in classes to call the constructor or access the properties and methods of a parent  (super class)
// this  = this object
// super = the parent

// getters and setters in js
// getter = special method that makes a property readable
// setter = special method that makes a property writable
// validate and modify a value when reading or writing a property


// destructuring = extract values from arrays and objects, then assign to variables in a convenient way
// [] to perform array destructuring
// {} to perfrom object destructuring
// 5 examples :-


/*
// ex1 :- swap the values of two varaibles
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

// ex1 :- swap 2 elements in an array
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

// ex3 = assign array elements to variables
const [firstColor, secondcolor, thirColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondcolor);
console.log(thirColor);
console.log(extraColors);

// ex4  = extract values from objects
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry cook"
};
const person2 = {
    firstName: "Tony",
    lastName: "Stark",
    age: 39,
};

const { firstName, lastName, age, job } = person1;
console.log(firstName, lastName, age, job);

// ex5:- destructure in function parameters
function displayPerson({ firstName, lastName, age, job = "unemployed" }) {
    console.log(firstName, lastName, age, job);
}
displayPerson(person2);

*/
// nested objects = objects inside of other objects.
// allows you to represent more complex data structures
// child object is enclosed by a parent object
// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


// you can also create array of objects
// const arr = [{}, {}, {}, {}];


// sort() = method used to sort elements of an array in place.
// Sorts elements in string in lexicographic order , not alpbhabetical
// lexicographic = (alphabet+numbers+symbols) as strings

/*
let numbers = [7, 6, 5, 2, 3, 4, 9, 10, 1, 8];
numbers.sort();//see [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);
//see [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.sort((a, b) => b - a);//sorting in reverse order
console.log(numbers);

*/

// shuffling an array in js
// shuffling an array using fisher-yates algo

// closure in js
// closure = a function defined inside of another function, the inner function has access to the variables and scope of the outer function .
// allow for private variables and state maintenance
// used frequently in js frameworks: React, Vue, Angular


/*
function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }
    inner();
}

outer();


function increment() {
    let count = 0;
    count++;
    console.log(`count increased to ${count}`);
}

increment();
increment();
increment();
increment();
increment();
increment();

function createCounter() {
    let count = 0;
    function increment() {
        count++;
        console.log(`count increased to ${count}`);
    }
    increment();
    increment();
    increment();
    increment();
}

createCounter();

function createCounter1() {
    let count = 0;
    function increment() {
        count++;
        console.log(`count increased to ${count}`);
    }
    function getCount() {
        return count;
    }
    // return { increment, increment };
    return { increment, getCount };
}
const counter = createCounter1();//this will return an object that has an increment function
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
const currCount = counter.getCount();
console.log(currCount);

*/

// setTimeOut() = function in js that allows you to schedule the execution of a function after an amount of time(milliseconds)
// Times are appropriate (varies based on the workload of the javascript runtime environment)
// setTimeout(callback, delay);



// ES6 MODULE IN JS
// = an external file that contains reusable code that can be imported into other javascript files.
// write reusable code for many different apps.
// can contain variables, classes, functions, ...and more introduced as part of ECMAScript 2015 update
// use of import and export keyword


// synchronous and asynchronous programming in js

// synchronous = executes line by line consecutively in a sequential manner. Code that waits for an operation to complete

// asynchronous = allows multiple operations to be performed concurrently without waiting. Doesn't block the execution flow and allows the program to continue (I/O operations, network requests, fetching data)
// handled with callbacks, promises, Async/Await

// setTimeout(callback, timeout) is also an asynchronous methods

// setTimeout(() => {
//     console.log("this is task 1");
// }, 3000);

// console.log('THis is task 2');
// console.log('THis is task 3');
// console.log('THis is task 4');

//here you can see that program doesn't have to wait for task 1. inorder to complete task 2, 3, 4;(then at last task1 is completed after 3s)

// but if you want task 2, 3, 4 to be executed after completion of task1 , then, you can use callback

// function fun1(callback) {
//     setTimeout(() => {
//         console.log("this is task 1");
//         callback();
//     }, 3000);
// }
// function func2() {
//     console.log('THis is task 2');
//     console.log('THis is task 3');
//     console.log('THis is task 4');
// }

// fun1(func2);


// Error = an object that is created to represent a problem that occurs
// Occur often with user input or establishing a connection
// NETWORK ERRORS
// PROMISE REJECTION
// SECURITY ERRORS

// try{}
// catch{}
// finally{} blocks

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
// ex. close files, close connections, release resources

//
// DOM  = DOCUMENT OBJECT MODEL
// object{} that represents the page you see in the web browser and provides you with an API to interact with it. Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree like representation . Javascript can access the DOM  to dynamically change the content, structure, and style of a web page.


// console.log(document);
// console.dir(document);
// document.title = "My website pro";
// console.dir(document);
// document.body.style.backgroundColor = "hsl(0,0%,15%)";

/*
// const username = "Akash Soam";
const username = "";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent = username !== "" ? `Welcome ${username}` : `Welcome Guest`;
*/

// element selectors in js
// element selector = methods used to target and manipulate html elements. They allow you to select one or multiple html elements form DOM (Document Object model);

// 1. document.getElementById() //ELEMENT OR NULL
// 2.document.getElementsByClassName() //HTML COLLECTION
// 3. document.getElementsByTagName() //HTML COLLECTION
// 4. docuement.querySelector() // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll() // NODELIST
// html collection is similar to an array but its limited to its builtin methods it has

// node list are similar to html collections but it has methods similar to arrays. However node lists are static and html collections are live.
// since nodelist are static they do not get updated automatically in the dom , html collections do.

/*

document.getElementById('welcome-msg').textContent = "Yo dawg";

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);// this is an html collection


fruits[0].style.backgroundColor = "yellow";
fruits[1].style.backgroundColor = "orange";
for (let fruit of fruits) {
    fruit.style.backgroundColor = "pink";
}

// fruits.forEach()
// HTML COLLECTION do not have builtin forEach

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "magenta"
});

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
console.log(h4Elements);
h4Elements[0].style.backgroundColor = "gold"
h4Elements[1].style.backgroundColor = "silver"

for (let liElement of liElements) {
    liElement.style.backgroundColor = "yellowgreen";
}

Array.from(liElements).forEach((liElement) => {
    liElement.style.backgroundColor = "cyan";
});


const element = document.querySelector(".fruits");
element.style.backgroundColor = "purple";


const fruitss = document.querySelectorAll(".fruits");
//nodelist has builtin forEach() method
fruitss.forEach(fr => {
    fr.style.backgroundColor = "grey";
});


*/

// DOM NAVIGATION = The process of navigating throught the structure of an HTML document using JS.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

/*
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "pink";

const ele = document.querySelectorAll("ul");
ele.forEach(e => {
    const firstChild = e.firstElementChild;
    const lastChild = e.lastElementChild;
    firstChild.style.backgroundColor = "silver";
    lastChild.style.backgroundColor = "gold";
});

const e = document.getElementById("orange");
const nextSibling = e.nextElementSibling;
const previousSibling = e.previousElementSibling;
nextSibling.style.backgroundColor = "cyan";
previousSibling.style.backgroundColor = "cyan";


*/

// add and change html using js
// STEP 1 CREATE THE ELEMENT
// STEP 2 ADD ATTRIBUTES/ PROPERTIES
// STEP 3 APPEND ELEMENT TO DOM
// STEP 4 REMOVE HTML ELEMENT


// -------------------example1 <h1> -----------------


/*
// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/ PROPERTIES
newH1.textContent = "I like peanut butter";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById('box1').append(newH1);
document.getElementById('box1').prepend(newH1);

// STEP 4 REMOVE HTML ELEMENT
// anytime you want to remove an element, select parent of that element and then call .removeChild(thatElement)
document.getElementById("box1").removeChild(newH1);

*/

// MOUSE EVENTS
// eventListener = listen for specific events to create interactive web pages
// events: click, mouseover, mouseout
// .addEventListener(event, callback);

/*
const myBox = document.getElementById("myBox");
function changeColor(event) {
    // console.log(event);
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 😬";
}
// event is an object that is provided to us behind the scenes by a web browser, we dont't need to pass event explicitly;
// myBox.addEventListener("click", changeColor);
myBox.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 🥲";
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "please don't 😬";
});
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "click Me😁";
});

*/

// key events
// events: keydown, keyup, keypress(isn't compatile)
const myBox = document.getElementById("myBox");
// document.addEventListener("keydown", event => {
//     // console.log(event);
//     myBox.style.backgroundColor = "Pink";
//     myBox.textContent = "😲"
// });
// document.addEventListener("keyup", event => {
//     // console.log(event);
//     myBox.style.backgroundColor = "lightgreen";
//     myBox.textContent = "😎"

// });

const moveAmount = 20;
let x = 0, y = 0;
document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                y = y - moveAmount;
                break;
            case "ArrowLeft":
                x = x - moveAmount;
                break;
            case "ArrowRight":
                x = x + moveAmount;
                break;
            case "ArrowDown":
                y = y + moveAmount;
                break;

            default:
                break;
        }
        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`

    }


});