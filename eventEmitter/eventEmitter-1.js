const EventEmitter = require('events'); // EventEmitter is a class

const customEmitter = new EventEmitter(); // creating an object, instance, of the EventEmitter class

customEmitter.on('greeting', (name , gender) => {
    console.log(`Hello ${name}, you are a ${gender}`)
})
customEmitter.on('greeting', () => {
    console.log("You are welcome")
})

customEmitter.emit('greeting', "Marvin" , "male") // the string here should always match what is the is in the .on() method