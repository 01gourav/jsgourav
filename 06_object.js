


// Object.create
const MySys = Symbol("key1")
const JsUser = {
    name: "gourav",
    [MySys]: "myKey1",
    age: 22,
    location: "banswara",
    email: "gbkhajja@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday","Sunday"]
}

// console.log(JsUser["location","email","name","age","isLoggedIn"]);
JsUser.email = "gourav@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "gourav@microsoftgpt.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(JsUser.greeting);