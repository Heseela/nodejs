const express = require ("express")
const router = express.Router();
const{
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} = require("../controllers/userController.js")

router.route('/').get(getAllUser)
router.route('/').post(createUser)
router.route('/:id').get(getUserById)
router.route('/:id').put(updateUser)
router.route('/:id').delete(deleteUser)

module.exports = router;


// // api for user details
// // get all users details
// app.get("/users",(req,res)=>{
//     res.send("get all users details")
// })


// // get user by ID
// app.get("/users/:id", (req,res)=>{
//     res.json({message:`Detail of user with id ${req.params.id} is found!!`})
// })


// //create user
// app.post("/users",(req, res)=>{
//     res.json({message:"user created successfully!!"})
// })

// //update user
// app.put("/user/:id",(req,res)=>{
//     res.json({message: `User with ${req.params.id} is updated successfully!!`})
// })

// // delete user
// app.delete("/user/:id",(req,res)=>{
//     res.json({message: `User with ${req.params.id} is deleted successfully!!`})
// })

