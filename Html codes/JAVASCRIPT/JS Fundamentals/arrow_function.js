//syntax of arrow function
let sum = (a, b) => a + b;
//it is just similar as
//let sum= function(a,b)
// { return a + b; }
console.log(sum(2, 3));

//if there is only one argument to be passed then parenthesis can be removed
let num = n => n * 2;
console.log(num(2));
//if there is no argument to be passed then parenthesis should be there
let show = () => console.log("Show");
show();
//Multiline arrow funstion
let result = (a, b) => {
    return result;
}
console.log(result(3, 2));

// Summary
// Arrow functions are handy for simple actions, especially for one - liners.They come in two flavors:

// Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result.Parentheses can be omitted, if there’s only a single argument, e.g.n => n * 2.
// With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.