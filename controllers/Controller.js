const { Product, Customer } = require('../models')
const bcrypt = require('bcryptjs')

class Controller {
  static home(req, res) {
    res.render('home')
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
  static buy(req, res) {
    let id = +req.params.id
    Product.findByPk(id)
      .then(data => {
        let {qty} = data
        return Product.update({
          qty: qty - 1
        },{
          where:{
            id: id
          }
        })
      })
      .then(data => {
        res.redirect('/products')
      })
      .catch(err => {
        res.send(err)
      })
  }
  static registerFormCustomer(req, res) {
    res.render('customer-register')
  }
  static registerCustomer(req, res) {
    const obj = {
      "name":	req.body.name,
      "password": req.body.password,
    }
    Customer.create(obj)
    .then(data =>{
      res.redirect('/')
    }).catch(err=>{
      res.send(err)
    })
  }
  static loginForm(req, res) {
    res.render('login')
  }
  static login(req, res) {
    let { name, password} = req.body
    Customer.findOne({
      where: {
        name: name
      }
    })
     .then(data => {
       
       if (data.name) {
         let isValidPass = bcrypt.compareSync(password, data.password)

         if (isValidPass) {

           req.session.userId = +data.id

           return res.redirect('/')
         } else {
           return res.redirect('/login?error=invalid password')
         }
       }
     })
     .catch(err => {
        res.send(err)
     })
  }
  static logout(req, res) {
    delete req.session.userId

    res.redirect('/')
  }
}

module.exports = Controller