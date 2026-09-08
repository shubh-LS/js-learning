// const mysym = Symbol("k1")
// const jsUser = {
//     name : "shubh" , 
//     age : 18 ,
//     location : "jaipur" ,
//     [mysym] : "symbol" ,
//     isLoggedIn : false ,
//     lastLoginDays : ["monday" , "tuesday"] 
// }
// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(typeof jsUser[mysym]) 
const course = {
    coursename: "js in hindi" , 
    price : "999"  ,
    courseInst : "hitesh" ,
}

console.log(course.courseInst) 
const {courseInst} = course 
console.log(courseInst) 
const {courseInst : inst} = course
