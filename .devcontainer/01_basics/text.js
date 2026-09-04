"use strict" ;//treat all js code as newer version
// alert("hello")   we are using nodejs therefore no alert use
console.log("shubh") 
const accountId =  144553
let accountEmail = "11shubhagrawal@gmail.com"
var accountPassword = "12345"
let accountCity = "Jaipur"
/*
prefer not to use var cuz of issue of block scope and functional scope
*/
// accountId = 2        not allowed
console.log(accountId) ;
console.table([accountId , accountEmail , accountPassword , accountCity ]) ;

let name = "shubh"
let age = 19 
let isLoggedIn = false
// number => 2 to the power of 53
//bigint
//string can be used with ' and " both
//boolean => true or false
// null => standalone value
// undefined => variable value not assigned
// symbol => unique
//object 
console.log(typeof isLoggedIn) ;
console.log(typeof null) ;    //null is an object in js but it is a primitive data type

console.log(typeof undefined) ; // undefined is a primitive data type
let num = "33"
console.log(typeof num) ;
let valueInNumber = Number(num)
console.log(typeof valueInNumber) ;
console.log(valueInNumber) ;

//"33" => 33 
//"33abc" => NaN
//true => 1 ; false => 0 
//"" => false ; " " => true ; "xyz" => true

//  ***************operations********************
let value = 3
let negValue = -value   

console.log(3**2) ; //3**2 = 9

console.log(2 + 3 +"3")  // 53
console.log(2 + "3")    // 23

// == & === do type ke hote h iidhar


// stack(primitive - copy) , heap memory (non primitive - reference)

console.log("shubh")
const names = "shubh"
const repoCount = 50
console.log(`hello my name is ${names} annd my repo count is ${repoCount}`); 

console.log(names.__proto__);          
const balance = new Number(100)  //object

console.log(balance.toString.length)  // 3
console.log(balance.toFixed(2))  // 100.00

//  ***************dates(object)********************

let myDate = new Date()
console.log(myDate.toString()) ;

let myTime = Date.now()
console.log(myTime) ;   