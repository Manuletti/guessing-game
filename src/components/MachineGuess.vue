//to do:
// 1) make a function to check cheating (too small limit or less\more beyond the range)

<template>
<section>
    <p v-if="!stage.competitive">Okey, human, rules are simple. You'll give me a range of numbers and make up a number within this range. Keep that number in your human mind!</p>
    <p>What is the range?</p>
    <div id="range" v-if="!hideRangeInput">
        From <input type="number" min="1" max="10000" v-model="attempts.rangeMin"> 
        to <input type="number" min="1" max="10000" v-model="attempts.rangeMax">
        <button @click="rangeToLocal()">Submit</button>
        <p>{{ rangeError }}</p>
    </div>
    <div v-else>
        <p class="user-reply"> >>> From {{ min }} to {{ max }}</p>
        <p>Okey. Now I am going to guess, and you will tell me, wheather I am correct or the number should be smaller or bigger</p>
        <div v-if="!ready">
            Have you made up a number? <button @click="ready = !ready">Yes!</button>
        </div>
        <div v-if="ready" v-for="item in guessArr">
            <p>My guess is {{ item }}</p>

            <div class="game-inputs" v-if="!computerWon">
                <div id="less">
                    <label for="less">Less</label>
                    <input type="radio" name="less" @click="limitRange('less')">
                </div>
                <div id="correct">
                    <label for="that's it">That's it!</label>
                    <input type="radio" name="that's it" @click="gameScoreCheck('correct')">
                </div>
                <div id="more">
                    <label for="more">More</label>
                    <input type="radio" name="more" @click="limitRange('more')">
                </div>

            </div>
        
            <p v-if="computerLost && !stage.competitive">Oh, human! I've lost, I spent more then 5 attempts!</p>

        </div>
        <div id="machine-game-results" v-if="!stage.competitive">
            <p class="user-reply"> >>> That's it!</p>
            <div class="game-win" v-if="computerWon && !computerLost">
                <p>Ha-ha, human! I beat you!</p>
                <button @click="tryAgain()">Select game</button>
            </div>

            <div class="game-lost" v-if="computerWon && computerLost">
                <p>Finally! Nice game, human</p>
                <button @click="tryAgain()">Select game</button>
            </div>
        </div>
        <div id="competitive-result" v-else-if="stage.competitive && computerWon">
            <p class="user-reply"> >>> That's it!</p>
            <p>Finally! I guessed in {{attempts.compAttempts}} attempts!
                Now let's see how fast can you guess my number!</p>
            <button @click="stage.userGuessStage = !userGuessStage">Continue</button>
        </div>
    </div>
</section>
</template>

<script setup>
import { ref } from "vue";
import { useGameStates, useGameStages } from "../stores/GuessingStore";
const attempts = useGameStates()
const stage = useGameStages()
    
const min = ref()
const max = ref()
const hideRangeInput = ref(false)
const rangeError = ref()
const computerWon = ref(false)
const computerLost = ref(false)
const ready = ref(false)

function rangeToLocal() {
    min.value = attempts.rangeMin
    max.value = attempts.rangeMax
    rangeCheck()
}

function rangeCheck() {
    if (min.value >= max.value) {
        return rangeError.value = "That's incorrect, human! The first number should be less than the last one!"
    } else if (min.value === undefined || max.value === undefined) {
        return rangeError.value = 'Human, you should input both numbers to start the game'
    } else if (min.value < 0 || max.value < 0) {
        return rangeError.value = 'Human, the numbers shoud be positive'
    } else {
        guessing()
        return hideRangeInput.value = true
    }
}

const guessArr = ref([])

function guessing() {
    gameScoreCheck()
    attempts.compAttemptsIncremet(1)
    //I intentionally did not use binary search algoritm to make 'guessing' more like guessing
    let guess = Math.round((Math.random() * (max.value - min.value)) + min.value)
    guessArr.value.push(guess)
}

function limitRange(userInput) {
    console.log('user input' + userInput)
    userInput === 'less' ? max.value = guessArr.value[guessArr.value.length - 1] - 1 : min.value = guessArr.value[guessArr.value.length - 1] + 1
    console.log('Min:' + min.value)
    console.log('Max:' + max.value)
    guessing()
}

//rewrite this
function gameScoreCheck(input) {
    if (attempts.compAttempts <= attempts.compAttemptsLimit && input === 'correct') {
        if (!stage.competitive) {
            attempts.compWins += 1
        }
        return computerWon.value = true
    } else if (input === 'correct') {
        return computerWon.value = true
    } else if (attempts.compAttempts > attempts.compAttemptsLimit) {
        return computerLost.value = true
    } else {
        return
    }
}

function tryAgain() {
    attempts.compAttemptsLimit += 5
    stage.backToSelect()
}
</script>

<style scoped>
input {
    background-color: rgb(85, 78, 78);
    color: cornsilk;
    border-color: lime;
    width: 50px;
    height: 15px;
    text-align: center;
    -moz-appearance: textfield;
}

button {
    background-color: rgb(85, 78, 78);
    color: lime;
    border-color: lime;
    border-radius: 2px;
    height: fit-content;
}
#range {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
.game-inputs {
    display: flex;
    gap: 5%;
}
#less, #more, #correct {
    display: flex;
    flex-direction: column;
    text-align: center;
}
.user-reply {
  color:cornsilk;
}
</style>