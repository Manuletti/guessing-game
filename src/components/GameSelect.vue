<template>
<section class="game-select-page">
    <p>We are going to play for scores!</p>
    <div id="game-start" v-if="gameSelect.userGuess === false && gameSelect.compGuess === false && gameSelect.competitive === false">
        <input type="radio" class="display-btn" @click="startCompetitiveGame()">Let's start
        <!-- I decided to hide this game types from new release -->
        <!-- <br>
        <input type="radio" class="display-btn" @click="gameSelect.gameSelect('user-guess')">I'll guess
        <input type="radio" class="display-btn" @click="gameSelect.gameSelect('comp-guess')">You'll guess -->
    </div>

    <!-- <div v-else-if="gameSelect.userGuess === true">
        <p class="user-reply"> >>> I want to guess</p>
        <UserGuess />
    </div>

    <div v-else-if="gameSelect.compGuess === true">
        <p class="user-reply"> >>> You guess</p>
        <MachineGuess />
    </div> -->

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