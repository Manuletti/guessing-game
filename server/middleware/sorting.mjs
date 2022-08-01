export function sorting (input) {
    console.log('Data recieved: ', input)
    var sorted = Object.fromEntries(
        Object.entries(input).sort(([,a],[,b]) => b-a)
    );
    console.log('Sorted: ', input)
    return sorted
}

// const testObj = {
//     "Bojok": 1450,
//     "Igorek": 9000,
//     "Kysaka": 3020,
//     "Vika": 700,
//     "Igor": 5300,
//     "Mixa": 980, 
//     "Nastya": 20
// }

// sortScoreObj(testObj)