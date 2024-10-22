const user ={
    username: "Tyagi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
 //user.welcomeMessage()
// user.username = "Bali"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "TYagi"
//     console.log(this);
    
// }
// chai()

// const chai = function(){
//     let username = "Tyagi"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Surya"
    console.log(this.username);
    
}
//chai()
// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(4,6));

const addTwo = (num1, num2) => (num1+num2)
                       //Implisit Return
console.log(addTwo(4,6))