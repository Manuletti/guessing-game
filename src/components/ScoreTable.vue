<script setup>
import { defineProps} from 'vue';

defineProps({
    score: Object,
})


</script>

<template>
<body>
    <table>
        <thead>
            <tr>
                <td>Nickname</td>
                <td>Points</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, key) in score">
                <td>{{key}}</td>
                <td>{{value}}</td>
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
    margin-left: 2em;
    margin-right: 2em;
}
thead {
    color:  rgb(39, 50, 52);
    background-color: lime;
    font-size: 1.5em;
}

</style>