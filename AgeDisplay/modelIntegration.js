// Modules - they are encapsulated code that helps to organize codes into reusable pieces
// every file in node is a module (by default)
// commonJS module system - the default module system in Node.js


const individualAges = require('./ages')
const ageMessage = require('./utils')

ageMessage(individualAges.thirtyTwo);
//console.log(individualAges.fortyEight);

