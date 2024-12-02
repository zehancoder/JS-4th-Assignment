
// (1) Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.
function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log(celsiusToFahrenheit(0));// ans 32;
console.log(celsiusToFahrenheit(25)); // ans 77;


// (2) Write a function to check if a number is even. The function should take a single argument, which is the number to check.
function isEven(even){
    let evenNums = even % 2 === 0 ? console.log("true") : console.log("false");
    return evenNums; 
}
isEven(4); // ans true;
isEven(7);// ans false


// (3) Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
function sum(a, b){
    return a + b;
}
console.log(sum(3, 4));// ans 7
console.log(sum(10, 20)); // ans 30;


// (4) Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.
function findSmallestNum(arr){
    let reduceIt = arr.reduce(function (previous, current){
        return Math.min(previous, current);
    })
    return reduceIt;
}
console.log(findSmallestNum([3, 5, 1, 9]));// ans: 1
console.log(findSmallestNum([-1, -5, 0, 10]));// ans : -5


// (5) Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
function countVowels(str){
    let vowCount = 0;
    let vowels = 'aeiouAEIOU'
    for(let val of str){
        for(let vow of vowels){
            if(val === vow){
                vowCount++;
            }
        }
    }
    return vowCount;
}
console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3


// (6) Write a function to get the first element of an array. The function should take a single argument, which is the array.
function getFirstElement(arr){
    return arr[0];
}
console.log(getFirstElement([1, 2, 3])); // ans: 1
console.log(getFirstElement(["a", "b", "c"])); // ans: "a";


// (7) Write a function to check if an array is empty. The function should take a single argument, which is the array.
function isArrayEmpty(arr){
    if(arr.length === 0){
        return true;
    }else{
        return false
    }
}
console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false


// (8) Write a function to return the factorial of a number. The function should take a single argument, which is the number
function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    let arr = [];
    for(let i=1; i<=num; i++){
        arr[i-1] = i; 
    }
    let fac = arr.reduce((res, curr)=> {
        return res * curr;
    });
    return fac;
}
console.log(factorialize(5)); // ans 120
console.log(factorialize(7)); // ans 5040
  

// (9) Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
function reverseString(str){
    let reverse = str.split('').reverse().join('');
    return reverse;
}
console.log(reverseString("hello"))// ans: olleh;


// (10) Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
function toLowerCase(str){
    let lowercase = str.toLowerCase();
    return lowercase
}
console.log(toLowerCase("HELLO WORLD")); // ans: "hello world"
console.log(toLowerCase("JavaScript")); // ans: "javascript"


// (11) Write a function to find the length of a string. The function should take a single argument, which is the string.
function stringLength(str) {
    let strLength = str.length;
    return strLength;
}
console.log(stringLength("hello")); // ans: 5
console.log(stringLength("world")); // ans: 5


// (12) Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
function mergeArrays(arr1, arr2) {
    let marge = arr1.concat(arr2)
    return marge;
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // ans: [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ans: ["a", "b", "c", "d"];


// (13) Write a function to get the last element of an array. The function should take a single argument, which is the array.
function getLastElement(arr) {
    let lastIndex = arr[arr.length-1];
    return lastIndex;
}
console.log(getLastElement([1, 2, 3])); // ans: 3
console.log(getLastElement(["a", "b", "c"])); // ans: "c"


// (14) Write a function to get the first character of a string. The function should take a single argument, which is the string.
function getFirstCharacter(str) {
    let fistChar = str.charAt(0);
    return fistChar;
}
console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"
  

// (15) Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
function sumArray(arr) {
    let allNumSum = 0;
    let calculate = arr.reduce(function (previous, current){
        allNumSum = previous + current;
        return allNumSum;
    })
    return calculate;
}
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  
