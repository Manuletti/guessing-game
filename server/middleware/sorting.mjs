export function sorting(input) {
    var sorted = Object.fromEntries(
        Object.entries(input).sort(([,a],[,b]) => b-a)
    );
    limitScoreTable(sorted)
    console.log('Result ',sorted)
    return sorted
}

function limitScoreTable(sortedTable) {
    if (Object.keys(sortedTable).length > 7) {
        delete sortedTable[Object.keys(sortedTable)[7]]
    }
    return sortedTable
}

// const testObj = {
//     "Bojok": 1450,
//     "Igorek": 9000,
//     "Kysaka": 3020,
//     "Vika": 700,
//     "Igor": 5300,
//     "Mixa": 980, 
//     "Nastya": 20,
//     "Deleted": 150
// }

// sorting(testObj)