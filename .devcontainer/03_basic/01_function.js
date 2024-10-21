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

function loginUserMessage(username){
    if(username === undefined){
      console.log("Please enter a username");
      return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Tyagi"));
console.log(loginUserMessage());




