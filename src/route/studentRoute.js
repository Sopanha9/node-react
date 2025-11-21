const {students} = require('../data');
const {getStudents, createStudent, showStudents, updateStudent, sort} = require('../controller/studentController.js');


const Student = (app) => {
  app.get('api/students', getStudents);
  app.get('/api/create', createStudent);
  app.get('/api/showdata', showStudents)
  app.get('/api/update', updateStudent)
  app.get('/api/sort', sort);
}



module.exports = Student;