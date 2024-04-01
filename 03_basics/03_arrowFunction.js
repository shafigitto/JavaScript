const user = {
    username : "shafi",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , Welcome to website`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Afroz"
user.welcomeMessage()

console.log(this);


// function chai(){
//     let username = "shafi"
//     console.log(this);
//     console.log(this.username);
// }

// chai()






// const chai = function () {
//     let username = "shafi"
//     console.log(this.username)
// }

// chai()





// const chai = () => {
//     let username = "shafi"
//     console.log(this);
// }

// chai()




// const addTwo = (num1, num2) => {
//     return num1 = num2
// }

// console.log(addTwo(3,4))


// +++++++++++++++ IMPLICIT RETURN +++++++++++++ 

const addTwo = (num1 , num2) => num1 + num2

const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username: "shafi"})

console.log(addTwo(4,6))