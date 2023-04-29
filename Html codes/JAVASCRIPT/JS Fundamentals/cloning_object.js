//to duplicate object into another variable
//1 method is to iterate
let user = {
    name: "Shashi",
    age: 25,
};
let clone = {};
for (let key in user) {
    clone[key] = user[key];
}
for (let key in clone) {
    console.log(clone[key]);
}

// We can also use the method Object.assign.
// The syntax is:
// Object.assign(dest, ...sources)
// The first argument dest is a target object.
// Further arguments is a list of source objects.
// It copies the properties of all source objects into the target dest, and then returns it as the result.

let clone1={};
let user1={
    sex:"Male",
};
Object.assign(clone1,user,user1);//properties of user and user1 are cloned to clone 1
for (let key in clone1) {
    console.log(clone1[key]);
}