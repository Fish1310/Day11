function checkFuel(number) {
    let a = new Promise((resolve, reject) => {
        if(typeof(number) == "number") {
            if (number >= 9){
                resolve(console.log("Ready to launch"))
            } else {
                reject(console.log("Please refill fuel"))
            }
        }
    })
}

checkFuel(11)