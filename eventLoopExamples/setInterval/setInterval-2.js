let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log(`interval count: ${count}`)

    if (count === 5){
        clearInterval(intervalId);
        console.log("Interval stopped")
    }
},1000)

console.log("Interval has started")