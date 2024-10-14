function checkStatus(promise) {
    promise
      .then(console.log)
      .catch((error) => console.error(error))
  }
  
  function promiseMe(message) {
    return new Promise((resolve) => {
      const value =  "I promise you to " + message
      resolve(value)
    })
  }
  
  checkStatus(promiseMe('fly to the moon'))