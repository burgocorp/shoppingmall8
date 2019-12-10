const express = require('express');

const router = express.Router();

const checkAuth = require('../middleware/check-auth');

const productController = require('../controllers/product');




router.get('/', productController.product_get_all);

router.get('/:product_id', productController.product_get_detail);

router.post('/', productController.product_posting);

router.patch('/:product_id',productController.product_update);

router.delete('/:product_id', productController.product_delete);




module.exports = router;
