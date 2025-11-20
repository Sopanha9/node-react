const {students} = require('../data');
const {getStudents, createStudent, showStudents} = require('../controller/studentController.js');


const Student = (app) => {
  app.get('/students', getStudents);
  app.get('/api/create', createStudent);
  app.get('/api/showdata', showStudents)
}

module.exports = Student;