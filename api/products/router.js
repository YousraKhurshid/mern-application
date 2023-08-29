const app = require('express')
const router = app.Router()
const { getProducts, getallProducts, postProducts, getproductByID, getproductBycategory, getproductByBrand, updateproduct, deleteproduct } = require('./controller')

router.get('/products', getProducts)
router.get('/getallproducts', getallProducts)
router.post('/addproduct', postProducts)
router.get('/get-product-by-id', getproductByID)
router.get('/get-product-by-category', getproductBycategory)
router.get('/get-product-by-brand', getproductByBrand)
router.put('/update-product', updateproduct)
router.delete('/delete-product', deleteproduct)

module.exports = router