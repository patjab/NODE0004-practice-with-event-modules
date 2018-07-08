const Dog = require('./dog')
const Cat = require('./cat')

const myPetDog = new Dog()
const myPetCat = new Cat()

myPetDog.on('dogHungry', (e) => {
  if ( e.hungry === true ) { console.log("Feed me") }
  else { console.log("Time to sleep") }
})

myPetDog.appetite(true)

myPetCat.on('findTheFish', (e) => {
  console.log(e.reaction)
})

myPetCat.senseFish(5)
myPetCat.senseFish(3)
myPetCat.senseFish(2)
myPetCat.senseFish(1)
myPetCat.senseFish(1)
myPetCat.senseFish(0)
