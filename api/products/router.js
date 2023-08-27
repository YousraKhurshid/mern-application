const app = require('express')
const router = app.Router()
const { getProducts, postProducts } = require('./controller')

router.get('/products', getProducts)
// router.get('/getallproducts', getallProducts)
router.post('/addproduct', postProducts)
//product by id
//product by category
//product by brand
//update and delete

module.exports = router