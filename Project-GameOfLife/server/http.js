const express = require('express')
const bodyParser = require('body-parser')
const Game = require('./game_modules/game')
//
const app = express()
let game = null

function init (seed) {
    const height = seed.split('\n').length
    const width = seed.split('\n')[0].length
    game = new Game(seed, width, height)
    game.init(seed)
    return game.grid
}

function next () {
    if (game !== null) {
        game.next()
        return game.grid
    }
    return {error: 'You must init your game first'}
}

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(bodyParser.json())

app.post('/init', (request, response) => {
    console.log(request.body)
    response.send(init(request.body['seed']))
})

app.get('/next', (request, response) => {
    response.send(next())
})

app.listen(3000, () => console.log('Game of Life Server :: Listening on port 3000!'))
