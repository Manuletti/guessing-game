<script setup>
import GameSelectVue from './GameSelect.vue';
import { useGameStages } from '../stores/GuessingStore';

const selectGame = useGameStages();
</script>

<template>
 <div id="welcome-page">  
    <p>Hello my dear human friend!</p>
    <p> Would you like to play a numbers game? </p>

    <div id="game-start" v-if="selectGame.showGameSelect === undefined">
        <input type="radio" class="display-btn" @click="selectGame.startGame">Yes!
        <input type="radio" class="display-btn" @click="selectGame.quitGame">No!
    </div>

    <div v-else-if="selectGame.showGameSelect === true">
        <p class="user-reply"> >>> Yes!</p>
        <p>On, nice!</p>
        <GameSelectVue />
    </div>

    <div v-else>
        <p class="user-reply"> >>> No!</p>
        <p>I am sorry to hear it, human. Come back later</p>
    </div>
</div>
</template>

<style>
.user-reply {
  color:cornsilk;
}
</style>