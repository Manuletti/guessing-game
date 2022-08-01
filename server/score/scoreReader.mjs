import fs from "fs/promises";
import scoreJSON from "./score.json" assert {type: "json"}

var score = scoreJSON

function writeScore(input) {
    const newData = JSON.stringify(input)
    fs.writeFile("./server/score/score.json", newData)
}

export { score, writeScore }