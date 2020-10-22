const routes = require('express').Router()
const Controller = require('../controllers/Controller')

routes.get('/', Controller.home)
routes.get('/customers/register', Controller.registerFormCustomer)
routes.post('/customers/register', Controller.registerCustomer)
routes.get('/login', Controller.loginForm)
routes.post('/login', Controller.login)


routes.use(function(req, res, next) {
  console.log(req.session.userId, '<<<<<<index')
  if (typeof req.session.userId !== 'number') {
    res.redirect('/login?error=Please login first')
  } else {
    next()
  }
})
routes.get('/logout', Controller.logout)
routes.get('/products', Controller.productView)
routes.get('/products/add', Controller.productAddForm)
routes.post('/products/add', Controller.productAdd)
routes.get('/products/delete/:id', Controller.productDelete)
routes.get('/products/buy/:id', Controller.buy)
routes.get('/products/update/:id', Controller.productUpdateForm)
routes.post('/products/update/:id', Controller.productUpdate)

module.exports = routes