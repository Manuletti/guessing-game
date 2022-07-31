<script setup>
import ScoreTableVue from '../components/ScoreTable.vue';
import { ref } from 'vue';

const serverUrl = 'http://localhost:3001/score'

//post request
var scoreObj = {}
const newname = ref('')
const newscore = ref('')

function addNewData(name, score) {
    scoreObj[name] = score
    console.log('New score Obj: ', scoreObj)
    sendUpdate(serverUrl, scoreObj)
}

function sendUpdate(url, newData){
    console.log('New Data:' ,newData)
    fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
}

</script>

<template>
    <div>
        <!-- <input type="text" v-model="newname">name add
        <input type="number" v-model="newscore">score
        <button @click="addNewData(newname, newscore)">Add</button> -->
        <ScoreTableVue :score="score" />
    </div>
</template>

