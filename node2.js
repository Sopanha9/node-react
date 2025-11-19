// var obj = {

//     name: "Node.js",
//     gender: "JavaScript Runtime",
//     dob: "2009-05-27"
// }

// var {name, gender, dob} = obj; // destructuring assignment

// console.log(name, gender, dob);  


// classs and object in js

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// var p1 = new Person("Node.js", 15);
// console.log(p1);

// import person from './index.js';

var {person, print} = require('./index.js');


console.table(person);
// console.log(print());

