
const intervalId = setInterval(() => {
    console.log("Hello world") // this runs every second
}, 1000)

setTimeout(() => {
    clearInterval(intervalId)
    console.log("Interval has ended") // this ends after 6s
}, 6000);

console.log("Begin the interval count")
