import fs from "fs/promises"

let a= await fs.readFile("abhi.txt")

let b= await fs.writeFile("abhi.txt","This is how to use promise")

console.log(a.toString(),b)