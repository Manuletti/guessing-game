<script setup>
import ScoreTableVue from '../components/ScoreTable.vue';
import { ref } from 'vue';


var score = ref({'before': 'fetch'})
fetch('http://localhost:3001/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        score.value = data
        })

</script>

<template>
    <div>
        <ScoreTableVue :score="score" />
    </div>
</template>