//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //names iife
    console.log(`DB Connected`);
}) ();

( (name)=> {
    //unnamed iife
    console.log(`DB Connected Two ${name}`);
} ) ('mittha')