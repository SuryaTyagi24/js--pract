function sayMyname(){
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("G");
    console.log("I");
}
//sayMyname()

function addTwoNumbers(number1 , number2){
    //console.log(number1 + number2);
    return number1 + number2
}
const result = addTwoNumbers(3,4)
//console.log("Result: ", result);

// function loginUserMessage(username){
//     if(username === undefined){
//       console.log("Please enter a username");
//       return
//     }
//     return `${username} just logged in`
// }
//console.log(loginUserMessage("Tyagi"));
//console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200, 400, 500))
const user ={
    username: "Tyagi",
    price: 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "Bali",
    price: 399
})
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));




