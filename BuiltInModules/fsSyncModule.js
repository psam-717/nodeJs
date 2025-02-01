const {readFileSync, writeFileSync} = require('fs')

console.log('start')

const first = readFileSync('../content/first.txt', 'utf8') // utf8 encodes the text file to make it human readable
//console.log(first)

// this creates a new file called writeFileSync.txt  in the "content" directory
writeFileSync(
    '../content/writeFileSync.txt', 
    `This is the content of the the first text file: "${first}"`, 
    {flag: 'a'}
) 

console.log('Done with the task')
console.log('starting the next one ...')