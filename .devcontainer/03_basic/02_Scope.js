let a = 300
if(true){
    let a =10
    const b= 20
    var c=30
    //console.log("Inner: ", a );
    
}
// for(let i=0; i<Array.length; i++){
//     const element = array[i];
// }
// console.log(a);
// console.log(b);
//console.log(c);
function one(){
    const username = "Tyagi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
     
}
//one()
if(true){
    const username = "Tyagi"
    if(username === "Tyagi"){
        const website = "youtube"
        //console.log(username + website);  
    }
    // console.log(website);
}
//console.log(username);

//*****************INTERSTING FUNCTION****************

function addone(num){
    return num + 1
}
addone(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)