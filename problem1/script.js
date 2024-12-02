// (1) Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo";


// (2) On one single line, declare three variables with the following names and values:
const firstName = "John";
const lastName = "Doe";
const age = 35;


// (3) Use the correct assignment operator that will 
var x = 10;
let y = 5;
x = x * y;// what will be the value of x ? 
console.log(x); // ans is 50;


// (4) Use comments to describe the correct data type of the following variables:
let length = 16; // ans: Number type;
let lastName2 = "Johnson"; // ans: string type; 
const x2 = {
  firstName: "John",  
  lastName: "Doe"
};    // ans: object type ? 


// (5) Execute the function named myFunction.
function myFunction() {
  alert("Hello World!");
}
myFunction()// ans: output is make a alert massege in browser
// call the function and see the output;


// (6) Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50");
let person = {
    name: "John",
    age: 50
}
alert(person.name + " is " + person.age);


// (7) The <button> element should do something when someone clicks on it. Try to fix it!
let button = document.querySelector("button");
button.addEventListener("click", () =>{
    alert("hello world!");
});


// (8) Array Related Question
// (1)
const cars = ["Volvo", "Jeep", "Mercedes"];
let alertArr = cars.length;
alert(alertArr);
// (8) Array Related Question
// (2)
const Brand = ["Volvo", "Jeep", "Mercedes"];
let removeItem = Brand.shift();
let addItem = Brand.unshift("Ford");
console.log(Brand);


// (9) Math Related Problems
// (1) Use the correct Math method to create a random number.
let generateNum = Math.random();
console.log(generateNum);// chose any number from 0 to 1;
// (2) Use the correct Math method to return the largest number of 10 and 20;
let largestNum = Math.max(10, 20);
console.log(largestNum);// ans: 20
// (3) Use the correct Math method to get the square root of 9.
let square = Math.sqrt(9);
console.log(square);// ans: 3


// (10) comparison operator related problems! 
// (1) Choose the correct comparison operator to alert true, when x is greater than y.;
let x3 = 10;
let y2 = 5;
if(x3 > y2){
  alert(true)
}else{
  alert(false)
}
// (2) Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age2 = 19;
age2 < 18? console.log("Too young") : console.log("Old enough");


