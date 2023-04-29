let user={
    name:"John",
    sizes:{
        height:140,
        width:70,
    }
};
console.log(user.name);
console.log(user.sizes.height);
console.log(user.sizes.width);
//to clone nested object user
let clone=user;
console.log(clone.sizes.height);
user.sizes.height=14;
console.log(clone.sizes.height);//changing user size values affects the clone sizes value which means both are dependent on each other
//to make clone objects unrelated to each other
//we can make use structuredClone(object)
let clone1=structuredClone(user);
console.log(clone1.sizes.height);
user.sizes.height=15;
console.log(clone1.sizes.height); //gives 14 which means changing user value doesnt affect clone1 value



