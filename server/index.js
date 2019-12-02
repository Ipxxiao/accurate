const http = require('http')
const fs = require('fs')
const path = require('path')

const hostname = 'localhost'
const port = 8080

const rootPublic = process.cwd()

const { DEPLOY_ENV, NODE_ENV, GATEWAY, STATIC_PREFIX, PORT } = process.env

const server = http.createServer((req, res) => {
    res.statusCode = 200
    if (req.url == '/favicon.ico') {
        //empty image stream
        res.setHeader('Content-Length', 0)
        res.setHeader('Content-Type', 'image/x-icon')
        res.end('')
    } else if (req.url === '/health') {
        // health check
        let data = {
            DEPLOY_ENV,
            NODE_ENV,
            STATIC_PREFIX,
            GATEWAY,
            __env_list__: 'test / pre / prd'
        }
        res.end(JSON.stringify(data))
    } else if (req.url.indexOf('/demo') > -1) {
        // browser dir
        let data = fs.readFileSync(path.join(rootPublic, 'demo', 'index.html'))
        res.end(data)
    } else if (req.url.indexOf('/libs') > -1) {
        let data = fs.readFileSync(path.join(rootPublic, req.url))
        res.end(data)
    } else {
        res.end('Hello World\n')
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})