const express = require('express');

const router = express.Router();

const checkAuth = require('../middleware/check-auth');

const orderController = require('../controllers/order');


router.get('/', orderController.order_get_all);

router.get('/:order_id', orderController.order_get_detail);

router.post('/', orderController.order_posting);

router.patch('/:order_id', orderController.order_update);

router.delete('/:order_id', orderController.order_delete);





module.exports = router;