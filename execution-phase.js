console.log("Program starts")

let i = 0;

// manually creating a long running loop to prove all these are synchronously executed
while(i < 1e9){
  i++
}

console.log("Program ends")
