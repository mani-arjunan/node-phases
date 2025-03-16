console.log("Program starts")

let i = 0;

while(i < 1e9) {
  i++
}

setTimeout(() => {
  console.log("timer phase of 0 seconds")
}, 0)

setTimeout(() => {
  console.log("timer phase of 1000 seconds")
}, 1000)

console.log("Program ends")
