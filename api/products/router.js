const express = require('express'); 
const router = express.Router();    
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const { getProducts, getallProducts, postProducts, getproductByID, getproductBycategory, getproductByBrand, updateproduct, deleteproduct } = require('./controller');

router.get('/product', getProducts);
router.get('/getallproducts', getallProducts);
router.post('/addproduct', postProducts);
router.get('/get-product-by-id', getproductByID);
router.get('/get-product-by-category', getproductBycategory);
router.get('/get-product-by-brand', getproductByBrand);
router.put('/update-product', updateproduct);
router.delete('/delete-product', deleteproduct);

module.exports = router;
