<script setup>
import { defineProps} from 'vue';

defineProps({
    score: Object,
})


</script>

<template>
    <h1>Scores!</h1>
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
</template>

<style scoped>
thead {
 color:  rgb(39, 50, 52);
 background-color: lime;
 font-size: 1.5em;
}
</style>