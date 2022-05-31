// Features to add: 
// 1) check if user input a number out of range

<template>
    <section>
        <p v-if="!stage.competitive">Okay! I'll make up a number between 1 and 20, and you should guess it in 5 attempts or less, human</p>
        <p v-else>Now I'll make a number between {{state.rangeMin}} and {{state.rangeMax}}.</p>
    <!--This p below would render after the first answer-->
        <div v-for="item in results">
            <p class="user-reply"> >>> {{ item }}</p>
            <p>{{ item > secretNumber ? 'Too big' : 'Too little'}}</p>
    <!-- <p>{{ item > secretNumber ? tooMuchReplies[Math.round(Math.random() * 5)] : tooLittleReplies[Math.round(Math.random() * 5)]}}</p> -->
        </div>
        <div v-if="userWon === undefined">
            <p>What's your guess?</p>
            <div class="gameControls">
                <input type="number" v-model="userGuess" @keyup.enter="resultCheck()">
                <button @click="resultCheck()">Submit</button>
            </div>
        </div>
        <div v-else-if="userWon === false">
            <p>Sorry, you lost. The answer was {{ secretNumber }}.</p>
            <button @click="tryAgain()">Select game</button>
        </div>
        <div v-else>
            <p class="user-reply"> >>> {{ userGuess }}</p>
            <p>Damn, you won, human. Nice game.</p>
            <button v-if="!stage.competitive" @click="tryAgain()">Select game</button>
            <button v-else @click="stage.competitiveResults = true">Check the results</button>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useGameStates, useGameStages } from '../stores/GuessingStore';
const state = useGameStates()
const stage = useGameStages()

const secretNumber = ref(Math.round(Math.random() *20))

const userGuess = ref()
const results = ref([])
const userWon = ref()

function resultCheck() {
//this function should be rewritten 
    state.userAttemptsIncrement(1)
    
    if (state.userAttempts >= state.userAttemptsLimit && !stage.competitive) {
        state.compWins += 1
        userWon.value = false
    } else if (userGuess.value === secretNumber.value) {
        if (!stage.competitive) {
            state.userWins += 1
        } 
        userWon.value = true
    } else {
        results.value.push(userGuess.value)
    }
}
function tryAgain() {
    state.userAttemptsLimit += 5
    stage.backToSelect()
}

onMounted(() => {
    if (stage.competitive) {
        secretNumber.value = Math.round(Math.random (state.rangeMax - state.rangeMin) + state.rangeMin)
    } 
})
/*

const tooLittleReplies = ref([
    'Ha-ha, human, it is too little',
    'No, that is not enough',
    'A little bit more, human!',
    'Nope, too little!',
    'Such a little number, human! My is much bigger'
])

const tooMuchReplies = ref([
    'It is too much, human',
    'Ha-ha-ha, human! Your number is too big!',
    'No, it is too much!',
    'Ha, my number is less than you thought, human!',
    'Too big!'
])

*/

</script>

<style scoped>
button {
    background-color: rgb(85, 78, 78);
    color: lime;
    border-color: lime;
    border-radius: 2px;
}
input {
    background-color: rgb(85, 78, 78);
    color: cornsilk;
    border-color: lime;
    width: 50px;
    text-align: center;
    -moz-appearance: textfield;
}
.gameControls {
    display: flex;
    gap: 0.5rem;
}
.user-reply {
  color:cornsilk;
}
</style>
