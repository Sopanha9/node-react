const express = require('express');
const app  = express(); // Create an Express application
const port = 3000; // Define the port number
// const students = require('./src/data');
const studentRoute= require('./src/route/studentRoute');

// call route
studentRoute(app);

//running port
app.listen(port, function(){
    console.log(`Port is running ${port}`)
})