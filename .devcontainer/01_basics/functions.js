// sayMyName
function add(number1 , number2){
    console.log(number1+number2)
}
add(2,3)
add(2,'a')
add(2,"4")
function calculateCartPrice(...num1) {
    return num1 
}
console.log(calculateCartPrice(100,400,500))

//                   interesting
console.log(addone) 
function addone(nums){
    return nums + 1 
}
addone(5)

// console.log(addTwo)   // wont work
const addTwo = function(num){
    return num + 2
}

addTwo(5) 

const user ={
    username : "shubh" , 
    price : 999 ,
    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`) ;
    
    // console.log(this) ;
    }
}

user.welcomeMessage ()
user.username = "sommi"
user.welcomeMessage()
console.log(this) 


// function chai() {
//     let username = "shubh" ;
//     console.log(this) ;
//     console.log(this.username) ; 
// }
// chai()

const chai = () => {
    let username = "shubh" 
    console.log(this)
    console.log(this.username)

}
 //           IFFE

(function chai() {
    console.log(`print smthi`) ;
})() ;                                  //prints instantaneously (semicolon necessary)

((name) => {
    console.log(`print smthi ${name}`) ;
})("Shubh") ; 