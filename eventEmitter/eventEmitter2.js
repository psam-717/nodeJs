const EventEmitter = require('events')

const customEmitter = new EventEmitter();


customEmitter.on('greeting', (person) => {
    console.log(`Welcome ${person.name}, you are a ${person.gender}`)
})

customEmitter.on('greeting', (person) => {
    console.log(`This is ${person.location}`)
})

customEmitter.emit('greeting', {name: 'Marvin', gender: 'Male', location: 'Silicon Valley'})