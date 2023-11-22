// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })





// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("hey");
//         resolve()
//     }, 2000);
// }).then(function () {
//     console.log("shubham");
// })




// const promiseThree= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             username:"shubham",
//             email:'shubhamdveu023@gmail.com'
//         })
//     }, 2000);
// })

// promiseThree.then(function (user) {
//     console.log('user is',user);
// })

let myObj={
    username: 'shubham',
    password: '12345678'
}


const promiseFour= new Promise(function(resolve,reject){
    setTimeout(() => {
        let error= true;
        if(!error)
        {
            console.log("No error found");
            resolve(myObj)
        }else{
            console.log("Error Found");
            reject()
        }
    }, 1000);
})


// promiseFour.then(function(user){
//     console.log("Resolved and the user is:");
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log("Username is:",username);
// }).catch(function(error){
//     console.log("Hence Rejected and Catched",error);
// })

////OR

// async function consumePromiseFour(user) {
//     try {
//         const response= await promiseFour
//         console.log(response)
//         console.log(user.username);;
//     } catch (error) {
//         console.log(error);
//     }
    
// }



fetch('https://api.github.com/users/Shubhamcypher').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log('DATA IS:',data);
}).catch((error)=>{
    console.log('The error is',error);
})

// OR

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }


