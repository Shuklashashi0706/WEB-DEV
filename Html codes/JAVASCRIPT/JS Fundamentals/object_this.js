//making objects to use function
'use strict';
let user={
    name:"Shashi",
    age:23,
};
user.sayhello=()=>{
    console.log("Hello");
}
user.sayhello();
// A function that is a property of an object is called its method.
//here sayhello is method of object user

let user1={
    sayhello:()=>{
        console.log("Hello");
    }
}
user1.sayhello();
//this 
let user2={
    name:"Shashi",
    sayhello:function(){
        console.log(this.name);//here this is current object which is user2
    }
}
user2.sayhello();
//IMp:We cannot use this in arrow function as it takes the value from outer function
let user3={
    name:"Shashi",
    sayhi(){
        let hi=()=>{
            console.log(this.name); //here this takes the value from outer function
        }
        hi();
    }
}
user3.sayhi();

// Summary
// Functions that are stored in object properties are called “methods”.
// Methods allow objects to “act” like object.doSomething().
// Methods can reference the object as this.
// The value of this is defined at run-time.

// When a function is declared, it may use this, but that this has no value until the function is called.
// A function can be copied between objects.
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
// Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.