import express from 'express'
import { score } from './score/scoreReader.mjs'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(score)
})

app.listen(3001, () => {
    console.log('the server is running on port 3001')
})