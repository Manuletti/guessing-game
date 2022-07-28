import express from 'express'
import { getScore } from './score/scoreReader.mjs'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(3001, () => {
    console.log('the server is running on port 3001')
})