const express = require('express');

const router = express.Router();

const checkAuth = require('../middleware/check-auth');

const productController = require('../controllers/product');




router.get('/', checkAuth, productController.product_get_all);

router.get('/:product_id',checkAuth, productController.product_get_detail);

router.post('/', checkAuth, productController.product_posting);

router.patch('/:product_id', checkAuth, productController.product_update);

router.delete('/:product_id', checkAuth, productController.product_delete);




module.exports = router;
