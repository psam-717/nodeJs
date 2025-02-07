console.log("Welcome")

const timer = setTimeout(() => {
    console.log("Within the timeout")
}, 2000)

console.log("The end")
clearTimeout(timer)
