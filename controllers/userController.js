const db =require("../config/db.js")
const getAllUser = async (req,res) => {
    try{
        let sqlQuery = "SELECT * from students"
        const data = await db.query(sqlQuery)
        res.json({message:"Get All Users", details:data})
    }catch(error){
        console.error("Error while fetching data", error)
        res.status(500).json({err: "Internal Server Error"})
    }
}

const createUser=(req,res)=>{
    res.json({message: "User create successfully"})
}

const getUserById = (req,res)=> {
    res.json({message:`User of ${req.params.id} is found`})
}

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