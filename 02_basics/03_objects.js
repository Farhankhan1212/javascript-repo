// singleton


// object literals

const mySym = Symbol("key1")


const jsUser ={
    name: "farhan",
    "full name": " farhan khan",
    [mySym]: "mykey1",
    age: 18,
    location: "lucknow",
    email: "mdfarhank866@gmail.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// jsUser.email = "jha@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(jsUser.greeting());