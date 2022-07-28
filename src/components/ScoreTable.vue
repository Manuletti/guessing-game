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
        console.log('the data was wrritten', data);
    });

function getScoreT() {
    return mess = score
}

</script>

<template>
    <h1>
       Score table
       {{mess}}
       <Button @click="getScoreT()">Push</Button>
    </h1>
</template>