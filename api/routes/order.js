const express = require('express');

const router = express.Router();

const checkAuth = require('../middleware/check-auth');

const orderController = require('../controllers/order');


router.get('/', checkAuth, orderController.order_get_all);

router.get('/:order_id', checkAuth, orderController.order_get_detail);

router.post('/', checkAuth, orderController.order_posting);

router.patch('/:order_id', checkAuth, orderController.order_update);

router.delete('/:order_id', checkAuth, orderController.order_delete);





module.exports = router;