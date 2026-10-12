const myArr = [1, 2, 3, 4, 5 , true , "NAME"] 
//slice , splice (splice removes elemnts form an array hence changing it while slice is just like basic index slicing )

myArr.push(7,8)
myArr.unshift("start_men_inserted")
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.includes(7))
console.log(myArr.indexOf(3))     // -1 if doesnt exist

console.log(Array.from("shubh"))

// see how to declare a symbol key in object  