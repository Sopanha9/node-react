const students = require('../data');


const getStudents = (req, res) => {
    res.send("Thsis is the student list");
}

const createStudent = (req, res) => {
    res.send("Create student here");
}

const showStudents = (req, res) => {
    res.json(students);
}

const updateStudent = (req, res) => {
    res.send("Update student here");
}

const sort = (req, res) => {
    res.send("Sort student here");
}


module.exports = {
    getStudents,
    createStudent,
    showStudents,
    updateStudent,
    sort
};