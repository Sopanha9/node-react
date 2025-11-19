let person = {
    name : "Alice",
    age : 30,
    city : "New York"
}

const print = () => {
    return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`;
}
// if one
module.exports = {person, print};
// if more than one
// export {person};