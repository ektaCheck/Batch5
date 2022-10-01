// Resolve Situation
// async function greet(){
//     return 2
// }
// greet()
// .then((val)=>console.log(val))

// Reject async  Situation

// async function learning(){
//     let x=2;
//     if(x===1){
//         return "It is resolved"
//     }else{
//         throw new Error("It is rejected")
//     }
// }
// learning()
// .then((val)=>console.log(val))
// .catch((err)=>console.log(err))

// learning await
// Example 1
// function learningAwait(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Resolved by batch 5")
//         }, 1000);
//     })
// }

// async function gettingData(){
//     let data= await learningAwait();
//     console.log("data",data)
// }
// gettingData();

// Example -2
// function changeBackgroundColor(color){
//     return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         document.body.style.backgroundColor=color
//         resolve();
//       }, 1000);
//     })
// }

// async function changingColor(){
//     await  changeBackgroundColor("red")
//     await  changeBackgroundColor("green")
//     await  changeBackgroundColor("yellow")
//     console.log("jfkjdkfj")
// }
// changingColor()

// Example-3

function makingRequest(website) {
  console.log("making request");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (website === "Google") {
        resolve("Hello Google");
      } else {
        reject("I only talk to Google");
      }
    }, 1000);
  });
}

function processRequest(response) {
  console.log("processing request");
  return new Promise((resolve) => {
    resolve(`Extra Info ${response}`);
  });
}
// makingRequest("Facebook")
// .then((val)=>processRequest(val))
// .then((val)=>console.log(val))
// .catch((err)=>console.log(err))

// making request
// processing request
// Extra Info Hello Google

// making request
// I only talk tpo google

async function doWork() {
try {
    let data = await makingRequest("kldkfld");
    let final = await processRequest(data);
    console.log(final);
} catch (error) {
    console.log("Error",error)
}
}
doWork();






// async function hello(){
// return "ekta"
// }
// console.log(hello())
// Tell them about .then and .catch here also

// Example to understand async await

// function makeRequest(location) {
//   console.log("making request");
//   return new Promise((resolve, reject) => {
//     if (location === "Google") {
//       resolve("hello google");
//     } else {
//       reject("We can only talk to google");
//     }
//   });
// }

// function processRequest(response) {
//   return new Promise((resolve, reject) => {
//     console.log("Processing response");
//     resolve(`Extra Info + ${response}`);
//   });
// }

// makeRequest("facebook")
//   .then((res) => {
//     console.log("response Recived", res);
//     return processRequest(res);
//   })
//   .then((data) => console.log(data))
//   .catch((err)=>console.log(err))

//   async function doWork(){
//     const res= await makeRequest("Google")
//     const data=await processRequest(res)
//     console.log(data);

//   }
//   doWork()

// async function greeting(){
//     return "Hello"

// }
// greeting()
// .then((res)=>{console.log("Its is resolved",res)})
// .catch((err)=>console.log(err))
// Await learning
