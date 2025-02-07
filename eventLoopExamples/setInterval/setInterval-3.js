function welcome(name) {
    console.log("Welcome ", name)
}

const intervalId = setInterval(welcome,1000,"psam")

setTimeout(() => {
    clearInterval(intervalId)
    console.log("Done")
}, 5000)

console.log("Let's set the ball rolling")