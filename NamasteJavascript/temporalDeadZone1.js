
// accessing variables and functions before they are initialized


console.log(a);         // undefined (because it is declared with var)
// console.log(b);              // cannot access b before initialization (temporal dead zone)
// console.log(c);              // cannot access c before initialization (temporal dead zone)
// console.log(addTwo(10, 20));     // addTwo is not a function (because it is initialzed 'undefined' as it is declared with var)
// console.log(addThree(10, 20, 30)); // cannot access addThree before initialization (temporal dead zone)
console.log(addFour(10, 20, 30, 40));  // 100 (it will work because it is declared with function declaration)

var a = 10;
let b = 20;
const c = 30;


var addTwo = function(x, y){
    return x + y;
}


let addThree = function(x, y, z){
    return x + y + z;
}

function addFour(x, y, z, w){
    return x + y + z + w;
}
