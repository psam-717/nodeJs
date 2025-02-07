const {readFile} = require('fs');

console.log('Started first task')

readFile('../content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }else{
        console.log(result)
        console.log("completed first task")
    }
})

console.log("moving to the next task")