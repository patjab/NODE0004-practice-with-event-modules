const EventEmitter = require('events')

class Dog extends EventEmitter {
  appetite(hungry) {
    this.emit('dogHungry', {hungry})
  }
}

module.exports = Dog
