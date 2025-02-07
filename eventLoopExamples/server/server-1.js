const http = require('http')

// creating the server
const server = http.createServer((req, res) => {
    console.log ("request event")
    res.end('Hello World')
})

server.listen(5000, () => {
    console.log("Server is loading on port 5000...")
})
