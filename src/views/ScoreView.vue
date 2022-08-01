<script setup>
import ScoreTableVue from '../components/ScoreTable.vue';
import { useGameStages } from '../stores/GuessingStore';

const stage = useGameStages()

stage.backToSelect()
</script>

<template>
    <div>
        <ScoreTableVue :score="score" />
    </div>
</template>

