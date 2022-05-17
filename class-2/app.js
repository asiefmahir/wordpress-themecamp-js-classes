// // const myFunction = function named () {
// //     console.log("I am my Func")
// // }

// // // myFunction = 0006 -> DDF70 -> named

// // let myFunction2 = myFunction;

// // // myFunction = 0006 -> DDF70 -> named


// // myFunction2 = function () {
// //     console.log("I am my Func2")
// // }

// // // myFunction2 = 0007 -> DDG80
// // //  0007 -> DDG80 -> function
// // console.log(myFunction2, 'myFunction2')
// // console.log(myFunction, 'myFunction')


// // myFunction()

// // myFunction2()


// // const summationArray = function (arr) {
// //     let newArray = [];

// //     for (let i = 0; i < arr.length; i++) {
// //         newArray.push(arr[i] + 10)
// //     }

// //     return newArray
// // }

// // const result1 = summationArray(numberArray);

// // // console.log(result1)

// // const multiplication = function (arr) {
// //     let newArray = [];

// //     for (let i = 0; i < arr.length; i++) {
// //         newArray.push(arr[i] * 10 )
// //     }

// //     return newArray
// // };
// const numberArray = [1, 2, 3, 4, 5, 6]

// const genericFunction = function (arr, callback) { // callback == sum
//     let newArray = [];
//     // [11, 21, 31, ]

//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(callback(arr[i])) // callback(1) = 11
//     }

//     return newArray
// }

// // function demo () {}

// // const result2 = multiplication(numberArray);
// // console.log(result2);

// function mul (element) { // element === 1
//     return element * 10 // 1* 10 = 10
// }
// const mulResult = genericFunction(numberArray, mul); //

// function sum (element) {
//     return element + 10
// }

// const summationResult = genericFunction(numberArray, sum )

// console.log(mulResult);
// console.log(summationResult);

// const substractResult = genericFunction(numberArray, function (element) {
//     return Math.floor(element / 2)
// })

// console.log(substractResult);

console.log('I am outside timeout but upper')

setTimeout(function () {
    console.log('I am from timeout Function')
}, 0);

console.log('I am outside timeout but lower');


console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')
console.log('I am outside timeout but lower')





