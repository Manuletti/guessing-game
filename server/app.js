import express from 'express'
import { score, writeScore } from './score/scoreReader.mjs'



const app = express()
app.use(express.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/score', (req, res) => {
    console.log('The data was sent from the server: ', score)
    res.send(score)
})

app.post('/score', (req, res) => {
    console.log('Req body: ', req.body)
    writeScore(req.body)
    res.send('Score table has been updated')
})

app.listen(3001, () => {
    console.log('the server is running on port 3001')
})

var updatedScore = {
    "Vika":3000,
    "Igor":1783,
    "Igorek":4000,
    "Bojok":"оцень многа",
    "Kotya": 17
}
