<template>
<section class="game-select-page">
    <p>What game do you want to play? Do you want to guess or me to guess?</p>
    <div id="game-start" v-if="gameSelect.userGuess === false && gameSelect.compGuess === false && gameSelect.competitive === false">
        <input type="radio" class="display-btn" @click="gameSelect.gameSelect('user-guess')">I'll guess
        <input type="radio" class="display-btn" @click="gameSelect.gameSelect('comp-guess')">You'll guess
        <input type="radio" class="display-btn" @click="startCompetitiveGame()">Competitive game
    </div>

    <div v-else-if="gameSelect.userGuess === true">
        <p class="user-reply"> >>> I want to guess</p>
        <UserGuess />
    </div>

    <div v-else-if="gameSelect.compGuess === true">
        <p class="user-reply"> >>> You guess</p>
        <MachineGuess />
    </div>

    <div v-else-if="gameSelect.competitive === true">
        <p class="user-reply"> >>> Competitive game</p>
        <Competitive />
    </div>
</section>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import { useGameStages, useGameStates } from "../stores/GuessingStore";
import UserGuess from "./UserGuess.vue"
import MachineGuess from "./MachineGuess.vue"
import Competitive from "./Competitive.vue"

const gameSelect = useGameStages()
const attempts = useGameStates()

function startCompetitiveGame() {
    console.log(gameSelect.competitive)
    attempts.reset()
    gameSelect.gameSelect('competitive')
}

</script>

<style>
.user-reply {
  color:cornsilk;
}
</style>