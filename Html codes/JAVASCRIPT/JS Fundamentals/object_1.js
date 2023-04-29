//Copying object into another value assigns the refernce of
//object(basically means the address of object) to that variable
let user={
    name:"Shashi",
    age:23,
};
let use=user; //variable use has now the address of user object
//now properties of object can be used by both user or use for accessing or modifying
console.log(use.name);
console.log(user.age);