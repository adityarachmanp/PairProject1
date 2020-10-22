const routes = require('express').Router()
const Controller = require('../controllers/Controller')

routes.get('/', Controller.home)
routes.get('/products', Controller.productView)
routes.get('/products/add', Controller.productAddForm)
routes.post('/products/add', Controller.productAdd)
routes.get('/products/delete/:id', Controller.productDelete)
routes.get('/products/update/:id', Controller.productUpdate)
routes.get('/customers', Controller.home)

module.exports = routes