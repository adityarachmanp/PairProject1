const { Product } = require('../models')

class Controller {
  static home(req, res) {
    res.send('home')
  }
  static productView(req, res) {
    Product.findAll()
     .then(data => {
       res.send(data)
     })
     .catch(err => {
        res.send(err)
     })
  }
  static productAddForm(req, res) {
    res.send('home')
  }
  static productAdd(req, res) {
    res.send('home')
  }
  static productUpdate(req, res) {
    res.send('home')
  }
  static productDelete(req, res) {
    res.send('home')
  }
}

module.exports = Controller