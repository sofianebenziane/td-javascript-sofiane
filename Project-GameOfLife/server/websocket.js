const WebSocket = require('ws')
const Game = require('./game_modules/game')
//
const defaultSpeed = 100
let game = null
console.log('WebSocket Server :: listening on port 8080')
const wss = new WebSocket.Server({
    host: '127.0.0.1',
    port: 8080
})

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

wss.on('connection', (ws) => {
    console.log('WSS :: Client connected')
    ws.on('message', (message) => {
        const type = message.slice(0, 4)
        console.log(`WSS : Client sent a ${type} message`)
        switch (type) {
        case 'INIT':
            ws.send(JSON.stringify(init(message.slice(4))))
            break
        case 'NEXT':
            ws.send(JSON.stringify(next()))
            break
        }
    })
})
