//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "1"
tinderUser.name = "Vikas"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "viku0812@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Vikas",
            middleName : "Sunil",
            lasName : "Chavan"
        }
    }
}

//console.log(regularUser.fullname.userFullName.middleName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

//const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

//console.log(obj3);

const users = [
    {
        id : 1,
        email : "Vikas029@gmail.com"
    },
    {
        id : 2,
        email : "Vikas029@gmail.com"
    },
    {
        id : 3,
        email : "Vikas029@gmail.com"
    },
    {
        id : 4,
        email : "Vikas029@gmail.com"
    },
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
console.log("Hello");
