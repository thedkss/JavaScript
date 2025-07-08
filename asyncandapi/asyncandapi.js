// const promiseOne = new Promise((resolve, reject)=>{
//     // Do async task like DB calls, network, cryptography etc. 
//     setTimeout(() => {
//         console.log("Async Task Completed");
//         resolve()
//     }, 2000);
// })


// promiseOne.then(()=>{
//     console.log('Promise Consumed');
    
// })

// new Promise((resolve, reject)=>{
//     // Do async task like DB calls, network, cryptography etc. 
//     setTimeout(() => {
//         console.log("Async Task Completed!");
//         resolve()
//     }, 2000);
// }).then(()=>{ console.log('Promise Consumed!')})

// const promiseThree = new Promise((resolve, reject)=>{
//     // Do async task like DB calls, network, cryptography etc. 
//     setTimeout(() => {
//         console.log("Async Task 3 Completed!");
//         resolve({username:"Dileep", surname:"Singh"})
//     }, 2000);
// }).then((user)=>{ console.log(user)})

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({name:"Dileep", pass:"singh"})
//         }else
//         {
//             reject('ERROR: Something went wrong!!')
//         }
//     }, 1000);
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.name
// }).then((name)=>{
//     console.log(name);
// }).catch((error)=>{console.log(error);
// }).finally(()=>{
//     console.log('Promise is either resolved or rejected');
// })

// Using async...await

// async function handlingPromiseFour() {
//     try {
//             const promiseResponse = await promiseFour
//             console.log(promiseResponse); 
//     } catch (error) {
//         console.log('Ohhh ',error);
//     }
// }
// handlingPromiseFour()

// Fetching data from api using fetch
// async function getAllUsers() {
//     const url = 'https://jsonplaceholder.typicode.com/users'
//     try 
//     {
//         const response = await fetch(url) 
//         const data = await response.json()
//         // console.log(response);
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }
// getAllUsers() 

// Fetching data from api using promise...then...catch
const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})