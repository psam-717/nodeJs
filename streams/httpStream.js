var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
   
    const fileStream = fs.createReadStream('./content/bigFile-2.txt', 'utf8'); // the content of the bigFile.txt is loaded onto the server
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })

    fileStream.on('error', (err) => {
        res.end(err)
    })

}).listen(5000)