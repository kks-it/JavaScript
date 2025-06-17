// Interview question: setTimeout with closure


function x(){
    for(var i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
    console.log("Loop finished");
}

x(); // Outpult: Loop finished 6 6 6 6 6

// Question: Make changes such that output becomes 1, 2, 3, 4, and 5 instead of 6, 6, 6, 6, 6?
// Answer: use `let` instead of `var` in the for loop.


// Because `let` has block scope, each iteration of the loop creates a new binding for `i`. This means that when the callback function is executed after the timeout, it captures the value of `i` at that specific iteration.

// the JavaScript engine behaves as if you’d done something like:
// {
//   let i = 1;
//   /* iteration 1 body… */
// }
// {
//   let i = 2;
//   /* iteration 2 body… */
// }
// // …and so on up to i = 5


// follow-up Question: Don't use 'let', do it using var only.
// Answer: Since var is function-scope, we need to make the i (variable which we are printing) into a function which receives different values of i.

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function y(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     y(i);
//   }
//   console.log("Loop finished");
// }
