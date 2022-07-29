import fs from "fs/promises";

var score = ''

function getScore() {
    fs.readFile("./server/score/score.json", (err, data) => {
        if (err) throw err
        return data
    }).then((data) => {
        score = JSON.parse(data)
    })
}
getScore()

function writeScore(input) {
    const newData = JSON.stringify(input)
    fs.writeFile("./server/score/score.json", newData)
}

export { score, writeScore }