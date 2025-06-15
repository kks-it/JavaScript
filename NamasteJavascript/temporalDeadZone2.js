// Redeclaring variables declared with var, let, and const

var a = 100;
var a = 200; // redeclaring var is allowed
console.log(a); // 200


let b = 100;
// let b = 200; // SyntaxError: Identifier 'b' has already been declared
// var b = 300; //  SyntaxError: Identifier 'b' has already been declared 