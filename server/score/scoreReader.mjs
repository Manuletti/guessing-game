import fs from "fs/promises";

var score = ''

function getScore() {
    fs.readFile("./server/score/score.json", (err, data) => {
        if (err) throw err
        return data
    }).then((data) => {
        score = JSON.parse(data)
        console.log(score, 'Data was written')
    })
}
getScore()
export { score, getScore }