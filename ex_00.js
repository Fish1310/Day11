let a = new Promise((resolve, reject) => {
    resolve("Hello World")
});

a.then(result => {
    console.log(result)
});
