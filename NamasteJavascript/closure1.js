// Closure is function + lexical environment. That's why it has access to the outer function's variables even after the outer function has executed.

// Closure: Closure is function + lexical environment. It is a function that has access to its own scope, the outer function's scope, and the global scope, even after the outer function has executed. It allows the inner function to remember the environment in which it was created.

function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  a = 20;
  return y;
}
let z = x();
z(); // 20 