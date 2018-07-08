const EventEmitter = require('events')

class Cat extends EventEmitter {
  senseFish(numOfFish) {
    switch(numOfFish) {
      case 0:
        this.emit('findTheFish', {reaction: 'meow :('})
        break;
      case 1:
        this.emit('findTheFish', {reaction: 'meow :O'})
        break;
      default:
        this.emit('findTheFish', {reaction: 'meow!!! :D'})
    }
  }
}

module.exports = Cat
