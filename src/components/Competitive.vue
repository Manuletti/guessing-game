<template>
<section>
    <p>Oh, you want to compete!</p>
    <p>Okey, the rules are simple:
        you, human, will give me a range of numbers and make up a number
        within this range for me to guess. After that I will make up a number
        within the same range for you to guess. The one who needs less attempts to
        guess will be a winner. 
    </p>
    <p>Are you ready?</p>
    <button id="ready-btn" v-if="!ready" @click="ready = true">Ready!</button>
    <div v-else>
        <p class="user-reply"> >>> Ready! </p>
        <MachineGuess />
        <section id="stage-two" v-if="stage.userGuessStage">
            <p class="user-reply"> >>> Continue</p>
            <UserGuess />
        </section>
        <section id="results" v-if="stage.competitiveResults">
            <p>It is time to name a winner.</p>
            <p>I guessed your number in {{attempts.compAttempts}} attempts and you guessed my number in {{attempts.userAttempts}} attempts.</p>
            <p>{{winner}}</p>
            <button @click="stage.backToSelect">One more game</button>
        </section>
    </div>
</section>
</template>

<script setup>
import { ref, computed } from 'vue';
import MachineGuess from './MachineGuess.vue';
import UserGuess from './UserGuess.vue';
import { useGameStages, useGameStates } from '../stores/GuessingStore';

const ready = ref(false)
const stage = useGameStages()
const attempts = useGameStates()

const winner = computed(() => {
    if (attempts.compAttempts < attempts.userAttempts) {
        attempts.compPoints = (attempts.userAttempts - attempts.compAttempts) * 100
        return 'The winner is ... me! Ha-ha! But it was a good contest for your meat brain, human!'
    } else if (attempts.compAttempts > attempts.userAttempts) {
        attempts.userPoints = (attempts.compAttempts - attempts.userAttempts) * 100
        return 'You have won, human... I should remake my algoritms to beat you next time.'
    } else {
        return 'We are equal! Finally, a worthy opponent!'
    }
})
</script>

<style scoped>
button {
    background-color: rgb(85, 78, 78);
    color: lime;
    border-color: lime;
    border-radius: 2px;
    height: fit-content;
}
.user-reply {
  color:cornsilk;
}
</style>