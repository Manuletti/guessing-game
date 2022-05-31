import { defineStore } from "pinia";

export const useGameStages = defineStore('GameStages', {
    state() {
        return {
            showGameSelect: undefined,
            userGuess: false,
            compGuess: false,
            competitive: false,
            userGuessStage: false,
            competitiveResults: false
        }
    },
    actions: {
        reset() {
            this.showGameSelect = undefined
            this.backToSelect()
        },
        startGame() {
            this.showGameSelect = true
        },
        quitGame() {
            this.showGameSelect = false
        }, 
        backToSelect() {
            this.userGuess = false
            this.compGuess = false
            this.competitive = false
            this.userGuessStage = false
            this.competitiveResults = false
        },
        gameSelect(select) {
            switch (select) {
                case 'user-guess':
                    this.userGuess = true;
                    break;
                case 'comp-guess':
                    this.compGuess = true;
                    break;
                case 'competitive':
                    this.competitive = true;
                    break;
            }
        }
    }
})

export const useGameStates = defineStore('GameStates', {
    state() {
        return {
            userAttempts: 0,
            compAttempts: 0,
            userWins: 0,
            compWins: 0,
            userAttemptsLimit: 5,
            compAttemptsLimit: 5,
            rangeMin: undefined,
            rangeMax: undefined,
        }
    },
    actions: {
        userAttemptsIncrement(val) {
            this.userAttempts = this.userAttempts + val
        },
        compAttemptsIncremet(val) {
            this.compAttempts = this.compAttempts + val
        },
        reset() {
            this.userAttempts = 0
            this.compAttempts = 0
            this.rangeMin = undefined
            this.rangeMax = undefined
        }
    }
})