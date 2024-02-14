// primitive

// 7 types : String , Number, Boolean , null , undefined , Symbol , BigInt

// Non-Primitive (Reference)

// Array , Objects , Functions


// NOTE : Javascript is a dynamically typed language because we no need to declare datatypes with variables
// it figures out the datatype of a value at the runtime





let empName = "Shafi"
let age = 23
let isEmployed = true
let certification = null
let javascriptCourse;
let id = Symbol("123")
let newId = Symbol("123")
let money = 12237363947655289n

// console.log(id === newId)  // false

let courses = ["HTML", "CSS", "JS"]
let myObject = {
    CompanyName : "Shufey",
    age : 23,
    Id : 112233
}


let myFunction = function(){
    console.log("Hello World")
}

console.log(typeof empName)           // string
console.log(typeof age)               // number
console.log(typeof isEmployed)        // boolean
console.log(typeof certification)     // object
console.log(typeof javascriptCourse)  // undefined
console.log(typeof id)                // symbol
console.log(typeof newId)             // symbol
console.log(typeof money)             // bigint
console.log(typeof courses)           // object
console.log(typeof myObject)          // object
console.log(typeof myFunction)        // function