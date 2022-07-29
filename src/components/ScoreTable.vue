<script setup>
import { ref, onBeforeMount } from 'vue';



var score = ref('')
var mess = ref({
    "Bojok": 5000,
    "Igorek": 4000
})

fetch('http://localhost:3001/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        score = data
        console.group('Results:')
        console.log('the data was wrritten: ', data);
        console.log('The variable: ', score)
    });

console.log('Sync log of score: ', score)

</script>

<template>
    <h1>
       Score table
       {{score}}
    </h1>
</template>