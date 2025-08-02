const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url == "/about"){
        res.end("The about page ")
    }

    if(req.url == "/contact"){
        res.end("The Contact page ")
    }

    if(req.url == "/"){
        res.end("The Home page ")
    }
})



server.listen(3000)