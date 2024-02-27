// const myObject = {
//     cpp : 'c plus plus',
//     js :'javascript',
//     db : 'database'
// }
// for (const key of myObject) {
//     console.log(myObject[key]);
// }

// const programming = ["js","cpp","c","java","rb"]
// for (const key in programming) {
//    console.log(programming[key]);
// }

// const coding1 = ["js","cpp","c","java","rb"]

// coding1.forEach(  function (coding1){
//     console.log(coding1);
// })
// const coding = ["js","cpp","c","java","rb"]

// coding.forEach( (item)=> {
//     console.log(item);
// })

// const coding = ["js","cpp","c","java","rb"]

// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
// })



const myNum = [1,2,3,4,5,6,7,8,9]
const newNum = myNum.filter((num)=>{
    return num > 4
})
console.log(newNum);
