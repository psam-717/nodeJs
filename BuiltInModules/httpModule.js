const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){ 
        res.end("Welcome to our home page")
    }
     else if (req.url === '/about'){
        res.end("This is out about page \nHere is our short history")
    } else {
        res.writeHead(404, {"content-type": 'text/html'});
        // the above sends an HTTP response headers to the client
        // syntax - res.writeHead(statusCode, [headers])
        res.end(
            `<h1>Sorry!</h1>
            <p>We cannot locate the page you are looking for</p>
            <a href="/"> Go back home</a>
            `
        )
    }
    
})
server.listen(5000, () => {
    console.log('Server is listening on 5000')
})