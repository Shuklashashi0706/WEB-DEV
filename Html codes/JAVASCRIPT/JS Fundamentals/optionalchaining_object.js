// Optional chaining
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
//this is used in case of accessing nested objects
//it basically checks if that object inside that object
let user={
    name:"Shashi",
    address:{
        street:"1",
    },
    say(){
        console.log("Hi");
    },
};
console.log(user?.address?.street);
//here ?. checks for object existence from left to right
//here,as user exists it checks for address and then street value is given
//lets see for empty object
let user1={};
console.log(user1?.address?.street);//see it gives undefined value as it was not defined
//it doesnt give any error
//?.() and ?.[] are other variants
//?.() is used to call if exits otherwise return undefined
console.log(user.say?.());
console.log(user1.say?.());


// Summary
// The optional chaining ?. syntax has three forms:

// obj?.prop – returns obj.prop if obj exists, otherwise undefined.
// obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
// obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
// As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

// A chain of ?. allows to safely access nested properties.

// Still, we should apply ?. carefully, only where it’s acceptable, according to our code logic, that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur

