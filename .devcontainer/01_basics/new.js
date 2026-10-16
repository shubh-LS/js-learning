// //var ka scope is global but const ka is local
// let val1 ;
// val1 = 5 ?? 10              //safety checker for null and undefined
// console.log(val1)
// let val2 = null ?? 10 
// console.log(val2)

// //for of loops
// //[{},{},{}]   //array of  objects

// const arr = [1 , 2 , 3 , 4 , 5] 
// for (const num in arr ) {
//     console.log(num)
// }

// // mmaps

// const map = new Map() ;        //uniques key value pairs
// map.set('IN' , "india") ;
// map.set ( 'USA' , "states of america ") ;
// map.set('IN' , "india") ;        

// for (const [key , val ] of map) {
//     console.log(key) 
// }

// // objects , maps are not iterable 

// //for in loops

// const myObject= {
//     js : 'javascript' ,
//     cpp : 'C++' ,
//     rb : "ruby" ,
//     swift : "swift by apple"
// }

// for (const key in myObject) {
//     console.log(key) ;
//     console.log(`${key} shortcut for ${myObject[key]}`) ;
// }
// const array = [1,2,3,4,5,6]
// for (const key in array) {
//     console.log(key)           //prints index
//     console.log(array[key])    //prints values
// }

// const coding = ["js" , " ruby" , "java" , "python" , "cpp"]
// coding.forEach( function (val) {
//      console.log(val) ;
// })


const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
const newNums = myNums.filter((num) => num > 5)
console.log(newNums)
