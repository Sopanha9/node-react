const express = require('express');
const app  = express(); // Create an Express application
const port = 3000; // Define the port number
const {students} = require('./src/data');

app.get('/', (req, res) => {
    res.send('Hell nah!')
})

app.get('/testing', (req, res) => {
    // res.send('Hell na fcking testing ahh')
    res.send(students);
})


app.get('/api/stu/list', (req, res)=> {
    const student = {
        name: "Panha",
        age: 19,
        address: "Siemreap",
    }
    res.send(student);
});



app.listen(port, function(){
    console.log(`Port is running ${port}`)
})