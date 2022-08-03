<script setup>
// import { defineProps} from 'vue';

// defineProps({
//     score: Object,
// })

import { useScoreStore } from '../stores/ScoreStore';

const score = useScoreStore()

</script>

<template>
<body>
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Points</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, key) in score.currentScore">
                <td id="name">{{key}}</td>
                <td id="score">{{value}}</td>
            </tr>
        </tbody>
    </table>
</body>
</template>

<style scoped>
body {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin-left: 3em;
    margin-right: 3em;
    text-align: center;
    border: 0.5px;
    border-style: solid;
}
thead {
    color:  rgb(39, 50, 52);
    background-color: lime;
    /* font-size: 1.1em; */
}

@media (max-width: 570px) {
    body {
        margin-left: 0.5em;
        margin-right: 0.5em;
    }
}
</style>