// using the async readFile and writeFile methods
const {readFile, writeFile} = require('fs')

console.log('Start')
readFile('../content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result;

    readFile('../content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result

        writeFile(
            '../content/writeFileAsync.txt', 
            `Here is the result of the two text files: \n"${first}," and "${second}" `,
            (err, result) =>{
                if(err){
                    console.log(err)
                    return
                }
                console.log("done with this task")
            }
        
        )
    })
})
console.log('starting the next task...')