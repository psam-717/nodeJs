const {writeFileSync} = require('fs')

for(i = 0; i < 1000; i ++){
    writeFileSync('../content/bigFile-1.txt', `Message: ${i} \n`, {flag: 'a'})
}