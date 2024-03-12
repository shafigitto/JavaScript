// singleton
// Object.create


// Object literals

const mySym = Symbol("key1")
const JsUser = {
    name : "shafi",
    age : 23,
    [mySym] : "myKey1",
    "fullname" : "Mohammed Shafi",
    location : "Hyderabad",
    email : "shafi@google.com",
    isLoggedIn : false,
    loggedInDays : ["Mon", "Sat"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullname"])
console.log(JsUser[mySym])


JsUser.email = "shafi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Shafi@microsoft.com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())