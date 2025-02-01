const os = require('os') // 'os' is a built-in module in Node.js that provides operating system-related utility methods and properties

const user = os.userInfo()


console.log(user) // provides information about the current user
console.log(` the system has been up for ${os.uptime()} seconds`) // how long the system has been up in seconds


const osInfo = {
    name : os.type(),
    totalMem: os.totalmem(), // total memory in bytes
    freeMem: os.freemem(),
    
}

console.log(osInfo)