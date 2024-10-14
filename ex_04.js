function  initializeMachine(machineName, timeRequired) {
    time = timeRequired * 1000
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(machineName + " initialized")
    }, time)
  })
}

initializeMachine("Compteur", 3)
    .then(value => {console.log(value)})