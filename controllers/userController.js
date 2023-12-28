const db =require("../config/db.js")
const getAllUser = async (req,res) => {
    try{
        let sqlQuery = "SELECT * from students"
        const [data] = await db.query(sqlQuery)
        res.json({message:"Get All Users", details:data})
    }catch(error){
        console.error("Error while fetching data", error)
        res.status(500).json({err: "Internal Server Error"})
    }
}

// const createUser=(req,res)=>{
//     res.json({message: "User create successfully"})
// }

// const getUserById = (req,res)=> {
//     res.json({message:`User of ${req.params.id} is found`})
// }

const getUserById = async(req,res)=>{
    try{
        let userId = req.params.id;
        let sqlQuery = "SELECT * from students WHERE ID = ?"
        const [data] = await db.query (sqlQuery,[userId])

        if (data.length===0){
        res.status(404).json({message:`User found with ${userId}`})
        }else{
        res.status(200).json({message:`User found with ${userId}`,details:data})
        }
    }catch(error){
        console.error("Error while fetching data",error)
        res.status(500).json({err: "Internal Server Error"})
    }
}

const createUser=async (req,res) => {
    try{
        const {name,address,faculty} = req.body;
        let sqlQuery = "insert into students (name,address,faculty) values(?)";
        const data = await db.query(sqlQuery,[name,address,faculty])
        console.log(data);
        res.status(201).json({message:"User created successfully"})

    }catch(error){
        console.error("Error while fetching data",error)
        res.status(500).json({err:"Internal Server Error"})
    }
}

// const getUserById = async(req,res)=>{
//     try {
//         let sqlQuery = "SELECT * FROM students WHERE id = " + req.params.id
//         const [data] = await db.query(sqlQuery)
//         res.status(200).json({ message: "Get All users", details: data })
    
//     } catch (error) {
//         console.error("Error while fetching data", error)
//         res.status(500).json({ err: "Internal Server Error" })
//     }
    
// }

const updateUser = (req, res)=>{
    res.json({message: `User with ${req.params.id} is updated`})
}

const deleteUser = (req, res)=>{
    res.json({message: `User with ${req.params.id} is deleted`})
}


module.exports = {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}