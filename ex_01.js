function PromiseMe(text) {
    let pro = new Promise((resolve, reject) => {
       if(typeof text == "string") {
           resolve(text)
       }
       else {
           reject("Error")
       }
   })

   pro.then(result => {
       console.log("I promise to " + text)
   })
   
   pro.catch(result => {
       console.log("Error, veuillez mettre un texte")
   })
}

PromiseMe("fly to the moon")