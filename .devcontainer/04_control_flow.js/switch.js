// falsey values
// false, 0 , -0,BigInt 0n ,"" , null, undefined, NaN

//truthy Value
//"0" , 'false', " ", [] , {}, function(){}

const userEmail = []

if(userEmail.length === 0){
    //console.log("Array is empty");
    
}
const emptyObj = {}
if(Object.keys(emptyObj).length ===0 ){
    //console.log("Object is Empty");  
} 
//false == 0 --> true
//false == '' --> true
//0 =='' --> true

//NUllish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 14
//console.log(val1);

// Terniary Operator
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More Than 80");
;

