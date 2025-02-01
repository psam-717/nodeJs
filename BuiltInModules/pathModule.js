const path = require('path')

console.log(path.sep) // shows the separator used in the current OS i.e. '\' for Windows and '/' for Unix-based systems

console.log(path.join('D:', 'projects','tutorials', 'final')) // output - d:\projects\tutorials\final

const baseDirec = path.basename('D:/projects/tutorials/final') // returns the last directory or file in the path
console.log(baseDirec) // output - final


const absolutePath = path.resolve(__dirname, 'app.js') // returns the absolute path of the file
console.log(absolutePath) // output - D:\projects\tutorials\app.js

const filePath = 'D:/projects/tutorials/final/app.js'
const filePathDetails = path.parse(filePath)// returns an object with the properties of the file path
console.log(filePathDetails)

const updatedFilePath = path.join("D:","Projects","Tutorials", "Course", "index.js") // returns a path that is in the order of the arguments passed
console.log(updatedFilePath) // output- D:\Projects\Tutorials\Course\index.js