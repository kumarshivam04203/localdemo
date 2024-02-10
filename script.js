// A. Write a function that takes two numbers as arguments and returns their sum.

// function sum(num1, num2){
//     return num1 + num2;
// }
// // console.log(sum(2,5))
// let a =3;
// let b =4;
// console.log(sum(a,b))

// B.  Write a function that takes a string as an argument and returns its length.

// const string = (str) => {
//     return str.length;
// }
// let s = "djhfkjfhs";
// console.log(string(s));

// C. Write a program that takes two numbers and displays their sum, difference, product, and quotient. 


// let num1 =342;
// let num2 = 434;

// let sum = num1 + num2;
// let sub = num1 - num2;
// let mul = num1 * num2;
// let dev = num1 / num2;

// const number = (`First number : ${num1} \nSecond Number : ${num2} \nSum: ${sum} \nSub: ${sub} \nMul: ${mul} \nDev: ${dev}`);
// console.log(number);


// D. Write a function that takes two numbers as arguments and returns the larger number.

// function largerNumber(num1 , num2){
//     return num1 > num2 ? console.log(`Grater number ${num1}`) : console.log(`Grater nuber ${num2}`);
// }
// let a =4444;
// let b=24253;
// largerNumber(a,b)

// E. Write a program that displays a string in reverse order.

// function string(str){
//     return str.split("").reverse().join("")
// }
// console.log(string("jhfedg"))

// F. Write a program that takes a number and checks whether it is positive, negative, or zero

// function checkNumber (num){
//     return num > 0 ? console.log("positive") : num < 0 ? console.log("negative") : console.log("zero")
// }
// console.log(checkNumber(0))

// G. Write a program that takes a number and prints the multiplication table for that number.

// function multipleTable(number){
//     for(let i=0; i <= 10; i++){ 
//         console.log(`${number} * ${i} = ${number * i}`)
//     }  
// }
// multipleTable(4);

// H. Write a program that takes a number and calculates the sum of all numbers from 1 to that number. 

// function sum(num){
//     let add = 0;
//     for(let i=0; i<=num; i++){
//         add += i;
//     }
//     return add;
// }
// console.log(sum(4))

// I. Write a program that takes a string and prints out the number of vowels in the string.

// function countVowel(str){
//     let count =0;
//     for(let s of str){
//         if(s==='a' || s==='u' ||s==='e'||s==='i'||s==='o'){
//             count++
//         }
//     }
//     return count;
// }
// console.log(countVowel("fmdouhsa"));


// J. Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.

// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.

// function commonElement(arr1, arr2){
//     let commonElements = []
//     for(let i =0; i< arr1.length; i++){
//         if(arr2.includes(arr1[i])){
//             if(!commonElements.includes(arr2[i])){
//                 commonElements.push(arr1[i])
//             }
//         }
//     }
//     return commonElements;
// }
// let arr1 = [1,2,3,4,5];
// let arr2 = [3,5,6,2,6];
// console.log(commonElement(arr1, arr2))


// K. Write a function called 'greet' that takes a name parameter and logs a greeting message to the console. 

// function gretingMess(name){
//     console.log(`Hello : ${name}`)
// }
// gretingMess("Shhjk")

// L. Write a function called 'getSquare' that takes a number parameter and returns its square.

// const getSquare = (number) => number* number;

// console.log(getSquare(3))

/***************************************************************/ 
// M. Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

// function countLetters(str){
//     let count = {};
//     for(let s of str){
//         if(count[s]){
//             count[s]++
//         }else{
//             count[s] = 1
//         }
//     }
//     return count
// }

// console.log(countLetters("hr isnwchhk cccdkjkeb"));


// N.  Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

// function createCounter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count
//     }
// }

// const counter = createCounter();

// console.log(counter());//1
// console.log(counter());//2
// console.log(counter());//3
// console.log(counter());//4


// O. Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

// function sumEvenNumbers(num){
//     let sum =0;
//     for(let n of num){
//         // if(n % 2 === 0){
//         //     sum += n;
//         // }
//         sum += !(n & 1) ? n : 0
//     }
//     return sum;
// }

// const array = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// console.log(sumEvenNumbers(array));


// P. Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

// function sumArray(num){
//     let sum =0;
//     for(let n of num){
//         sum += n;
//     }
//     return sum;
// }
// const array = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// console.log(sumArray(array))


// Q.  Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

// function arrayString(str){
//     let largeString = [];
//     for(let s of str){
//         if(s.length > 5){
//             largeString.push(s)
//         }
//     }
//     return largeString;
// }
// const strings = ["Shivam", "Khushi", "Queen", "King", "Prishi", "fgdhfjgk"];

// console.log(strings);
// console.log(arrayString(strings));


//  R. Write a function that takes an object and returns an array of all the keys in the object.

// function keyOfObject(obj){
//     let keys = Object.keys(obj);
//     return keys;
// }

// let obj = {
//     id: 1,
//     name: "shivam",
//     age: 22,
//     city: "noida",
//     gender: "mail"
// }

// console.log(keyOfObject(obj))


// S. Write a function that takes an array of objects and returns an array of all the values of a specified property name.

// Write a function that takes an array of objects and returns an array of all the values of a specified property name.


function valueOfObject(arrOfObj, propertyName) {
    const values = arrOfObj.map(obj => obj[propertyName]);
    return values;
}

const obj = [
    {
        Name: "gvhb",
        Age: 22,
        City: "Goa",
        Gender: "Male"
    },
    {
        Name: "nm",
        Age: 17,
        City: "Goa",
        Gender: "Female"
    },
    {
        Name: "hgj",
        Age: 20,
        City: "Delhi",
        Gender: "Transgender"
    },
    {
        Name: "nbm",
        Age: 24,
        City: "Mumbai",
        Gender: "Male"
    },
]

console.log(`Name : ${valueOfObject(obj, "Name")}`);
console.log(`Age : ${valueOfObject(obj, "Age")}`);
console.log(`City : ${valueOfObject(obj, "City")}`);
console.log(`Gender : ${valueOfObject(obj, "Gender")}`);



// T. Write a function that takes an array of objects and returns the object with the highest value for a specified property name.



