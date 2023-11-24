
// You can not change the value of Objects like Math.PI

// console.log(Math.PI);
// Math.PI=4
// console.log(Math.PI);

// let descriptor= Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);


const myObj={
    name: "Shubham",
    age: 23,
    roll: 7
}

// console.log(Object.getOwnPropertyDescriptor(myObj,'name'));

// Object.defineProperty(myObj,'name',{
//     writable:false
// })

// myObj.name="Amit"

// console.log(myObj.name);


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}


