// Primitive Datatypes

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// JS is Dynamically typed

const score = 100 //
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId); // false

const bigNumber = 65659421135545654789652145n
//=============================================
// console.log(typeof score); // number
// console.log(typeof scoreValue); // number 
// console.log(typeof isLoggedIn); // boolean
// console.log(typeof outsideTemp); // Object
// console.log(typeof id); // symbol
// console.log(typeof anotherId); // symbol
// console.log(typeof bigNumber); // bigint



// Reference (Non-Primitive)

// Array, Objects, Functions

const warrior = ["Veer", "Chhatrapati", "Shivaji", "Maharaj"];

let myObj = {
    name : "Vikas",
    age : 21
}

const myFunction = function(){
    console.log("Hello World");
    
}
//================================
// console.log(typeof warrior); // Object
// console.log(typeof myObj); // Object 
// console.log(typeof myFunction); // function

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory (Primitive)

let myGmaiName = "Vikaschavan0812"

let anotherName = myGmaiName

anotherName = "ChavanBhai"

// console.log(myGmaiName);
// console.log(anotherName);
//=========================================

// Heap Memory (Non-Primitive)

let userOne = {
    email : "vikas234@gmailcom",
    upi : "vikas@ybl" 
}

let userTwo = userOne

userTwo.email = "akash@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email); // Both Output is same = akash@gmail.com.