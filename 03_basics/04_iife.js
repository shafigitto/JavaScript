// Immediately Invoked Function Expression (IIFE)

// ()(); 

// function in a paranthesis with a exuction paranthesis must end with semicolon

// why to use IIFE ?  to overcome pollution from global scope

// named IIFE

(function chai(){
    console.log(`DB CONNECTED`)
})();


// IIFE

((name) => {
console.log(`DB CONNECTED TWO ${name}`)
})("shafi");