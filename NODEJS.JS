console.log("Start") // This is a synchronous function

setTimeout(() => {
    console.log("inside call back function 1") 
},0)  // This is a asynchronous function

setTimeout(() => {
    console.log("inside call back function 2")
},0)  // This is a asynchronous function

//function given as a parameter or argument to any other function is call bck function


console.log("End")

console.log("Hi")
console.log("Hi")
console.log("Hi")
console.log("Hi")
console.log("Hi")
console.log("Hi")
console.log("Hi")
/// so JS is a single threaded language means it will process synchronous first and asynchronous later so
// console logs will get printed first and functions later

let a = process.argv[2];
console.log(a , "arguments from cli interface")

//Node JS helps to run server side js coding
   