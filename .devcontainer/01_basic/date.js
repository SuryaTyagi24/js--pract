   let myDate = new Date()
// console.log(myDate.toISOString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//let myCreatedDate = new Date(2023, 0 , 23, 5, 3)
//console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("10-27-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
newDate.toLocaleString('default', {
    weekday : "long",
    
})
