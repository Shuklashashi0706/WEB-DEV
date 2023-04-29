let mess = "global variable\n";
let n = 2;
console.log(n);
function show_mess(mess = 'default value called\n'/*this is default parameter*/) {
    n = 3;
    console.log(mess);
}
show_mess();//will call default value 
console.log(n);//calling function changes the global var value to 3
show_mess(mess);//will call global variable
show_mess("runtime call");//will put the string which is called during function call

//function returning value
function sum(a, b) {
    return a + b;
}
let res = sum(2, 3);
console.log(res);


// Summary
// A function declaration looks like this:

// function name(parameters, delimited, by, comma) {
//     /* code */
// }
// Values passed to a function as parameters are copied to its local variables.
// A function may access outer variables.But it works only from inside out.The code outside of the function doesn’t see its local variables.
// A function can return a value.If it doesn’t, then its result is undefined.
// To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.

// It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.

// Function naming:

// A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
// A function is an action, so function names are usually verbal.
// There exist many well - known function prefixes like create…, show…, get…, check… and so on.Use them to hint what a function does.
// Functions are the main building blocks of scripts.Now we’ve covered the basics, so we actually can start creating and using them.But that’s only the beginning of the path.We are going to return to them many times, going more deeply into their advanced features.