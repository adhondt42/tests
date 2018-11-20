let express = require('express')
let app = express()
let http = require('http')

let server = http.createServer()

server.on('request', (request, response) => {
    console.log("Il y a eu une requete")
    response.writeHeader(200)
    response.end('Salut, cava ?')
})

server.listen(8080)
console.log("oki")
// app.set('view engine', 'ejs')
// app.use(express.static('public'))
// app.get('/', (req, res) =>{
//     res.render('pages/index', {test: "testito"})
// })


// app.listen(8080)  