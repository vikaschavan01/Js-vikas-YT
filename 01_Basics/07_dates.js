// Dates

let myDate = new Date()
 //console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getHours());
// console.log(myDate.getMonth());
// console.log(myDate.setHours());
// console.log(myDate.setUTCMilliseconds());

let myCreatedDate = new Date(2024, 0, 26, 4, 0, 60, 43)
//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);

//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

// ${newDate.getDay()} and the Time

newDate.toLocaleString('default', {
    weekday: "long",
})