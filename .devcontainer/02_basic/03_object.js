// singleton made from constructor
//objects.create - method for constructor


//objects literals
const JsUser ={
    name: "Tyagi",
    age: 21,
    location:  "Noida",
    email: "tyagi21@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Mon", "Sat"]
}
//console.log(JsUser.email);

JsUser.eamil = "tyagidivyam24@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "tyagisurya01@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

