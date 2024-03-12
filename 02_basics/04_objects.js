//const fbUser = new Object()

const fbUser = {}

fbUser.id = "123abc"
fbUser.name = "shufey"
fbUser.isLoggedIn = false

// console.log(fbUser);

const regularUser = {
    email : "shafi@hmail.com",
    username : {
        fullname : {
            firstname : "Mohammed",
            lastname : "Shafi"
        }
    }
}

// console.log(regularUser.username.fullname.firstname)


const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1 , obj2)

const obj3 = {...obj1 , ...obj2}
// console.log(obj3)

const user = [
    {
        id : 1,
        email : "s@abc.com"
    },
    {
        id : 1,
        email : "s@abc.com"
    },
    {
        id : 1,
        email : "s@abc.com"
    },
]

user[1].email
// console.log(fbUser)

// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// console.log(Object.entries(fbUser));

// console.log(fbUser.hasOwnProperty("isLoggedIn"));
// console.log(fbUser.hasOwnProperty("isLoggedOut"));



// *********************** OBJECT DE STRUCTURE *************************** 

// const course = {
//     course_name : "Js in Hindi",
//     price : 999,
//     courseTeacher : "Hitesh"
// }

// // console.log(course.courseTeacher)

// const {courseTeacher: teacher} = course

// // console.log(courseTeacher)
// console.log(teacher)



// *********************** JSON *********************** 


{
    "coursename" : "Js in Hindi",
    "price" : 499,
    "courseInstructor" : "Hitesh choudhary"
}

[
    {},
    {},
    {}
]