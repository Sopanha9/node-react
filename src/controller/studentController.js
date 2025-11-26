const students = require('../../data/students');

let nextId = 2;

// get all students
const getList = (req, res) => {
    res.json(students);
}

// create student
const createStudent = (req, res) => {
    const { name, age } = req.body;

    if(!name || !age) {
        return res.status(400).json({ error: 'Name and age are required' });
    }

    const newStudent = {
        id: nextId++,
        name:name,
        age:age
    }

    students.push(newStudent);
    res.json({
        message: 'Student created successfully',
        student: newStudent
    })
}

// update students
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id) // get id
    const {name , age} = req.body;

    const student = students.find(s => s.id === id);

    // validate
    if(!student) {
        return res.json({message: "Student not found"})
    }

    // update only if sent
    if(name) {
        student.name = name;
    }
    if(age){
        student.age = age
    }

    res.json({
        message: "Updated Successfully",
        student: student
    })

}

// delete student
// const deleteStudent = (req, res) => {
//     const id = parseInt(req.params.id);

//     const index = students.findIndex(s => s.id === id);

//     if( index = -1) {
//         return res.json({message: "Student not found"})
//     } 
        
//     students.splice(index, 1);
//     res.json({message: "Deleted successfully"})
    

// }

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    
    const index = students.findIndex(s => s.id === id);
    
    if (index === -1) {
        return res.json({ message: "Student not found!" });
    }

    students.splice(index, 1);
    res.json({ message: "Deleted successfully!" });
};
module.exports = {
    getList,
    createStudent,
    updateStudent,
    deleteStudent,
}