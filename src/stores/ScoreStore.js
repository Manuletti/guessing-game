import { defineStore } from "pinia";

export var updatedScore = {}

export const useScoreStore = defineStore('useScoreStore', {
    state() {
        return {
            serverUrl: 'http://localhost:3001/score',
            currentScore: {}
        }
    }, 
    actions: {
        getScoreRequest() {
            fetch(this.serverUrl)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.currentScore = data
                    updatedScore = data
                        // console.group('Object props')
                        // console.log('Obj', updatedScore)
                        // console.log('Obj length ', Object.keys(updatedScore).length)
                    })
        }, 

        async postUpdatedScore(newData) {
            console.log('New Data:' ,newData)
            await fetch(this.serverUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            }).then(() => {
                setTimeout(() => {
                    this.getScoreRequest()
                }, 1000)
            })
        },

        addNewScore(name, score){
            updatedScore[name] = score
            this.postUpdatedScore(updatedScore)
        }
    }
}) 