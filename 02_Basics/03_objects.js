// singleton
// Object.create

// object literals

 const mySym = Symbol("key1")

const JsUser = {
    name : "Vikas",
    "full name" : "Vikas Chavan",
    age : 21,
   [mySym] : "myKey1",
    location : "Shahada",
    email : "vikaschavhan0812@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "viku03@google.com"
//Object.freeze(JsUser)
JsUser.email = "vikas303@google.com"

//console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello, JS User");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
