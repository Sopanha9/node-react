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
module.exports = {
    getStudents,
    createStudent,
    showStudents
};