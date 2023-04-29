//a??b returns a if it is not null otherwise return b
let a = null;
let b = 'bye';
console.log(a ?? b);//returns b
a = 'hi';
console.log(a ?? b);//return a
//|| acts same as ??

// Summary
// The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

//     It’s used to assign default values to variables:

// // set height=100, if height is null or undefined
// height = height ?? 100;
// The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

//     It’s forbidden to use it with || or && without explicit parentheses.