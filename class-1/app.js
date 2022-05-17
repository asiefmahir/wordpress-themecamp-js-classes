// // variable

// let myName = 'Mahir Asief';

// myName = 'Sr Setu'
// console.log(myName)

// const browserLanguage = 'Javascript';

// // var lastName = 'Rahman';

// // console.log(window.lastName)
// // console.log(window.myName)


// console.log(browserLanguage);

// // Primitive Data Type 

// /**
//  * String
//  * Number
//  * BigInt
//  * Boolean
//  * Symbol
//  */

// // Reference Type Data Type

// /**
//  * Array
//  * Object
//  * Function
// */

// let name = 'Mahir Asief'; // 00001 name -> 0001
// // 0001 -> value = 'srSetu

// let name2 = name; // name2 -> 00001

// name2 = "srSetu" // 00002 -> srSetu 

// console.log(name, 'name');

// console.log(name2, 'name2');

// const person = {
//     age: 25,
//     homeTown: 'Dhaka'
// }

// // person -> 00003

// let person2 = person;

// person2.age = 28; // 

// console.log(person2, 'person2');
// console.log(person, 'person');


const arr = [];  // 0004 -> DJJA -> []

arr.push(1); // [1]
arr.push(10); // [1, 10]

arr.push(100); // [1, 10, 100]
arr.push(1000);
arr.push(10000);
arr.push(100000);


const arr2 = arr;

arr2.push(500)
console.log(arr, 'arr');
console.log(arr2, 'arr2');


// const myFunction = function named () {
//     console.log("I am my Func")
// }

// // myFunction = 0006 -> 

// let myFunction2 = myFunction;


// myFunction2 = function () {
//     console.log("I am my Func2")
// }
// console.log(myFunction2)
// console.log(myFunction, 'myFunction')


// myFunction()

// myFunction2()

// function a () {
//     const b = function () {
//         console.log('b')
//     }
//     return b;
// }

// const returnedValue =  a();

// returnedValue()

// function add (a) {
//     return a + multiply(10) // 50 + 200 = 250
// }

// function multiply (b) { // 10

//     function cn () {
//         console.log('I am cn func')
//     }

//     cn()

//     let c = 20
//     return b * c;// 10 * 20 = 200
// }

// const value = add(50);

// console.log(value);

// Call Stack -> LIFO

// add ()


function something () {
    let a = 10;
    let arr3 = [1, 2]

    return function (b) {
        return b * a * arr3[1];
    }
}


const result = something(); 

console.dir(result);
console.log(result);
// console.log(a)

//  result = function (b) {
//         return b * a; 100 * 
//     }

const finalResult = result(100); // 100 * 10

console.log(finalResult) // 1000

// call stack 

/**
 * something()
 */