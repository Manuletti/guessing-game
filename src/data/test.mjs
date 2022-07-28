import fs from 'fs';

function readScore() {
    fs.readFile('./src/data/score.txt', 'utf8', (err, data) => {
        console.log(data)
    })
}

export { readScore }