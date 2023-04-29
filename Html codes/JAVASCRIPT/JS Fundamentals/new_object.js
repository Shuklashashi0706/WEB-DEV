//It becomes quite hard task to make new objects by following previous method
//hence,we use "new" to make object instead 
//it can be created by using normal function but name should start with capital letter
function User(name="Shashi"){
    this.name=name;
    this.isAdmin=false;
}
//to create a new object ,
let user1=new User("John");
console.log(user1.name);
console.log(user1.isAdmin); 
//we can multiple objects just by assigning 
let user2=new User();
console.log(user2.name);//gives the default value
console.log(user2.isAdmin); 
let user3=new User("Mark");
console.log(user3.name);
console.log(user3.isAdmin); 
//see,there are multiple objects created just using one function
