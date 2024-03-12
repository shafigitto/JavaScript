// function sayHello()
// {
//     console.log("Hello world")
// }

// sayHello()

// function addTwoNumbers (num1, num2)
// {
//     console.log(num1+num2)
// }

// addTwoNumbers(2,3)

function addTwoNumbers(num1, num2)
{
    // let result = num1+num2
    // return result;

    return num1+num2
}

result = addTwoNumbers(5,4)
// console.log("Result :" , result)

function loginUserMessage(username = "user")
{
    if(!username){
        console.log("Please enter your name")
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Shafi"))
// console.log(loginUserMessage())


function calculateCartValue(...num){
    return num
}
function calculateCartValue2(val1,val2,...num){
    return num
}

console.log(calculateCartValue(200,4000,50,39))
console.log(calculateCartValue2(300,999,35,666,90))


const user = {
    username : "shafi",
    price : 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username : "Afroz",
    price : 499
})

const myNewArray = [20,30,40,50]

function secondValue(anyarray){
    return anyarray[1]
}

console.log(secondValue(myNewArray))