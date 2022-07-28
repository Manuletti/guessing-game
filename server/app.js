import express from 'express'
import { score } from './score/scoreReader.mjs'

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

const app = express()
app.use(express.json())
app.use(allowCrossDomain)

app.get('/', (req, res) => {
    res.send(score)
})

app.listen(3001, () => {
    console.log('the server is running on port 3001')
})