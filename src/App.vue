<script setup>
import { ref } from 'vue';
import { useGameStates, useGameStages } from './stores/GuessingStore';
import { useScoreStore } from './stores/ScoreStore';
import { RouterLink, RouterView } from 'vue-router'

const score = useScoreStore()
score.getScoreRequest()

const selectGame = useGameStages();
const attempts = useGameStates();

function reset() {
  selectGame.reset()
  attempts.reset()
}

const isGamePage = ref(true)

</script>

<template>
<main>

  <div class="computer-body">
    <div class="config-left">
      <nav class="root-switcher">
        <router-link class="switcher" to='/' @click="isGamePage = true"></router-link>
        <label class="switcher-label" :class="{on: isGamePage}" for="switcher">Game</label>
        <router-link class="switcher" to="/score" @click="isGamePage = false"></router-link>
        <label class="switcher-label" :class="{on: !isGamePage}" for="switcher">Score</label>
      </nav>
      <h3 id="reset-label">Reset</h3>
      <button id="reset-btn" @click="reset()"></button>
    </div>
    <div class="display">
      <section class="game">
       <router-view></router-view>
      </section>
    </div>
    <div class="config-right">
      <p class="config-labels">Human attempts</p>
      <div class="attempts" id="user-attempts">{{ attempts.userAttempts }}</div>
      <br>
      <p class="config-labels">Machine attempts</p>
      <div class="attempts" id="comp-attempts">{{ attempts.compAttempts }}</div>
      <p class="score-label">Game points</p>
      <div class="score-display">{{ attempts.userPoints - attempts.compPoints }}</div>
    </div>
  </div>
</main>
</template>

<style scoped>
main {
  display: flex;
  
}
.computer-body {
  background-color: rgb(39, 50, 52);
  display: flex;
  flex-wrap: wrap;
  padding: 2%;
  margin: auto;
  border-radius: 10px;
  justify-items: center;
}
.config-left {
  width: 90px;
  order: 1;
}
#reset-label {
  position: relative;
  top: 35%;
  text-align: center;
  color: rgb(218, 218, 22);
}
#reset-btn {
  position: relative;
  top: 30%;
  width: 70px;
  height: 40px;
  background: repeating-linear-gradient(
    145deg,
        rgb(218, 218, 22) 0px,
        rgb(218, 218, 22) 5px,
        black 6px,
        black 15px
      );
  margin-left:10px;
  margin-right: 10px;
}
.config-right {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 150px;
  order: 3;
}
.attempts {
  width: 40px;
  height: 40px;
  background-color: rgb(85, 78, 78);
  box-shadow: inset -0.5em 0.3em 1em rgb(47, 45, 45);
  border-radius: 10px;
  border: 2px;
  border-style: solid;
  border-color: rgb(27, 28, 28);
  color:lime;
  text-align: center;
  line-height: 40px;
  margin: auto;
}
.config-labels {
  width: 70px;
  height: 40px;
  margin: auto;
  color: rgb(218, 218, 22);
}
.score-display {
  width: 80px;
  height: 40px;
  background-color: rgb(85, 78, 78);
  box-shadow: inset -0.5em 0.3em 1em rgb(47, 45, 45);
  border-radius: 10px;
  border: 2px;
  border-style: solid;
  border-color: rgb(27, 28, 28);
  color:lime;
  text-align: center;
  line-height: 40px;
  margin: auto;
}
.score-label {
  position: relative;
  top: 15px;
  margin: auto;
  color: rgb(218, 218, 22);
  text-align: center;
}
.display {
    background-color: rgb(27, 28, 28);
    padding-top:30px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
    border-radius: 10px;
    order: 2;
  }
.game {
  background-color: rgb(85, 78, 78);
  box-shadow: inset -2em 0.8em 1em rgb(47, 45, 45);
  border-radius: 25px;
  color:lime;
  width: 400px;
  height: 200px;

  overflow: auto;
  scrollbar-width: thin;
  
  display: flex;
  flex-direction: column-reverse;

  padding: 15px;
  margin: auto;

}

.user-reply {
  color:cornsilk;
}

.root-switcher {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-top: 15%;
}

.switcher {
  background-color: rgba(255, 0, 0, 0.726);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-style: solid;
  border: 2px;
  border-color: black;
}

.on {
  color: rgb(218, 218, 22);
  text-shadow:
    0 0 7px rgb(218, 218, 22),
    0 0 21px rgb(218, 218, 22),
    0 0 102px #0fa,
    0 0 151px #0fa;
}

@media (max-width: 570px) {
  .computer-body {
    height: fit-content;
  }
  #reset-btn, #reset-label {
    position: static;
    margin-bottom: 10%;
  }
  .display {
    order: 1;
    padding-top:20px;
    padding-left: 2px;
    padding-right: 2px;
    padding-bottom: 5px;
    border-radius: 15px;
  }
  .config-left {
    align-items: center;
    order: 2;
    margin: auto;
  }
  .config-right {
    order: 3;
    margin: auto;
  }
  .game {
    height: 300px;
    width: 80%;
    border: 1px;
  }
  .score-label {
    position: relative;
    top: 0px;
    margin: auto;
    color: rgb(218, 218, 22);
}
}
</style>
