// console.log("Nodejs")
// console.log("Hello")
// // console.log("Nodemon")

// const fs=require("fs")
// const path = require("path");
// const filePath="/Users/heseelabhusal/Desktop/nodejs 2/files/sample.txt"

// // // dirname
// // console.log(path.dirname(filePath));
// // console.log(__dirname)

// // // basename
// // console.log(path.basename(filePath));

// // // extname
// // console.log(path.extname(filePath));

// // fs.readFile(filePath, "utf-8", (err, data) => {
// //     if (err) throw new Error ("Something went wrong!!")
// //     console.log(data)
// // })

// const  textFile = path.join (__dirname,"files","demo.txt");
// const content="Nepathya College"
// fs.writeFile(textFile,content,(err)=>{
//     if (err) throw new Error ("Something went wrong");
//     console.log("Operation Completed Successfully")


//     fs.readFile(textFile, "utf-8", (err, data) => {
//             if (err) throw new Error ("Something went wrong!!")
//             console.log(data)
//         })
// })


// const fsPromise = require("fs").promises;
// const writingReadingFile = async () => {
//     try{
//         await fsPromise.writeFile(textFile,content);
//         console.log("---------------------")
//         const data = await fsPromise.readFile(textFile,"utf-8");
//         console.log(data)
//     }catch (error) {
//         console.log(error)
//     }
// }
// writingReadingFile();




const express = require("express"); //commonjs way
const dotenv = require("dotenv").config();
// const router=require("./routes/userRoutes.js")
const router=require("./routes/studentRoutes.js")
const db = require("./config/db.js");


const app= express();
const port= process.env.PORT ||5000 ;
app.get('/', (req,res)=>{
    res.send("Welcome to the backend")
    // res.json({message:"All details of users",data:"this is a data"})
})

// // userRoute Middleware
// // api for user
app.use('/api/user', require("./routes/userRoutes.js"))

// api for student
app.use('/api/student',require("./routes/studentRoutes.js"))









db.query('SELECT 1').then((data)=>{
    console.log("Database connection succeeded!");
    app.listen(port, ()=> {
        //console.log(Server is running port: ${port})
        console.log(`Server is running port: http://localhost:${port}`)
    
    })
}).catch((error)=>{
    console.log(error);
})



