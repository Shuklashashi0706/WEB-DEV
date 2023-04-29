//Objects is like a collection of data types to use different data types
//it can be created using {} brace with key:value inside it separeated by ','
//Syntax:
let user = {
    name: "John", //name and age are properties of object(user)
    age: 23,
};
//it can be accessed using '.' operator
console.log(user.name);
console.log(user.age);
//we can remove,add and modify the value of object
user.name = "Shashi";
console.log(user.name);
//adding 
user.sex = "male";
console.log(user.sex);
//removing
delete user.age;
console.log(user.age);
//multi word property can be added in object using " ..."
let subscriber = {
    "first name": "Shashi"
};
console.log(subscriber["first name"]);
//empty object
let sub = {};
sub["First name"] = "Sh";
console.log(sub["First name"]);
delete sub["First name"];

//properties of objects can be accessed using []
// let user={
//     name:"Shashi",
//     age:23,
// }
// let ch=prompt("Enter your choice?");
// alert(`Your ${ch} is ${user[ch]}`);

// . dot operator can be used like []

//Property Existence using "in" operator 
//"key" in object
console.log("First name" in sub);

// To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.
//for(key in object){   runs code  }
let us={
    name:"Shashi",
    age:12,
};  
for(let key in us){
    console.log(`${key}:`);
    console.log(us[key]);
}
// integer properties of an object comes in ascending order regardless of creation inside object
//non integer propertirs of an object comes in as created inside object
