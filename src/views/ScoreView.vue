<script setup>
import ScoreTableVue from '../components/ScoreTable.vue';
import { ref, onMounted, nextTick } from 'vue';


var score = ref({'before': 'fetch'})
async function getData () {
    fetch('http://localhost:3001/')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            score.value = data
            console.group('Results:')
            console.log('the data was wrritten: ', data);
            console.log('The variable: ', score)
        });
}

getData()
console.log('Sync log of score: ', score.value)

</script>

<template>
    <div>
        <ScoreTableVue :score='score' />
    </div>
</template>