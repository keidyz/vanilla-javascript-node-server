const http = require('http')
const port = 5001

http.createServer(({url}, res) => {
    console.log('received request from', url)
    if(url === '/status') {
        res.write("ok")
        res.end()
        return
    }
    res.write("unknown route")
    res.end()
}).listen(port, () => {
    console.log(`listen to port ${port}`)
})