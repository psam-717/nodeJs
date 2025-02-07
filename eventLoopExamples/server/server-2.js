const http = require('http')


const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text-plain"}) // 200 is the code for success
    res.end("Hello world")

})

server.listen(3000,() => {
    console.log("Sever is running on localhost:3000...")
})