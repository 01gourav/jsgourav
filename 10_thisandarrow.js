const user = {
    name: "gourav",
    price: 2255,

    welcomeMessage: function () {
        console.log(`${this.name}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.name= "sam curren"
// user.welcomeMessage()

//console.log(this);
// function chai (){
//     let user = "gourav"
//     console.log(this.user);
// }
// console.log(user);
//chai()

// const chai = function() {
//     let username = "gourav"
//     console.log(this.username);
// }

const chai = ()=>{
    let username = "gourav"
    console.log(this);
}

//chai();
const addTwo = (num1, num2) => num1 + num2


console.log(addTwo (6,5));
console.log(2 + "2" - 1);
console.log (2 - "1");