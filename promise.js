// Stages of Promise
// 1.fullfilled
// 2.reject
// 3.pending

// How to create the promise
// let promise=new Promise((resolve,reject)=>{})

// Simple Example
// function promiseCheck(){
//     return new Promise((resolve,reject)=>{
//         let x=1;
//         if(x==1){
//             resolve("I am resolved by ekta")
//         }else{
//             reject("I am rejected")
//         }

//     })
// }
// promiseCheck()
// .then((val)=>console.log(val)return prmosecheck())
// .catch((val)=>console.log(val))

// Dinner Example

let promise=new Promise((resolve,reject)=>{
    let pizzaStatus=false;
    setTimeout(() => {
        if(pizzaStatus===true){
            resolve("Maam we got Pizza")
        }else{
            reject("Sry Dominoes is closed")
        }
        
    }, 5000);

})
promise
.then(successCallBack)

.catch(rejectCallBack)


function successCallBack(msg){
    console.log(msg)
    console.log("setting up the table");
}

function rejectCallBack(msg){
    console.log(msg)
    console.log("Cooking pasta");
}


