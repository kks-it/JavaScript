// let and const are block-scoped, while var is funtion-scoped.(they are accessbile in the entire function)

if(true){
    var x = 10;
    let y = 20;
}
console.log(x);
// console.log(y); // ReferenceError: y is not defined


let c = 100;
var d = 200;

if(true){
    let c = 300; // this c is different from the outer c
    var d = 400; // this d is the same as the outer d
    console.log(c); // 300
    console.log(d); // 400
}

console.log(c); // 100
console.log(d); // 400



// ------------------------------------------------

let a = 10;
{
    // var a = 20; // var is a function-scoped variable and in the function scope, a is already declared. Hence, error - SyntaxError: Identifier 'a' has already been declared
}


{
    let a = 30; // this a is block-scoped and in the block, a is not declared yet. Hence, no error.
    console.log(a); // 30
}


var b = 10;
{
    let b = 20; // this b is block-scoped and in the block, b is not declared yet. Hence, no error.
    console.log(b); // 20
}
