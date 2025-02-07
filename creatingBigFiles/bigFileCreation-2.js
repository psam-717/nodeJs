const {writeFileSync} = require('fs');

for(i = 0; i < 10000; i++){
    writeFileSync('../content/bigFile-2.txt',`This is a new message ${i} \n`, {flag: 'a'})
}

console.log('File created')