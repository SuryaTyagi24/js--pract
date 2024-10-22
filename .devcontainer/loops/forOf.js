//For of
//["", "" , ""]
//[{}, {} ,{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    //console.log(num);
}
const greetings = "Hello Namastey!"
for(const greet of greetings){
   //console.log(greet);   
}

//Maps
const map = new Map();
map.set('In',"India")
map.set('UK', "Unitied Kingdom")

//console.log(map);
for(const [key , value] of map){
    console.log(key,':-', value);
    
}
