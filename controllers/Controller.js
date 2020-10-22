const { Product } = require('../models')

class Controller {
  static home(req, res) {
    res.send('home')
  }
  static productView(req, res) {
    Product.findAll()
     .then(data => {
       res.render('product',{data})
     })
     .catch(err => {
        res.send(err)
     })
  }
  static productAddForm(req, res) {
    Product.findAll()
     .then(data => {
       res.render('addproduct',{data})
     })
     .catch(err => {
        res.send(err)
     })
  }
  static productAdd(req, res) {
    const obj = {
      "name":	req.body.name,
      "qty"	: req.body.qty,
      "price":req.body.price
    }
    Product.create(obj)
    .then(data =>{
      res.redirect('/products')
    }).catch(err=>{
      res.send(err)
    })
  }
  static productUpdateForm(req, res) {
    let id = +req.params.id
    Product.findByPk(id)
    .then(data => {
      res.render('updateproduct',{data})
    })
    .catch(err => {
       res.send(err)
    })
  }
  
  static productUpdate(req, res) {
    let id = +req.params.id
    let {name, qty, price} = req.body
    Product.update({
      name, qty, price
    },{
      where:{
        id: id
      }
    })
    .then(data => {
      res.redirect('/products')
    })
    .catch(err => {
       res.send(err)
    })
  }
  

  static productDelete(req, res) {
    let id = +req.params.id
    Product.destroy({where:{id:id}})
    .then(data => {
      res.redirect('/products')
    })
    .catch(err => {
       res.send(err)
    })
  }
}

module.exports = Controller