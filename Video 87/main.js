const fs =require("fs")


console.log("starting")
fs.writeFile("abhi.txt","Abhinav YAdav",()=>{
    console.log("done")
    fs.readFile("abhi.txt",(error,data)=>{
        if (error) {
            console.error('Error reading the file:', error);
            return;
        }
        console.log(data.toString());
    })
    fs.appendFile("abhi.txt","Abhi",(e,d)=>{
        console.log(d);
    })
})
console.log("ending")