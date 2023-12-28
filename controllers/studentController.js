const getAllStudent = (req,res)=>{
    res.json({message: "get all students details"})
}

const getStudentById = (req,res)=> {
    res.json({message:`Student of ${req.params.id} is found`})
}

const updateStudent = (req, res)=>{
    res.json({message: `Student with ${req.params.id} is updated`})
}

const deleteStudent = (req, res)=>{
    res.json({message: `Student with ${req.params.id} is deleted`})
}


module.exports = {
    getAllStudent,
    getStudentById,
    updateStudent,
    deleteStudent
}