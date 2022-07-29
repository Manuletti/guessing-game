<script setup>
import ScoreTableVue from '../components/ScoreTable.vue';
import { ref } from 'vue';

const serverUrl = 'http://localhost:3001/'

//get request
var score = ref({'before': 'fetch'})
fetch(serverUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        scoreObj = data
        score.value = data
        console.log('Simple Obj ', scoreObj)
        })

//post request
var scoreObj = {}
const newname = ref('')
const newscore = ref('')

function addNewData(name, score) {
    scoreObj[name] = score
    console.log(scoreObj)
    sendUpdate(serverUrl, scoreObj)
}
//not working, the request doesn't go to the server
//probably i should use XML request
function sendUpdate(url, newData){
    console('Data:' ,newData)
    fetch(url, {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        body: newData
    })
}

</script>

<template>
    <div>
        <input type="text" v-model="newname">name add
        <input type="number" v-model="newscore">score
        <button @click="addNewData(newname, newscore)">Add</button>
        <ScoreTableVue :score="score" />
    </div>
</template>

