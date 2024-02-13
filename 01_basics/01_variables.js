const accountId = "202456"
let accountEmail = "shufey@google.com"
var accountPassword = "112233"

accountCity = "Hyderabad"

let accountState;



/* 
    Prefer not to use var
    because of issues with block scope and functional scope
*/

// accountId = 2 // not allowed

accountEmail = "shufey@miscrosoft.com"
accountPassword = "11111"
accountCity = "Bangalore"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])