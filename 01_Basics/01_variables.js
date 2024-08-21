const accountID = 144581
let accountEmail = "vika0812@gmail.com"
var accountPassword = "12345"
accountCity = "Shahada"
let accountState;


// accountID = 2 //Not Allowed
accountEmail = "akas324@gmail.com"
accountPassword = "3944820"
accountCity = "Nandurbar"

console.log(accountID);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])