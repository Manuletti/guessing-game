<script setup>
import ScoreTableVue from '../components/ScoreTable.vue';
import { readScore } from '../data/test.mjs'

</script>

<template>
    <div>
        <ScoreTableVue />
        <button @click="readScore()">Read</button>
    </div>
</template>